import React, { Component } from 'react'
import Video from './video'
import $ from 'jquery'
import Title from './title'
import Pinglun from './pinglun';
import 'video.js/dist/video-js.min.css';
class Content extends Component {
    constructor() {
        super()
        this.state = {
            arr: [''],
            name: window.location.href.split('/'),
            username: '',
            data: null

        }
    }

    change() {
        $.ajax({
            url: 'http://localhost:3010/content',
            type: 'post',
            data: {
                name: this.state.name[4]
            },
            success: (e) => {
                this.setState({
                    arr: e,
                    data: true
                })
                console.log(this.state.arr)
            }
        })
    }
    pinglun(){
        if (document.cookie == '') {
            window.location.href = '/login'
        } else {

            $.ajax({
                url: 'http://localhost:3010/pinglun',
                type: 'post',
                data: {
                    name: this.state.name[4],
                    username: this.state.username,
                    text: $('#pinglun').val(),
                },
                success: (e) => {
                    if (e.ok == 1 && e.n == 1) {
                        this.change()
                    } else {
                        alert('发表评论失败')
                    }
                }
            })
            this.setState({
                data:null
            })
        }
    }
    componentDidMount() {
        var user = document.cookie.split('=')
        this.setState({
            username: user[1]
        })
        this.change()
    }
    render() {
        console.log(this.state.arr[0].pl)
        if (this.state.data == null) {
            return (
                <div></div>
            )
        } else {
            return (
                
                <div className='content'>

                    <Title></Title>
                    <div className='video-content'>
                        <Video src={this.state.name[4]} id='video'></Video>
                        <span className='span-video'>标题：{this.state.arr[0].title}</span>
                        <span className='span-video'>发布作者：{this.state.arr[0].username}</span>
                        <span className='span-video'>视频类型：{this.state.arr[0].sort}</span><br />
                        <span className='span-video'>视频简介：{this.state.arr[0].introduction}</span><br />
                        <textarea name="" id="pinglun" cols="87" rows="5"></textarea><button id="pinglun-btn" onClick={() => {
                            this.pinglun()
                        }}>发表评论</button>
                    </div>
                        <Pinglun arr={this.state.arr[0].pl}></Pinglun>
                        
                </div>
            )
            
        }

    }
}
export default Content;