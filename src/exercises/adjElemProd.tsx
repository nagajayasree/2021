import { Input } from "./sumofArrayNums";

export const AdjElemProd = ({ inputArr }: Input) => {
  let res = 0;
  for (let i = 0; i <= inputArr.length - 1; i++) {
    if (inputArr[i] * inputArr[i + 1] > res) {
      res = inputArr[i] * inputArr[i + 1];
    }
  }
  return <div>{res}</div>;
};
