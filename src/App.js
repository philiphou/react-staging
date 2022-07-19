import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import "./App.css"


export default class App extends Component {
  //  初始化状态
  state={
    todos:[
      {
        id:1,
        todo:'eat',
        done:true
      },
      {
        id:2,
        todo:'walk',
        done:true
      },
      {
        id:3,
        todo:'code',
        done:false
      },
      {
        id:4,
        todo:'shopping',
        done:false
      }


    ]

  }
  addTodo=(todoObj)=>{
    const {todos}=this.state
    const newtodos=[...todos,todoObj]
    this.setState({
      todos:newtodos
    })
  }
  render() {
    return (
        <div className = "todoContainer">
            <h1>To Do List</h1>
            <Header addTodo={this.addTodo} todos={this.state.todos}/>
            <List todos={this.state.todos}/>
            <Footer/>
        </div>
    )
  }
}
