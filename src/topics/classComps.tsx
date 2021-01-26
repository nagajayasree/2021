import * as React from "react";
export type CompProps = {
  title: string;
};
type CompState = {
  message: string;
};

export class MsgComp extends React.Component<CompProps, CompState> {
  state: CompState = {
    message: "Hello",
  };

  getStatus = () => {
    this.setState({ message: "Message Sent" });
  };

  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <p>{this.state.message}</p>
        <button onClick={() => this.getStatus()}>Send Message</button>
      </div>
    );
  }
}

export interface TimeState {
  time: Date;
}

class Time extends React.Component<{}, TimeState> {
  setTime = () => {
    this.setState({
      time: new Date(),
    });
  };

  componentWillMount() {
    this.setTime();
  }

  componentDidMount() {
    setInterval(() => this.setTime(), 1000);
  }

  render() {
    return (
      <div>The current time is {this.state.time.toLocaleTimeString()}</div>
    );
  }
}

export default Time;
