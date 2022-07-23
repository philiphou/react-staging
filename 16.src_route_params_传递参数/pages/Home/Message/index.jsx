import React, { Component } from 'react';
import Detail from './Detail'
import {Link,Route} from "react-router-dom"

class Message extends Component {
    state={
        messageArr:[
            {
                id:'01',
                title: 'message01',
            },
            {
                id:'02',
                title: 'message02',
            },
            {
                id:'03',
                title: 'message03',
            }
        ]
    }
    render() {
        return (
           <div>
             <ul>
                 {
                    this.state.messageArr.map(item=>{
                        return(
                            <li key={item.id}>
                                {/* 向路由组件传递params参数*/}
                            <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link> 
                            </li>
                        )
                    }
                )
                }
          </ul>
          <hr/>
          {/* 路由组件声明接收params参数 */}
          <Route path={`/home/message/detail/:id/:title`}component = {Detail}/>
           </div>
           
        );
    }
}

export default Message;
