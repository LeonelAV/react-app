import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["HERRERA", "MAREGA", "SOARES"]
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "ZERO" : count;
    // return this.state.count === 0 ? "ZERO" : this.state.count;
  }
}

export default Counter;
