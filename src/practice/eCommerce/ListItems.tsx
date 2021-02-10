import { MainProps } from "./eCommMain";
import { useState } from "react";
export const Items = ({ item, itemsList, cartItems }: MainProps) => {
  const [itemName, setItem] = useState(item);
  const [items, updateItems] = useState(itemsList);
  const [cart, updateCart] = useState(cartItems);

  const setInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(e.currentTarget.value);
  };

  function onClickAdd(name: string) {
    let newItem = items?.filter((i) => i.name === name);
    updateCart(newItem);
    console.log(newItem);
  }

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

  return (
    <>
      Add Item:
      <input type="text" value={itemName} onChange={setInput} />
      <button>Add Item</button>
      <div>List of Items</div>
      {items?.map((i) => {
        return (
          <div>
            <li key={i.name}>{i.name}</li>
            <button onClick={() => onClickAdd(i.name)}>Add to Cart</button>
          </div>
        );
      })}
    </>
  );
};
