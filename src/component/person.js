import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import $ from 'jquery'
import Title from './title'

class Person extends Component {
    constructor() {
        super()
        this.state = {
            name: '',

        }
    }
    componentWillMount() {
        var url = window.location.href
        var newUrl = url.split('/')
        this.setState({ name: newUrl[4] })
    }
    send() {
        $.ajax({
            url: 'http://localhost:3010/tuichu',
            type: 'get',
            async: false,
            xhrFields: {
                withCredentials: true,  //在这里也要设置允许携带cookie
            },
            success: (e) => {
                if (e) {
                    window.location.href = '/'
                }

            }
        })
    }
    render() {
        if (this.state.name == 'admin') {
            return (
                <div className='person'>
                    <Title></Title>
                    <ul className='person-list'>
                        <p>{this.state.name}</p>
                        <h6>想要写点什么......</h6>
                        <hr/>
                    <Link to='/audit' className='btn_1'>审核视频</Link>
                    <Link to='/login' className='btn_2' onClick={() => {
                            this.send()
                        }}>退出登录</Link>
                    </ul>
                </div>
                
            )
        }else{
            return (
                <div className="person">
                    <Title></Title>
                    <ul className='person-list'>
                        <p>{this.state.name}</p>
                        <h6>想要写点什么......</h6>
                        <hr/>
                        <Link to='/publish'className='btn_1'>上传视频</Link>
                        <Link to='/list' id='btn_3'>视频列表</Link>
                        <Link to='/login'  className='btn_2' onClick={() => {
                            this.send()
                        }}>退出登录</Link>
    
                    </ul>
                </div>
            )
        }        
    }
}

export default Person