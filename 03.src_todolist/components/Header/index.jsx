import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './index.css'

class Header extends Component {
    static propTypes={
        //  对接收的props 进行类型以及必要性的限制
        addTodo: PropTypes.func.isRequired

    }

    myRef = React.createRef()
    handleClick=()=>{
    const {todos,addTodo}=this.props
    const todoObj={}
    todoObj.id=todos.length+1
    if(this.myRef.current.value!==''){
        todoObj.todo=this.myRef.current.value
    } else{
        alert('please enter a valid task')
       return
    }
 
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
