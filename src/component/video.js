import React from 'react'
import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';
import $ from 'jquery'

class Video extends React.Component {
    danmu(text) {
        var video = document.getElementById('video')
        var newP = document.createElement('p')
        newP.innerHTML = text
        newP.className = 'active'
        newP.style.top = Math.random() * 400 + 'px'
        video.appendChild(newP)
        setTimeout(function () {
            newP.style.left = '-100%'
        }, 10)
        $('#danmu').val('')
    }
    getDanmu() {
        $.ajax({
            url: 'http://localhost:3010/content',
            type: 'post',
            data: {
                name: window.location.href.split('/')[4]
            },
            success: (e) => {
                console.log(e[0].danmu)
                this.player.on('timeupdate', function () {
                    console.log(this.cache_.currentTime)
                    for (var i = 0; i < e[0].danmu.length; i++) {
                        if (e[0].danmu[i].time - this.cache_.currentTime > -0.13 && e[0].danmu[i].time - this.cache_.currentTime < 0.2) {
                            var video = document.getElementById('video')
                            var newP = document.createElement('p')
                            newP.innerHTML = e[0].danmu[i].text
                            newP.className = 'active'
                            newP.style.top = Math.random() * 400 + 'px'
                            video.appendChild(newP)
                            setTimeout(function () {
                                newP.style.left = '-100%'
                            }, 10)
                        }
                    }
                })





            }
        })
    }
    componentDidMount() {
        if (window.location.href.split('/').length == 4) {

        } else {
            this.getDanmu()
        }

        this.option = {
            controls: true,
            sources: [{
                src: this.props.src,
            }]

        };
        this.player = videojs(this.videoNode, this.option, function onPlayerReady() {
            console.log('onPlayerReady', this);
        });
        var btn = document.getElementById('danmu-btn')
        btn.onclick = () => {
            if (document.cookie == '') {
                window.location.href = '/login'
            } else {
                if ($('#danmu').val() == '') {

                } else {
                    var time = this.player.currentTime()
                    $.ajax({
                        url: 'http://localhost:3010/danmu',
                        type: 'post',
                        data: {
                            name: window.location.href.split('/')[4],
                            text: $('#danmu').val(),
                            time: time
                        },
                        success: (e) => {
                            if (e.n == 1 && e.ok == 1) {
                                this.danmu($('#danmu').val())
                            }
                        }
                    })
                }

            }

        }

    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    render() {

        return (
            <div className='video-wrap'>

                <video ref={node => this.videoNode = node} id={this.props.id} className="video-js vjs-default-skin video vjs-big-play-centered"  ></video>
                <input type="text" id='danmu' style={{ display: window.location.href.split('/').length == 4 ? 'none' : '' }} /><button id='danmu-btn' style={{ display: window.location.href.split('/').length == 4 ? 'none' : '' }}>发送</button><br />

            </div>
        );

    }


}

export default Video