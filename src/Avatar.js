import React from 'react';
import ReactDOM from 'react-dom';

class Avatar extends React.Component{
    constructor(user){
        super(user);
        this.state = user;
    }

    render(){
        return (
            <img className="Avatar"
            src={this.state.user.avatarUrl}
            alt={this.state.user.name}
            />
         );
    }
}

export default Avatar