//  引入 react 和 component, 注意 {component} 不是解构赋值，而是多种暴露方式；有默认暴露
import React,{Component} from 'react'
import Hello from './components/hello/hello'
import Welcome from './components/welcome/welcome'
//  创建外壳组件App 并暴露
export default class App extends Component{
    render(){
        return(
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }

}

