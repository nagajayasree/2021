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
