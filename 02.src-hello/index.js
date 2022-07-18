//  引入 react 核心库
import React from 'react'
//  引入 ReactDOM
import ReactDOM from "react-dom/client"

//  引入 App 组件 
import App from './App.js'
//  渲染App组件到页面
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)