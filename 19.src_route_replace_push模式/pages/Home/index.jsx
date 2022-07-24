import React, { Component } from 'react'
import{Route,Switch,Redirect} from 'react-router-dom'
import MyNavLink from '../../component/MyNavLink'
import News from './News'
import Message from './Message'
import './index.css'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>Contents in Home</h3>
        <div>
          <ul className="nav bav-tabs">
            <li>
              <MyNavLink replace to='/home/news'>news</MyNavLink>
            </li>
            <li>
            <MyNavLink replace to='/home/message'>Message</MyNavLink>
            </li> 
          </ul>
          {/* 注册路由 */}
          <Switch>
          <Route path='/home/news' component={News}/>
           <Route path='/home/message' component={Message}/>
           <Redirect to='/home/news'/>
          </Switch>
          
           
        </div>
      </div>
    )
  }
}
