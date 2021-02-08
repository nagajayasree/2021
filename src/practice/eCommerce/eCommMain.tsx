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
}

export const ItemsInfo: MainProps = {
  item: "",
  data: [
    { name: "item1" },
    { name: "item2" },
    { name: "item3" },
    { name: "item4" },
  ],
  cartItems: [],
};

export const ItemCtx = React.createContext<MainProps | null>(null);

export const eCommMain = () => {
  <ItemCtx.Provider value={ItemsInfo}>
    <div>
      <Items item={ItemsInfo.item} data={ItemsInfo.data} />
      <Cart cartItems={ItemsInfo.cartItems} />
    </div>
  </ItemCtx.Provider>;
};
