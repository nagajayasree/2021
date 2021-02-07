import { useState } from "react";
import { CartInfo } from "./CartItems";

export interface MainProps {
  data: {
    id: number;
    name: string;
  }[];
}

export const ItemsInfo: MainProps = {
  data: [
    { id: 1, name: "item1" },
    { id: 2, name: "item2" },
    { id: 3, name: "item3" },
    { id: 4, name: "item4" },
  ],
};

export const Items = () => {
  const [items, setItems] = useState(ItemsInfo.data);
  const [cart, setCart] = useState(CartInfo.cartItems);

  const sendToCart = (value: string) => {
    console.log(value);
    const toCart = items.filter((i) => i.name == value);
    let info = Object.values(cart).map((i) => [...cart]);
    console.log(info);
    return info;
    // setCart([
    //   ...cart,
    //   items.map((i) => {
    //     return { id: i.id, name: i.name };
    //   }),
    // ]);
  };

  return (
    <>
      List of Items
      {items.map((i) => {
        return (
          <li key={i.id}>
            {i.name}
            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                sendToCart(i.name)
              }
            >
              Add to cart
            </button>
          </li>
        );
      })}
    </>
  );
};
