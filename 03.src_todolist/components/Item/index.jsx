import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  //  标识鼠标移入移出
  state={
    mouse:false
  }
  //  鼠标移入移出的回调
  handleMouse=(flag)=>{
    //  注意要用高阶函数
    return ()=>{

    this.setState({
      mouse:flag
    })
    }
  }
  //  勾选或者取消勾选的回调
  handleCheck=(id)=>{
    const {updateTodo}=this.props
    return (event)=>{
      updateTodo(id,event.target.checked)
     

    }
  }
  handleRemove=(id)=>{
    //  需要使用 window 下的 api  confirm, 因为是严格模式
    if(window.confirm('are you sure to delete?')){
      
      this.props.removeTodo(id)
    }

  }
  render() {
    const {todo}=this.props
    const {mouse}=this.state
      return (
     
          <li onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}key={todo.id} style={{backgroundColor:mouse?"#ddd":"white"}}>
                  <label>
                    <input type="checkbox" checked={todo.done} onChange={this.handleCheck(todo.id)}/> 
                    <span className='todoTitle'>{todo.todo}</span>
                  </label>
                  <button className='btn' onClick = {()=>this.handleRemove(todo.id)} style={{display:mouse?"inline-block":"none"}}>Delete?</button>
              </li>
      
   
        )

    }
    
}

