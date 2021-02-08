import * as React from "react";
import { useState } from "react";
import { ItemCtx, MainProps } from "./eCommMain";

// export interface CartState extends MainProps {
//   cartItems: [
//     {
//       name: string;
//     }
//   ];
// }

// export const CartInfo: CartState = {
//   item: "",
//   data: [{ name: "item7" }],
//   cartItems: [{ name: "item8" }],
// };

// export class CartItems extends Component<{}, CartState> {
//   state: CartState = {
//     data: [{  name: "item5" }],
//     cartItems: [{  name: "item6" }],
//   };
//   render() {
//     return (
//       <div>
//         Cart Class Comp
//         {this.state.data.map((i) => {
//           return <li>{i.name}</li>;
//         })}
//         {this.state.cartItems.map((i) => {
//           return <li>{i.name}</li>;
//         })}
//       </div>
//     );
//   }
// }

export const Cart = ({ cartItems }: MainProps) => {
  const cartContext = React.useContext(ItemCtx);
  const [items] = useState(cartItems);
  //   const [cart] = useState(CartInfo.data);
  //   const [info] = useState<any[]>(cartItems);
  return (
    <>
      <div>
        {items.map((i) => {
          return <li>{i.name}</li>;
        })}
      </div>
    </>
  );
};
