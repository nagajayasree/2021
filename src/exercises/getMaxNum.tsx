import { FunctionComponent } from "react";
import { Input } from "./sumofArrayNums";

export const GetMaxNum: FunctionComponent<Input> = ({ inputArr }) => {
  let maxNum = 0;
  for (let i = 0; i <= inputArr.length; i++) {
    if (inputArr[i] > maxNum) {
      maxNum = inputArr[i];
    }
  }
  return <div>{maxNum}</div>;
};
