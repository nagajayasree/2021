import * as React from "react";

//useState
export const Status: React.FunctionComponent<{ isActive: boolean }> = ({
  isActive,
}) => {
  const [value, setValue] = React.useState(isActive);
  return (
    <div>
      isActive:{value == true ? "Yes" : "No"}
      <button onClick={() => setValue(!value)}>Toggle Status</button>
    </div>
  );
};

type ButtonProps = {
  button: boolean;
};
export const ToggleButton: React.FunctionComponent<ButtonProps> = ({
  button,
}) => {
  const [value, setValue] = React.useState(button);
  return (
    <div>
      {value === true ? "on" : "off"}
      <button onClick={() => setValue(!value)}>ToggleButton</button>
    </div>
  );
};

type NameProp = {
  name: string;
};
export const GetName = ({ name }: NameProp) => {
  const [nameValue, getName] = React.useState("");
  return (
    <div>
      {nameValue == "" ? "" : <p>Name:{name}</p>}
      <p>
        <button onClick={() => getName(name)}>GetName</button>
      </p>
    </div>
  );
};

export const Counter: React.FunctionComponent<{ value: number }> = ({
  value,
}) => {
  const [count, setCount] = React.useState(value);
  return (
    <div>
      Count:{count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};
