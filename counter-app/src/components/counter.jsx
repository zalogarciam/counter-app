import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  alignStyles = {
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log("prevProps: " + prevProps);
    // console.log("prevState: " + prevState);
    // if (prevProps.counter.value !== this.props.counter.value) {
    //   // Ajax call and get new data from the server
    // }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Enable: " + this.props.counter.enableDecrementButton);

    return (      
      <div className="container text-center">
        <div className="row">
          <div className="col-md-1" style={this.alignStyles}>
            <span style={this.styles} className={this.getBadgeClasses()}>
              {this.formatCount()}
            </span>
          </div>
          <div className="col-md-1" style={this.alignStyles}>
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>
          </div>
          <div className="col-md-1" style={this.alignStyles}>
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              disabled={this.props.counter.disableDecrementButton}
              className="btn btn-secondary btn-sm"
            >
              -
            </button>
          </div>
          <div className="col-md-1" style={this.alignStyles}>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btm-sm m-2"
            >
              Delete
            </button>
          </div>
        </div>

        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
