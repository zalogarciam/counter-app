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
        <span> {this.formatCount()} </span>
        <button>Increment</button>
      </Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
