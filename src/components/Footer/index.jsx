import React, { Component } from 'react';
import "./index.css"

class Footer extends Component {
    handleCheckAll=(event)=>{
     this.props.checkAll(event.target.checked)
    }
    removeFinished=()=>{
        this.props.removeDone()
    }
    render() {
        const {todos}=this.props
        const finishedTodos = todos.filter(todo=>{
            return todo.done===true
        })

        return (
            <div className='foot'>
                <hr />
                <input type="checkbox" onChange = {this.handleCheckAll} checked={finishedTodos.length===todos.length && todos.length!==0?true:false}/>
                <span>Finihsed {finishedTodos.length}/{todos.length}</span>
                <button className='btnn' onClick={this.removeFinished}>clear finished tasks</button>
            </div>
        );
    }
}

export default Footer
