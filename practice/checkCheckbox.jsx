import React, { Component } from "react";

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }
  handleCheck = () => {
    this.setState({ checked: !this.state.checked });
  };
  render() {
    return (
      <div>
        <input type="checkbox" onChange={this.handleCheck} />
        <label>yes</label>
        <p>
          status:
          {this.state.checked === true ? "checked" : "not checked"}
        </p>
      </div>
    );
  }
}

export default CheckBox;
