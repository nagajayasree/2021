import { Agent } from "https";
import * as React from "react";

//method 1
//function comp
type MsgProps = { msg?: string };
export const Msg = ({ msg = "defaultProp" }: MsgProps) => {
  return <div>{msg}</div>;
};
//class comp
type GreetProps = { greet?: string };
export class Greet extends React.Component<GreetProps> {
  render() {
    const { greet = "say hi" } = this.props;
    return <div>{greet}</div>;
  }
}

//Another Method
type NameProps = { name: string } & typeof defaultProps;
const defaultProps = {
  name: "njs",
};
export const DefaultName = (props: NameProps) => {
  return <div>{props.name}</div>;
};
DefaultName.defaultProps = defaultProps;

type AgeProps = typeof Age.defaultProps & {
  age: number;
};
export class Age extends React.Component<AgeProps> {
  static defaultProps = {
    age: 24,
  };
  render() {
    return <div>{this.props.age}</div>;
  }
}

//another way
type FruitProps = typeof MyFruit.defaultProps & {
  fruit: string;
};
export class MyFruit extends React.Component<FruitProps> {
  static defaultProps = {
    fruit: "apple",
  };
  render() {
    return <div>{this.props.fruit}</div>;
  }
}
