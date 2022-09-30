import React, { Component } from 'react'

import Home from './home';
import Login from './login';

export default class index extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLogedin: false
      }
    }
    
  render() {

    const{isLogedin}=this.state;
    return (
      <div>
        <div>
            {isLogedin ? <Home/> : <Login/>}
        </div>
        
      </div>
    )
  }
}




