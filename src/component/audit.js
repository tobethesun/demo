import React, { Component } from 'react'
import $ from 'jquery'
import path from 'path'
import Video from './video'
import Goback from './goback'
import Title from './title'
class Audit extends Component {
    constructor() {
        super()
        this.state = {
            arr: [],
            path: path.resolve('../../../server/data/video/'),
        }
    }
    getList(){
        $.ajax({
            url: 'http://localhost:3010/getList',
            type: 'get',
            success: (e) => {
                this.setState({
                    arr: e
                })
            }
        })
    }
    pass(item) {
        $.ajax({
            url: 'http://localhost:3010/pass',
            type: 'post',
            data: {
                name: item.target.className,
                state: 1
            },
            success: (e) => {
                if (e.n == 1 && e.ok == 1) {
                    this.getList()
                }
            }
        })
    }
    noPass(item) {

        $.ajax({
            url: 'http://localhost:3010/noPass',
            type: 'post',
            data: {
                name: item.target.className,
                state: 0
            },
            success: (e) => {
                if (e.n == 1 && e.ok == 1) {
                    this.getList()
                   
                }
            }
        })
    }
    
    componentWillMount() {
        this.getList()
    }
    render() {
        const { goBack } = this.props.history
        return (
            <div className='audit'>
                <Title></Title>
                <ul className='audit-list'>
                <Goback goBack={goBack}></Goback>
                    {
                        this.state.arr.map((item, index) => {
                            return (
                                <li className='list' key={item.name}>
                                   <Video src={this.state.path+'/'+item.name}></Video><br />
                                    <span className='audit-video'>标题：{item.title}</span>
                                    <span className='audit-video'>发布作者：{item.username}</span>
                                    <span className='audit-video'>视频类型：{item.sort}</span><br />
                                    <span className='audit-video'>视频简介：{item.introduction}</span><br/>
                                    <button className={item.name} id='pass-btn' style={{ display: 1 == item.state ? 'none' : 'inline-block' ,backgroundColor:'green',border:'1px solid green'}} onClick={(e) => { this.pass(e) }}>通过</button>
                                    <button className={item.name} id='unpass-btn' style={{ display: 0 == item.state ? 'none' : 'inline-block' ,backgroundColor:'red',border:'1px solid red'}} onClick={(e) => { this.noPass(e) }}>不通过</button>
                                </li>
                            )
                        })
                    }
                    </ul>
            </div>
        )
    }
}
export default Audit