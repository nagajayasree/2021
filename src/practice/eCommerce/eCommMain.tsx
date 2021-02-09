import * as React from "react";
import { Items } from "./ListItems";
import { Cart } from "./CartItems";

export interface MainProps {
  item?: string;
  data?: {
    name: string;
  }[];
  cartItems?: {
    name: string;
  }[];
  setInput?: () => void;
  //   [Symbol.iterator]?: () => void;
}

export const ItemsInfo: MainProps = {
  item: "",
  data: [
    { name: "item1" },
    { name: "item2" },
    { name: "item3" },
    { name: "item4" },
  ],
  cartItems: [{ name: "item4" }],
};

export const ItemCtx = React.createContext<MainProps | null>(null);

export const ECommMain = () => {
  const [itemName, setItem] = React.useState(ItemsInfo.item);
  const [items, setItems] = React.useState(ItemsInfo.data);
  const [cart, setCart] = React.useState(ItemsInfo.cartItems);
  const setInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(e.currentTarget.value);
  };
  return (
    <ItemCtx.Provider value={{}}>
      <div>
        <Items item={itemName} data={items} />
        <hr />
        <Cart cartItems={cart} />
      </div>
    </ItemCtx.Provider>
  );
};
