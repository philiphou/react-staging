import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    return (
      <div className='row'>
        {
          this.props.users.map(item=>{
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
