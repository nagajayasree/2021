import { useState } from "react";

export interface CalciState {
  numbers: number[];
  operators: any[];
  result: string;
}

let calState: CalciState = {
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  operators: ["+", "-", "*", "/"],
  result: "",
};
export const Calculator = () => {
  const [input, setInput] = useState("");
  const [signs] = useState(calState.operators);
  const [num] = useState(calState.numbers);
  const [res] = useState(calState.result);

  const onButtonClick = (value: number) => {
    setInput(input + `${value.toString()}`);
  };

  const expr = (expr: string) => {
    let result = eval(expr);
    setInput(result);
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setInput(e.currentTarget.value)
        }
      />
      <div>
        <button onClick={() => expr(input)}>Result</button>
        <button onClick={() => setInput("")}>Reset</button>
      </div>
      <div>
        {num.map((n) => {
          return <button onClick={() => onButtonClick(n)}>{n}</button>;
        })}
      </div>
      <div>
        {signs.map((s) => {
          return <button onClick={() => onButtonClick(s)}>{s}</button>;
        })}
      </div>
    </>
  );
};
