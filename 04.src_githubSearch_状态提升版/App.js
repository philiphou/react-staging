import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import './App.css'

export default class App extends Component {
  state = {
    isFirst:true, // 是否第一次打开
    users:[], // 初始化状态，users 初始值为空数组
    isLoading: false,
    err:'' // 存储请求相关的错误信息

  }
  updateAppState=(stateObj)=>{
    this.setState(stateObj)
  }

  render() {
    return (
      <div className='container'>
        <Search updateAppState={this.updateAppState}/>
        <List{...this.state}/>
      </div>
    )
  }
}
