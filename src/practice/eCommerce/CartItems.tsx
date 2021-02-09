import * as React from "react";
import { useState } from "react";
import { ItemCtx, MainProps } from "./eCommMain";

export const Cart = ({ cartItems }: MainProps) => {
  const [cart] = useState(cartItems);
  return (
    <>
      <div>
        <ItemCtx.Consumer>
          {(ItemsInfo) =>
            ItemsInfo?.cartItems?.map((i) => {
              return (
                <div>
                  <li key={i.name}>{i.name}</li>
                  <button>Remove</button>
                </div>
              );
            })
          }
        </ItemCtx.Consumer>
        {/* {cart?.map((i) => {
          return <li key={i.name}>{i.name}</li>;
        })} */}
      </div>
    </>
  );
};
