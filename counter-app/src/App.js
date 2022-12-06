import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import { Fragment } from "react";
import React, { Component } from "react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0, disableDecrementButton: true},
      { id: 2, value: 0, disableDecrementButton: true },
      { id: 3, value: 0, disableDecrementButton: true },
      { id: 4, value: 0, disableDecrementButton: true },
    ]
  };

  constructor(){
    super();
    console.log("App - Constructor");
  }

  componentDidMount(){
    console.log("App - componentDidMount");
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      c.disableDecrementButton = true;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    if (counters[index].value > 0){
      counters[index].disableDecrementButton = false;
    }

    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) {
      counters[index].value--;
    }
    if (counters[index].value <= 0) {
      counters[index].disableDecrementButton = true;
    }
    
    this.setState({ counters });
  };

  render() {
    return (
      <Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        ></NavBar>
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          ></Counters>
        </main>
      </Fragment>
    );
  }
}

export default App;
