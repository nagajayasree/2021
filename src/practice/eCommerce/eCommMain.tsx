import * as React from "react";
import { Items } from "./ListItems";
import { Cart } from "./CartItems";

export interface MainProps {
  item?: string;
  listItems?: {
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
  listItems: [
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
  const [items, setItems] = React.useState(ItemsInfo.listItems);
  const [cart, setCart] = React.useState(ItemsInfo.cartItems);
  const setInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(e.currentTarget.value);
  };
  return (
    <>
      Add Item:
      <input type="text" value={itemName} onChange={setInput} />
      <button>Add Item</button>
      <div>List of Items</div>
      <ItemCtx.Provider value={{}}>
        <div>
          <Items listItems={items} />
          <hr />
          <Cart cartItems={cart} />
        </div>
      </ItemCtx.Provider>
    </>
  );
};
