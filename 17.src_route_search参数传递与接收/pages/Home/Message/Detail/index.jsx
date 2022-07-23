
import React, { Component } from 'react'
import qs from "querystring"

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

    console.log(this.props)
     // 在 match 的 params 里接收到了传递来的路由参数： id 和 title
    // const {id,title}=this.props.match.params // 接收 params 参数
    //  接收 search 参数：路由传递的参数在： this.props.location.search 里 是以字符串形式展现： "?id=01&title=message01", 需要转换成对象的键值对形式
    const {search}=this.props.location
    console.log(search)
   const rst = qs.parse(search.slice(1))
   console.log(rst)

    const element = DetailData.find(e=>{
      return e.id ===rst.id
    })
 
    return(
      <ul>
      <li>id:{element.id}</li>
      <li>Title:{rst.title}</li>
      <li>Content:{element.content}</li>
     </ul>
    )


  }
}
