import * as React from "react";

export const initialState = { count: 0 };
type ActionType =
  | { type: "inc"; payload: number }
  | { type: "dec"; payload: number };
function reducer(state: typeof initialState, action: ActionType) {
  switch (action.type) {
    case "inc":
      return { count: state.count + action.payload };
    case "dec":
      return { count: state.count - action.payload };
  }
}
export function ReducerCounter() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      <button onClick={() => dispatch({ type: "dec", payload: 1 })}>-</button>
      Count:{state.count}
      <button onClick={() => dispatch({ type: "inc", payload: 1 })}>+</button>
    </>
  );
}
