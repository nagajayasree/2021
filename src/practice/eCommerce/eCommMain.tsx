import * as React from "react";
import { Items } from "./ListItems";
import { Cart } from "./CartItems";

export interface MainProps {
  item?: string;
  itemsList?: {
    name: string;
  }[];
  cartItems?: {
    name: string;
  }[];
  setInput?: () => void;
  addItem?: () => void;
  //   setInput?: Function;
  //   [Symbol.iterator]?: () => void;
}

export const ItemsInfo: MainProps = {
  item: "",
  itemsList: [
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
  const [items, setItems] = React.useState(ItemsInfo.itemsList);
  const [cart, setCart] = React.useState(ItemsInfo.cartItems);
  const setInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(e.currentTarget.value);
  };

  const addItem = () => {
    let newArr = [{}];
    const newItem = newArr.map((i) => {
      return {
        ...i,
        name: itemName,
      };
    });
    console.log(newItem);
  };

  return (
    <>
      Add Item:
      <input type="text" value={itemName} onChange={setInput} />
      <button onClick={addItem}>Add Item</button>
      <div>List of Items</div>
      <ItemCtx.Provider value={{}}>
        <div>
          <Items itemsList={items} />
          <hr />
          <Cart cartItems={cart} />
        </div>
      </ItemCtx.Provider>
    </>
  );
};
