import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state={
    mouse:false
  }
  handleMouse=(flag)=>{
    //  注意要用高阶函数
    return ()=>{

    this.setState({
      mouse:flag
    })
    }
  }
  render() {
    const {todo}=this.props
    const {mouse}=this.state
      return (
     
          <li onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}key={todo.id} style={{backgroundColor:mouse?"#ddd":"white"}}>
                  <label>
                    <input type="checkbox" defaultChecked={todo.done}/> 
                    <span className='todoTitle'>{todo.todo}</span>
                  </label>
                  <button className='btn' style={{display:mouse?"inline-block":"none"}}>Delete?</button>
              </li>
      
   
        )

    }
    
}

