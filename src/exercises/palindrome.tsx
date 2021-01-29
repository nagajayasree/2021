import { InputStr } from "./capitialize";
export const CheckPalindrome = ({ inputStr }: InputStr): any => {
  let result = inputStr.split("").reverse().join('');
  if (result == inputStr) {
    return <p>{"it is palindrome"}</p>;
  } else {
    return <p>{"it is not palindrome"}</p>;
  }
};
