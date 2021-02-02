import { Component } from "react";
import { Input } from "./Input";
import { Button } from "../Hook/Button";

type Props = {
  title: string;
  uname?: string;
  pwd?: string;
};

type State = {
  username: string;
  password: string;
};

export class LoginForm extends Component<Props, State> {
  state: State = {
    username: "",
    password: "",
  };

  //   private updateInp({ e }: { e: HTMLInputElement }) {
  //     this.state.username = e.value;
  //   }

  onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ username: e.target.value });
  };

  onPwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value });
  };

  //   handleChange(e) {
  //     this.setState({ username: e.currentTarget.value });
  //   }

  onBtnClick = () => {
    let { username, password } = this.state;
    let { uname, pwd } = this.props;
    if (username == uname && password == pwd) {
      alert("You are logged in");
    } else {
      alert("Incorrect Credentials");
    }
  };

  onRefresh = () => {
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <>
        <p>{this.props.title}</p>
        <div>
          <label htmlFor="uname">
            UserName:
            <Input
              value={this.state.username}
              name="username"
              onChange={this.onNameChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="pswd">
            Password:
            <Input
              value={this.state.password}
              name="password"
              onChange={this.onPwdChange}
            />
          </label>
        </div>
        <div>
          <Button onClick={this.onBtnClick}>Log In</Button>
          <Button onClick={this.onRefresh}>Refresh</Button>
        </div>
      </>
    );
  }
}
