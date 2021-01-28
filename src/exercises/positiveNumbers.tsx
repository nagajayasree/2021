import { Input } from "./sumofArrayNums";

export const GetPositiveNums = ({ inputArr }: Input): any => {
  let positiveNums = [];
  for (let i = 0; i <= inputArr.length - 1; i++) {
    if (inputArr[i] > 0) {
      positiveNums.push(inputArr[i]);
    }
  }
  return <p>{positiveNums.join(",")}</p>;
};
