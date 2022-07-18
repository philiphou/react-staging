// 引入 react 和 component
import React,{Component} from 'react'
//  引入组件样式
import './hello.css'

// 创建 hello 组件并暴露 
export default class Hello extends Component{
    render(){
        return(
            <div>
                <h1 className='title'>Hello React From Philip</h1>
                <p> 中国加油</p>
            </div>
        )
    }
}