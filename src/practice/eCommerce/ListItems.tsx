import * as React from "react";
import { useState } from "react";
import { ItemCtx, MainProps } from "./eCommMain";

export const Items = ({ item, data }: MainProps) => {
  const cartContext = React.useContext(ItemCtx);
  const [itemValue, setItem] = useState(item);
  const [itemArr, updateItems] = useState(data);
  const [cart, setCart] = useState(cartContext?.cartItems);

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
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          updateItems([...itemArr, { name: itemValue }])
        }
      >
        Add Item
      </button>
      <div>
        List of Items
        {itemArr.map((i) => {
          return (
            <li key={i.name}>
              {i.name}
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  // sendToCart(i.name)
                  setCart([...cart, { name: i.name }])
                }
              >
                Add to cart
              </button>
            </li>
          );
        })}
        {/* <Cart cartItems={ItemsInfo.cartItems} /> */}
      </div>
    </>
  );
};
