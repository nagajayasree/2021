import { MainProps } from "./eCommMain";
import { useState } from "react";
export const Cart = ({ cartItems }: MainProps) => {
  const [cart, updateCart] = useState(cartItems);
  function removeItem(name: string) {
    const resetItems = cart?.filter((i) => i.name !== name);
    console.log(resetItems);
    updateCart(resetItems);
  }
  return (
    <>
      <div>
        <p>Items Added to Cart</p>
        {cart?.map((i) => {
          return (
            <div>
              <li key={i.name}>{i.name}</li>
              <button onClick={() => removeItem(i.name)}>Remove</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
