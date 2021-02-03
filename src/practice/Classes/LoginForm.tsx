import * as React from "react";
import { Component } from "react";
import { Input } from "./Input";
import { Button } from "../Hook/Button";
import { UserCtx } from "./context";
import { Link } from "react-router-dom";
import { Welcome } from "./Welcome";
import { useHistory } from "react-router-dom";

export type Props = {
  title: string;
  uname?: string;
  pwd?: string;
};

export type State = {
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
    // let history = useHistory();
    // history.push("/welcome");
    let { username, password } = this.state;
    let { uname, pwd } = this.props;
    if (username == uname && password == pwd) {
      alert("You are LoggedIn");
    } else {
      alert("Incorrect Credentials");
    }
  };

  onRefresh = () => {
    this.setState({ username: "", password: "" });
  };

  render() {
    let { username, password } = this.state;
    let { uname, pwd, title } = this.props;
    return (
      <>
        <UserCtx.Provider value={this.state}>
          <p>{title}</p>
          <div>
            <label htmlFor="uname">
              UserName:
              <Input
                value={username}
                name="username"
                onChange={this.onNameChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="pswd">
              Password:
              <Input
                value={password}
                name="password"
                onChange={this.onPwdChange}
              />
            </label>
          </div>
          <div>
            {/* <Link to="/welcome">
              <Button onClick={this.onBtnClick}>Log In</Button>
            </Link> */}
            {/* <Button onClick={this.onBtnClick}>Log In</Button> */}
            {username == uname && password == pwd ? (
              <Link to="/welcome">
                <Button onClick={this.onBtnClick}>Log In</Button>
              </Link>
            ) : (
              ""
            )}
            <Button onClick={this.onRefresh}>Refresh</Button>
            <Welcome />
          </div>
        </UserCtx.Provider>
      </>
    );
  }
}
