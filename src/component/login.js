import React, { Component } from 'react'
import $ from 'jquery'
import Title from './title'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username : "",
            password : ""
        }
    }
    getValue(e,params){
        console.log(e)
        if(params == 1){
            this.setState({
                username : e.target.value
            })
        }else{
            this.setState({
                password : e.target.value
            })
        } 
    }
    send(){
        $.ajax({
            url : 'http://localhost:3010/login',
            type : 'post',
            data : {
                ...this.state
            },
            success : function(e){
                document.cookie=`username=${e}`
                window.location.href=`/person/${e}`
            }
        })
    }
    componentWillMount(){
        $.ajax({
            url : 'http://localhost:3010/tiaozhuan',
            type : "get",
            xhrFields : {
                withCredentials : true,  //在这里也要设置允许携带cookie
            },
            success : function(e){
                window.location.href=`/person/${e}`
            }
        })
    }
    render() {
        return (
            <div className="login">
                 <Title></Title>
                <ul className='login-list'>
               
                    <form>
                        <input type="text" name="username" id="username" placeholder="账号" onChange={(e)=>{this.getValue(e , 1)}} /><br />
                        <input type="password" name="password" id="password" placeholder="密码" onChange={(e)=>{this.getValue(e , 2)}} /><br />
                        <button type="button" className='btn' onClick={()=>{this.send()}}>登录</button>
                        <input type="button" value="注册" className='btn' onClick={() => {
                        $.ajax({
                            url: 'http://localhost:3010/zhuce',
                            type: 'POST',
                            data: {
                                username: $('#username').val(),
                                password: $('#password').val()
                            },
                            success: (e) => {
                                console.log(e)
                                if (e.n == 1 && e.ok == 1) {
                                    alert('注册成功')
                                } else {
                                    alert('注册失败')
                                }
                            }
                        }
                        )
                    }} />
                    </form>

                    

                </ul>
            </div>
        )
    }
}

export default Login