import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Title from './title'
import $ from 'jquery'
class Publish extends Component {
    constructor() {
        super()
        this.state = {
            name: '',

        }
    }
    componentWillMount() {
        var str=document.cookie.slice(9)
        this.setState({ name:str })       
    }
    componentDidMount(){
        $('#user').val(this.state.name)
    }
    render() {
        return (
            <div className="publish">
                <Title></Title>
                <ul className='publish-list'>
                    <li className='pub'>
                        <form action="http://localhost:3010/publish" method="post" enctype="multipart/form-data">
                            <input type="text" name="username" id="user" style={{display:'none'}}/>
                            <label htmlFor="food">美食</label>
                            <input type="radio" name="sort" id="food" value='food' />
                            <label htmlFor="sport">运动</label>
                            <input type="radio" name="sort" id="sport" value='sport' />
                            <label htmlFor="music">音乐</label>
                            <input type="radio" name="sort" id="music" value='music' /><br />
                            <input type="file" name="video" id="pub-video" /><br/>
                            <button id='replace'>请选择视频</button>
                            <span id='span_1'>视频标题：</span><input type="text" name="title" id='video-title'/>
                            <span id='span_2'>视频简介：</span><textarea name="introduction" id="video-introduction" cols="30" rows="10"></textarea>
                            <button type="submit" id='submit-btn'>上传</button>
                        </form>

                    </li>
                </ul>

            </div>
        )
    }
}
export default Publish