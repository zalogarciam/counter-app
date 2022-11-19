import React, { Component, Fragment } from "react";

class Counter extends Component {
  state = {
    count: 0,
    address: {
      street: "",
    },
  };
  render() {
    return (
      <Fragment>
        <span> {this.state.count} </span>
        <button>Increment</button>
      </Fragment>
    );
  }
}

export default Counter;
