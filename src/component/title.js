import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Title extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="title">
                <Link to='/'>首页</Link>
                <Link to='/sort'>分类</Link>
                <Link to={document.cookie == '' ? '/login' : `/person/${document.cookie.slice(9)}`}>我的</Link>
            </div>
        )
    }
}
export default Title;
