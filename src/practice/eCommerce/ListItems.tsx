import * as React from "react";
import { ItemCtx, MainProps } from "./eCommMain";

export const Items = ({ data, cartItems }: MainProps) => {
  const [itemName, setItem] = React.useState("");
  const [items, updateItems] = React.useState(data);
  const [cart, addToCart] = React.useState(cartItems);
  const onClickAdd = (name: string) => {
    let newItem = data?.filter((i) => i.name == name);
    updateItems(newItem);
    addToCart(newItem);
    console.log(newItem);
  };

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
      <div>List of Items</div>
      <ItemCtx.Consumer>
        {(ItemsInfo) =>
          ItemsInfo?.data?.map((i) => {
            return (
              <div>
                <li key={i.name}>{i.name}</li>
                <button onClick={() => onClickAdd(i.name)}>Add to Cart</button>
              </div>
            );
          })
        }
      </ItemCtx.Consumer>
    </>
  );
};
