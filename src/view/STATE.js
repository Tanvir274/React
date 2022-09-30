import React, { Component } from "react";

export default class STATE extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  } 
  

  Increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  Decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>{count}</h1>
        <button className="myBtn" onClick={this.Increment} disabled={count===100 ? true: false}> + </button>
        <button className="myBtn" onClick={this.Decrement} disabled={count===0 ? true: false}> - </button>
      </div>
    );
  }
}
