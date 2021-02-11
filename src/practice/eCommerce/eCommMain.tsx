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
  //   removeItem?: () => void;
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
  cartItems: [{ name: "item2" }, { name: "item4" }],
};

export const ItemCtx = React.createContext<MainProps | null>(null);

export const ECommMain = () => {
  const [itemName, setItem] = React.useState(ItemsInfo.item);

  function addItem(name: string) {
    let newArr = [{}];
    const newItem = newArr.map((i) => {
      return {
        ...i,
        name: itemName,
      };
    });
    newArr.push(newItem);
    console.log(newArr);
    // updateItems(newArr);
    // items?.push(newArr);
    // let res = items?.push(...newArr);
    // setItems(items?.push(...Object.values(newArr)));
  }
  //   const addItem = () => {
  //     let newArr = [{}];
  //     const newItem = newArr.map((i) => {
  //       return {
  //         ...i,
  //         name: itemName,
  //       };
  //     });
  //     newArr.push(newItem);
  //     console.log(newArr);

  //     // items?.push(newArr);
  //     // let res = items?.push(...newArr);
  //     // setItems(items?.push(...Object.values(newArr)));
  //     // setItems(newArr);
  //   };

  //   function removeItem(name: string) {
  //     const delItem = items?.filter((i) => i.name !== name);
  //     console.log(delItem);
  //     setCart(delItem);
  //   }

  return (
    <>
      Add Item:
      <input
        type="text"
        value={itemName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setItem(e.currentTarget.value);
        }}
      />
      <button>Add Item</button>
      <ItemCtx.Provider value={{}}>
        <div>
          <Items
            itemsList={ItemsInfo.itemsList}
            cartItems={ItemsInfo.cartItems}
          />
          <hr />
          <Cart cartItems={ItemsInfo.cartItems} />
        </div>
      </ItemCtx.Provider>
    </>
  );
};
