import React, { Component } from 'react'
import $ from 'jquery'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Title from './title'
class Sort extends Component {
  constructor() {
    super()
    this.state = {
      data: ['美食', '运动', '音乐']
    }
  }

  render() {
    return (
      <div className="sort">
        <Title></Title>
        <ul className='sort-list'>
          {

            this.state.data.map((item, index) => {
              return (
              <li className='sort-li' key={item}>
                <Link to={`/${item}`}>
                  <span id={`span${index}`}>{item}</span> 
                  <img src={`/server/data/picture/${item}`}  alt=""/>
                  </Link>
                
              </li>
              )

            })
          }
        </ul>
      </div>
    )
  }
}
export default Sort;
