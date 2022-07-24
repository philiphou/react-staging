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
    
    replaceShow=(id,title)=>{
        // 编写一段代码，让其实现跳转到detail组件，且为replace跳转：路由组件的props 属性中 history里有push 和 replace api:
        //  replace 跳转 加 携带 params 参数
        this.props.history.replace(`/home/message/detail/${id}/${title}`)
    }
    pushShow=(id,title)=>{
        // 编写一段代码，让其实现跳转到detail组件，且为replace跳转：路由组件的props 属性中 history里有push 和 replace api
        //  push跳转，加携带 params 参数
        this.props.history.push(`/home/message/detail/${id}/${title}`)
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
                            &nbsp;<button onClick={()=>{this.pushShow(item.id,item.title)}}>Push 查看</button>
                            &nbsp;<button  onClick={()=>{this.replaceShow(item.id,item.title)}}>Replace 查看</button>
                            {/* 向路由组件传递 search 参数 */}
                            {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}
                            {/* 向路由组件传递 state 参数, to 传递的是一个对象{} */}
                            {/* <Link  to={{pathname:'/home/message/detail',state:{id:item.id,title:item.title}}}>{item.title}</Link> */}
                            </li>
                        )
                    }
                )
                }
          </ul>
          <hr/>
          {/* 路由组件声明接收params参数 */}
          <Route path={`/home/message/detail/:id/:title`}component = {Detail}/>
          {/* search参数无需声明接收 */}
          {/* <Route path={`/home/message/detail`} component={Detail}/> */}
          {/*state参数无需声明接收,正常注册即可   */}
          {/* <Route path="/home/message/detail" component={Detail}/> */}
                <button onClick={this.props.history.goBack}>goBack</button>&nbsp;
                <button onClick={this.props.history.goForward}>goForward</button>&nbsp;
                <button onClick={()=>{this.props.history.go(2)}}>go(2)</button>&nbsp;

        </div>
           
        );
    }
}

export default Message;
