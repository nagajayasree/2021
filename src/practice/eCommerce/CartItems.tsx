import { Component, useState } from "react";
import { MainProps } from "./ListItems";

export interface CartState extends MainProps {
  cartItems: [
    {
      id: number;
      name: string;
    }
  ];
}

export const CartInfo: CartState = {
  data: [{ id: 7, name: "item7" }],
  cartItems: [{ id: 8, name: "item8" }],
};

export class CartItems extends Component<{}, CartState> {
  state: CartState = {
    data: [{ id: 5, name: "item5" }],
    cartItems: [{ id: 6, name: "item6" }],
  };
  render() {
    return (
      <div>
        Cart Class Comp
        {this.state.data.map((i) => {
          return <li>{i.id}</li>;
        })}
        {this.state.cartItems.map((i) => {
          return <li>{i.name}</li>;
        })}
      </div>
    );
  }
}

export const Cart = () => {
  const [cart] = useState(CartInfo.data);
  const [items] = useState(CartInfo.cartItems);
  return (
    <>
      Cart Func Comp
      {cart.map((i) => {
        return <li>{i.id}</li>;
      })}
      {items.map((i) => {
        return <li>{i.name}</li>;
      })}
    </>
  );
};
