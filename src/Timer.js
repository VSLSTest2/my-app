import React from 'react';
import ReactDOM from 'react-dom';

export default class Timer extends React.Component{
    constructor(){
        super()
        this.state = {
            currentTime: ''
        }
    }
    componentWillMount(){
        setInterval(()=>{this.setState({currentTime: new Date().toLocaleString()})},1000)
    }

    
    render(){
        return(
            <div>
                Current Time: {this.state.currentTime}
            </div>
        )
    }
}