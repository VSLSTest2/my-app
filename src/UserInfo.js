import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './Avatar';

class UserInfo extends React.Component{
    constructor(user){
        super(user);
        this.state = user;
    }

    render(){
        return (
            <div className="UserInfo">
                <Avatar user={this.state.user} />
                <div className="UserInfo-name"> {this.state.user.name}</div>
            </div>
         );
    }
}

export default UserInfo