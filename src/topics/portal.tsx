import { Component } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root") as
  | HTMLElement
  | HTMLButtonElement;

export class Modal extends Component {
  el = document.createElement("div");
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export class PortalButton extends Component {
  btn = document.createElement("button");
  componentDidMount() {
    modalRoot.appendChild(this.btn);
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.btn);
  }
}
