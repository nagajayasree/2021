import { useState } from "react";

export interface CalciState {
  numbers: number[];
}

let buttons: CalciState = {
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
};
export const Calculator = () => {
  const [input, setInput] = useState("");
  const [num] = useState(buttons.numbers);

  const onClickNumber = (value: number) => {
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
      <div>
        {num.map((n) => {
          return <button onClick={() => onClickNumber(n)}>{n}</button>;
        })}
      </div>
    </>
  );
};
