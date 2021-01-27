import * as React from "react";
export type FormProps = typeof Form.defaultProps & {
  heading?: string;
};

type FormState = {
  text: string;
};

export class Form extends React.Component<FormProps, FormState> {
  static defaultProps = {
    heading: "Forms and Events",
  };
  state = {
    text: "",
  };
  inputChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ text: e.currentTarget.value });
  };
  render() {
    return (
      <>
        <h4>{this.props.heading}</h4>
        <label htmlFor="">Enter Text:</label>
        <input
          type="text"
          value={this.state.text}
          onChange={this.inputChange}
        />
        <p>{this.state.text}</p>
      </>
    );
  }
}

type ButtonProps = {
  btnName: string;
};
type ButtonState = {
  status: boolean;
};
export class SubmitButton extends React.Component<ButtonProps, ButtonState> {
  state = {
    status: false,
  };

  btnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    this.setState({
      status: !this.state.status,
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.status == true ? "Button Clicked" : "Click Button"}</p>
        <button onClick={this.btnClick}>{this.props.btnName}</button>
      </div>
    );
  }
}
