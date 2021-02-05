import { useState } from "react";

export interface CalciState {
  numbers: number[];
  operators: any[];
}

let buttons: CalciState = {
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  operators: ["+", "-", "*", "%"],
};
export const Calculator = () => {
  const [input, setInput] = useState("");
  const [signs] = useState(buttons.operators);
  const [num] = useState(buttons.numbers);

  const onButtonClick = (value: number) => {
    setInput(value.toString());
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
      <button onClick={() => setInput("")}>Reset</button>
      <button>Result</button>
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
