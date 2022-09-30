import React, { Component } from 'react'

export default class Index extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         value:''
      }
    };

     handleChange=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
    
  render() {
    return (
      <div>
         <br/><br/><br/>
        <input type='text' onChange={this.handleChange} />
        <h2>{this.state.value}</h2>
        
      </div>
    )
  }
}
