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
  updateTodo=(id,done)=>{
    const {todos}=this.state;
    //  匹配并加工数据：
    const newtodos = todos.map((todo)=>{
      if(todo.id===id) return {...todo,done:done}
      else return {...todo}
     })
     this.setState({
      todos:newtodos
     })

  }
  removeTodo=(id)=>{
    const {todos}=this.state
    //  在一个数组里，删除指定id 的对象元素， 用数组里的过滤： 
    const newtodos = todos.filter((todo)=>{
      return todo.id!==id

    })
    this.setState({
      todos:newtodos
    })
  }
  checkAll=(done)=>{
    const {todos} = this.state
     const newtodos = todos.map((todoObj)=>{
      return {...todoObj,done:done}

     })
     this.setState({
      todos:newtodos
     })
      }
    removeDone=()=>{
      const {todos}=this.state
      const newtodos = todos.filter(todoObj=>{
        return todoObj.done===false
      })
      this.setState({
        todos:newtodos
      })
    }
  render() {
    return (
        <div className = "todoContainer">
            <h1>To Do List</h1>
            <Header addTodo={this.addTodo} todos={this.state.todos}/>
            <List todos={this.state.todos} updateTodo={this.updateTodo} removeTodo={this.removeTodo}/>
            <Footer todos = {this.state.todos} checkAll={this.checkAll} removeDone={this.removeDone}/>
        </div>
    )
  }
}
