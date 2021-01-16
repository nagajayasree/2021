import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { hour: 12, minute: 1, second: 1 };
  }

  componentDidMount() {
    setInterval(() => {
      let time = new Date();
      this.setState({
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds(),
      });
    }, 1000);
  }

  render() {
    return (
      <>
        Time:{this.state.hour}:
        {this.state.minute < 10 ? "0" + this.state.minute : this.state.minute}:
        {this.state.second < 10 ? "0" + this.state.second : this.state.second}
      </>
    );
  }
}

export default Clock;
