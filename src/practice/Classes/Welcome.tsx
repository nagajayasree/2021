import { Component } from "react";
import { UserCtx } from "./context";

export class Welcome extends Component {
  render() {
    return (
      <div>
        <UserCtx.Consumer>
          {(value) => <h4>Welcome {value?.username}</h4>}
        </UserCtx.Consumer>
      </div>
    );
  }
}
