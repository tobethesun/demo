import React, { Component } from 'react'
class Pinglun extends Component {
    constructor() {
        super()
        this.state = {
            arr: ['']
        }
    }
    componentDidMount(){
        this.setState({
            arr:this.props.arr
        })
    }
    render() {
        console.log(this.state.arr)
        console.log(this.props)
        if(this.state.arr==null){
            return(
                <div></div>
            )
        }else{
            return (
                <div className='pinglunqu'>
                    <ul className='pinglun-list'>
                        {
                            this.state.arr.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <span>{item.username}</span>
                                        <span>{item.text}</span><br />
                                        <span id='moment'>{item.moment}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        }
        }
        
}
export default Pinglun