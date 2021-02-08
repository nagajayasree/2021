import * as React from "react";
import { useState } from "react";
import { ItemCtx, MainProps } from "./eCommMain";

export const Items = () => {
  const ItemContext = React.useContext(ItemCtx);
  const [itemValue, setItem] = useState(ItemContext?.item);
  const [itemArr, updateItems] = useState(ItemContext?.data);
  const [cart, setCart] = useState(ItemContext?.cartItems);

  // const sendToCart = (value: string) => {
  //   console.log(value);
  //   const toCart = items.filter((i) => i.name == value);
  //   console.log(toCart);
  //   let info = Object.values(cart).map((i) => [...cart]);
  //   console.log(info);
  //   setCart(info);
  //   return info;
  //   // setCart([
  //   //   ...cart,
  //   //   items.map((i) => {
  //   //     return {  name: i.name };
  //   //   }),
  //   // ]);
  // };

  return (
    <>
      Add Item:
      <input
        type="text"
        value={itemValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setItem(e.currentTarget.value)
        }
      />
      <button
      // onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
      //   updateItems([...itemArr, { name: itemValue }])
      // }
      >
        Add Item
      </button>
      <div>{itemValue}</div>
      <div>List of Items</div>
    </>
  );
};
