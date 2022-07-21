import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import './App.css'

export default class App extends Component {
  state = {
    users:[] // 初始化状态，users 初始值为空数组
  }
  saveUsers=(users)=>{
    this.setState({
      users:users
    })

  }
  render() {
    return (
      <div className='container'>
        <Search saveUsers={this.saveUsers}/>
        <List users={this.state.users}/>
      </div>
    )
  }
}
