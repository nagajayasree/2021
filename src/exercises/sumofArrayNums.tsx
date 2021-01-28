export interface Input {
  inputArr: number[];
}

export const SumOfArrNum = ({ inputArr }: Input): any => {
  let arrSum = 0;
  for (let i = 0; i < inputArr.length; i++) {
    arrSum += inputArr[i];
  }
  return arrSum;
};
