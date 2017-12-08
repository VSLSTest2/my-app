import React from 'react';
import ReactDOM from 'react-dom';
import UserInfo from './UserInfo';

class Comments extends React.Component{
    constructor(commentdata){
        super(commentdata);
        this.state = commentdata;
    }
    

    render(){
        return (
            <div className="Comment">
                <UserInfo user={this.state.commentdata.user} />
                <div className="Comment-text"> {this.state.commentdata.text}</div>
                <div className="Comment-date"> {this.state.commentdata.date}</div>
            </div>
        );
    }
}

export default Comments