import { Component } from 'react'

class GoBackBtn extends Component {
    constructor() {
        super()
    }
    
    render() {
        const {goBack}=this.props
        return (           

                <button className='goback' onClick={() => {goBack()}}>{'<'}</button>
            
        )
    }
}
export default GoBackBtn