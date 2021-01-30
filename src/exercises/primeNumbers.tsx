import { Input } from "./sumofArrayNums";

export const GetPrimes = ({ inputArr }: Input): any => {
  let resArr = [];
  for (let n of inputArr) {
    if (n % 2 !== 0) {
      resArr.push(n);
    }
  }
  return <p>{resArr.join(",")}</p>;
};
