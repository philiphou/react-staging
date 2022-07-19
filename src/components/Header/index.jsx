import React, { Component } from 'react';
import './index.css'

class Header extends Component {

    myRef = React.createRef()
    handleClick=()=>{
    const {todos,addTodo}=this.props
    const todoObj={}
    todoObj.id=todos.length+1
    todoObj.todo=this.myRef.current.value
    todoObj.done=false;
    addTodo(todoObj)
    this.myRef.current.value =''
       }

    render() {
        return (
                <div className='todoHeader'>
                <input ref={this.myRef} className = 'todoadd'type="text" placeholder='please input your task and enter'/>
                <button className='addbtn'onClick={this.handleClick}> Add Todo</button>
            </div>
        );
    }

}
export default Header;
