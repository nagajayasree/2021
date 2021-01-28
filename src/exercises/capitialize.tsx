import { FunctionComponent } from "react";

export interface InputStr {
  inputStr: string;
}

export const Capitalize: FunctionComponent<InputStr> = ({ inputStr }) => {
  let i = 0;
  return (
    <p>
      {inputStr[i].toLocaleUpperCase() + inputStr.slice(1, inputStr.length)}
    </p>
  );
};
