import React, { Component } from 'react'
import Title from './title'
import $ from 'jquery'
import Video from './video'
class List extends Component {
    constructor() {
        super()
        this.state = {
            arr: ['']
        }
    }
    componentDidMount() {
        var a = document.cookie.split('=')
        console.log(a)
        $.ajax({
            url: 'http://localhost:3010/list',
            type: 'post',
            data: {
                username: a[1]
            },
            success: (e) => {
                this.setState({
                    arr: e
                })
                console.log(this.state.arr)
            }
        })
    }
    render() {
        return (
            <div className='list'>
                <Title></Title>
                <div className='person-video-list'>
                    {

                        this.state.arr.map((item, index) => {
                            return (
                                <li className='list' key={item.name}>
                                    <Video src={`/server/data/video/${item.name}`}></Video><br />
                                    <span className='audit-video'>标题：{item.title}</span>
                                    <span className='audit-video'>视频类型：{item.sort}</span><br />
                                    <span className='audit-video'>视频简介：{item.introduction}</span><br />
                                    <span className='audit-video'>状态：{item.state == 1 ? '已通过' : '未通过'}</span>

                                </li>
                            )

                        })
                    }
                </div>
            </div>
        )
    }


}
export default List