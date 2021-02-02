import { Component } from "react";
import { Input } from "./Input";
import { Button } from "../Hook/Button";
import { userInfo } from "os";
import { UserName } from "../../topics/context";

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

  private updateInp({ e }: { e: HTMLInputElement }) {
    this.state.username = e.value;
  }

  //   onInpChange = (e: React.FormEvent<HTMLInputElement>) => {
  //     this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  //   };

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
              onChange={this.updateInp}
            />
          </label>
        </div>
        <div>
          <label htmlFor="pswd">
            Password:
            <Input value={this.state.password} name="password" />
          </label>
        </div>
        <div>
          <Button onClick={this.onBtnClick}>Log In</Button>
        </div>
      </>
    );
  }
}
