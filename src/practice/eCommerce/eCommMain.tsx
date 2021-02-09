import * as React from "react";
import { Items } from "./ListItems";
import { Cart } from "./CartItems";

export interface MainProps {
  item?: string;
  //   data: string[];
  data?: {
    name: string;
  }[];
  cartItems?: {
    name: string;
  }[];
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

export const ItemCtx = React.createContext<Partial<MainProps | null>>(null);

export const ECommMain = () => {
  return (
    <ItemCtx.Provider value={ItemsInfo}>
      <div>
        <Items data={ItemsInfo.data} cartItems={ItemsInfo.cartItems} />
        <Cart cartItems={ItemsInfo.cartItems} />
      </div>
    </ItemCtx.Provider>
  );
};
