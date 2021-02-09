import * as React from "react";
import { useState } from "react";
import { MainProps } from "./eCommMain";

export const Cart = ({ cartItems }: MainProps) => {
  //   const [cart] = useState(cartItems);
  return (
    <>
      <div>
        {/* cannot use consumer,bcoz value is not provided in provider */}
        {/* <ItemCtx.Consumer>
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
        </ItemCtx.Consumer> */}
        <p>Items Added to Cart</p>
        {cartItems?.map((i) => {
          return <li key={i.name}>{i.name}</li>;
        })}
      </div>
    </>
  );
};
