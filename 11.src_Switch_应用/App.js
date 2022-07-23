import React, { Component } from 'react'
import {NavLink,Route,Switch} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './component/Header'
import Test from './component/Test'
import MyNavLink from './component/MyNavLink'

import './App.css'

export default class App extends Component {
 render() {
    return (
    <div className='container'>
      <div className='row'>
        <div className='col-xs-8'>
          <div className='page-header'>
           <Header/>
            <hr/>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-xs-3 '>
          <div className='list-group'>
              {/* <a className='list-group-item' href="./about.html">About</a>
              <a className='list-group-item' href="./home.html">Home</a> */}
             <NavLink activeClassName="myactive" className = 'list-group-item '  to="/about">About</NavLink>
              <NavLink className = 'list-group-item' to="/home">Home</NavLink>
              {/* 标签体内容是一个特殊的props 属性，叫children */}
              <MyNavLink to="./test">Test</MyNavLink>

          </div>
        </div>
          <div className='col-xs-5'>
          <div className='panelA'>
             <div className='panel-body'>
              {/*  注册路由*/}
               <Switch>
               <Route path='/about' component={About}/>
                <Route path='/home' component={Home}/>
                <Route path='/home' component={Test}/> 
               </Switch>

              
             </div>
          </div>
        </div>
        <hr/>
      </div>
      </div>
   
 
     
    )
  }
}
