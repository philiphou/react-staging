import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const {users, isLoading,isFirst,err}=this.props
    return (
      <div className='row'>
        {
        isFirst?<h2>Welcome to Search Github Users</h2>:
        isLoading?<h2>Loading</h2>:
        err?<h2 style={{color:'red'}}>{err}</h2>:
        users.map(item=>{
            return(
                <div key = {item.id} className='card'>
                  <a href={item.html_url}>
                      <img src={item.avatar_url} style={{width:'100px'}} alt='notfound'/>
                  </a>
               </div>
            )
          })
        }
        
    </div>
    )
  }
}
