import React, { Component } from 'react'
import $ from 'jquery'
import path from 'path'
import Title from './title'
import Video from './video'
class Home extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      path: path.resolve('../../../server/data/video/')
    }
  }
  componentWillMount() {

    $.ajax({
      url: 'http://localhost:3010/getList',
      type: "post",
      data: {
        state: "1"
      },
      success: (result) => {
        this.setState({
          data: result
        })
      }
    })
  }
  render() {
    return (
      <div className="home">
        <Title></Title>
        <ul className='hot-title'>
          <li id='hot-title'>热门视频</li>
        </ul>
        <ul className='hot'>
          {

            this.state.data.map((item, index) => {
              return (
                <li className='list' key={index} onClick={() => {
                  window.location.href = `/video/${item.name}`
                }}>
                  <Video src={this.state.path + '/' + item.name}></Video><br />
                  <span className='audit-video'>标题：{item.title}</span>
                  <span className='audit-video'>发布作者：{item.username}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
export default Home;
