import { MainProps } from "./eCommMain";
import { useState } from "react";
export const Items = ({ itemsList, cartItems }: MainProps) => {
  const [items, updateItems] = useState(itemsList);
  const [cart, updateCart] = useState(cartItems);

  function addToCart(name: string) {
    let newItem = items?.filter((i) => i.name === name);
    updateCart(newItem);
    console.log(newItem);
  }

  return (
    <>
      <div>List of Items</div>
      {items?.map((i) => {
        return (
          <div>
            <li key={i.name}>{i.name}</li>
            <button onClick={() => addToCart(i.name)}>Add to Cart</button>
          </div>
        );
      })}
    </>
  );
};
