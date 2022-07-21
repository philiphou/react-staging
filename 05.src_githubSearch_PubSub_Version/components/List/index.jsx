import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
  state = {
    isFirst:true, // 是否第一次打开
    users:[], // 初始化状态，users 初始值为空数组
    isLoading: false,
    err:'' // 存储请求相关的错误信息

  }
  // List 组件挂载以后，开始订阅消息
  componentDidMount(){
    this.token = PubSub.subscribe('ss',(_,data)=>{this.setState(data)})
    
  }
  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }

  render() {
    const {users,isLoading,isFirst,err}=this.state
    console.log('List 组件收到数据了')
    return (
      <div className='row'>
        {
        isFirst?<h2>Welcome to Search Github Users</h2>:
        isLoading?<h2>Loading</h2>:
        err?<h2 style={{color:'red'}}>{err}</h2>:
        users.map(item=>{
            return(
                <div key = {item.id} className='card'>
                  <a href={item.html_url}>
                      <img src={item.avatar_url} style={{width:'100px'}} alt='notfound'/>
                  </a>
               </div>
            )
          })
        }
        
    </div>
    )
  }
}
