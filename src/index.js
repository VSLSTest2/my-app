import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Welcome from './Welcome';
import Comments from './Comments';

function tick(){
    const element = (<div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>);
    
}
const c = {
    type: "comments",
    props:{
        author:{
            user:{
                avatarUrl:'https://avatars2.githubusercontent.com/u/2089938?v=4&s=40',
                name:'Rex.Song'
            }
        },
        text: 'asdkfjlieija;sd;l',
        date: '2018-8-2'
    }
};

const cc = {
        //author:{
        //    user:{
        //        avatarUrl:'https://avatars2.githubusercontent.com/u/2089938?v=4&s=40',
        //        name:'Rex.Song'
        //    }
        //},
        text: 'asdkfjlieija;sd;l',
        date: '2018-8-2'
}
var data = {
            user:{
                avatarUrl:'https://avatars2.githubusercontent.com/u/2089938?v=4&s=40',
                name:'Rex.Song'
            },
            text: 'sample-data', 
            date:'2019-1-1'
        }



// ReactDOM.render(
// <Comments commentdata={data}/>,
// document.getElementById("root")
// );
ReactDOM.render(<App/>, document.getElementById("root"));
//ReactDOM.render(<App />, document.getElementById('root'));
//setInterval(tick, 1000);
registerServiceWorker();