import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import "./index.css"

export default class List extends Component {
  static propTypes={
    //  对接收的props 进行类型以及必要性的限制
   updateTodo: PropTypes.func.isRequired,
   todos: PropTypes.array.isRequired,
   removeTodo: PropTypes.func.isRequired,

}
  render() {
     const {todos,updateTodo,removeTodo}=this.props
    return (
     <ul className='todoMain'>
      {
        todos.map(todo=>{
          return <Item key = {todo.id} todo={todo} updateTodo={updateTodo} removeTodo={removeTodo}/>
        })
      }
    
     </ul>
    )
  }
}
