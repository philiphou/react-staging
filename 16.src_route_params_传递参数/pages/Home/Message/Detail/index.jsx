
import React, { Component } from 'react'
const DetailData =[
  {
    id:'01',
    content:'hello China'
  },
  {
    id:'02',
    content:'hello React'
  },
  {
    id:'03',
    content:'hello World'
  }
]
export default class Detail extends Component {
  render() {
    //console.log(this.props) // 在 match 的 params 里接收到了传递来的路由参数： id 和 title
    const {id,title}=this.props.match.params
    console.log(id,title)
    const element = DetailData.find(e=>{
      return e.id ===id
    })
    console.log(element)
    return(
      <ul>
      <li>id:{element.id}</li>
      <li>Title:{title}</li>
      <li>Content:{element.content}</li>
     </ul>
    )


  }
}
