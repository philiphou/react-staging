import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'

import './App.css'

export default class App extends Component {
 render() {
    return (
    <div className='container'>
      <div className='row'>
        <div className='col-xs-8'>
          <div className='page-header'>
            <h2>React Router Demo</h2>
            <hr/>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-xs-3 '>
          <div className='list-group'>
              {/* <a className='list-group-item' href="./about.html">About</a>
              <a className='list-group-item' href="./home.html">Home</a> */}
        
              <Link className = 'list-item' to="/about">About</Link>
              <Link className = 'list-item' to="/home">Home</Link>
            
             </div>
        </div>
          <div className='col-xs-5'>
          <div className='panelA'>
             <div className='panel-body'>
              {/*  注册路由*/}
       
                <Route path='/about' component={About}/>
                <Route path='/home' component={Home}/>
              
             </div>
          </div>
        </div>
        <hr/>
      </div>
      </div>
   
 
     
    )
  }
}
