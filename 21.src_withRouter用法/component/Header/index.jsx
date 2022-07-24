import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.history.goBack}>goBack</button>&nbsp;
        <button onClick={this.props.history.goForward}>goForward</button>&nbsp;
        <button onClick={()=>{this.props.history.go(2)}}>go(2)</button>&nbsp;
        <h3>React Router 学习</h3>
      </div>
        
        
    )
  }
}
export default withRouter(Header)