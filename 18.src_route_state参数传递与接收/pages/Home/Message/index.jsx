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
                            {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>  */}
                            {/* 向路由组件传递 search 参数 */}
                            {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}
                            {/* 向路由组件传递 state 参数, to 传递的是一个对象{} */}
                            <Link to={{pathname:'/home/message/detail',state:{id:item.id,title:item.title}}}>{item.title}</Link>
                            </li>
                        )
                    }
                )
                }
          </ul>
          <hr/>
          {/* 路由组件声明接收params参数 */}
          {/* <Route path={`/home/message/detail/:id/:title`}component = {Detail}/> */}
          {/* search参数无需声明接收 */}
          {/* <Route path={`/home/message/detail`} component={Detail}/> */}
          {/*state参数无需声明接收,正常注册即可   */}
          <Route path="/home/message/detail" component={Detail}/>

        </div>
           
        );
    }
}

export default Message;
