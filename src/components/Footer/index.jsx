import React, { Component } from 'react';
import "./index.css"

class Footer extends Component {
    render() {
        return (
            <div className='foot'>
                <hr />
                <input type="checkbox" />
                <span>Finihsed 2/3</span>
                <button className='btnn'>clear finished tasks</button>
            </div>
        );
    }
}

export default Footer
