import { MainProps } from "./eCommMain";
import { useRef, useState } from "react";
export const Items = ({ item, itemsList, cartItems }: MainProps) => {
  const [itemName, setItem] = useState(item);
  const [items, updateItems] = useState(itemsList);
  const [cart, updateCart] = useState(cartItems);
  const inputValue = useRef<HTMLInputElement>(null);
  // console.log(inputValue.current?.value);
  function addItem() {
    let newData = [{}] as MainProps;
    // newData.name = name as string;
    if (inputValue && inputValue.current) {
      newData.name = inputValue.current?.value;
    }
    console.log(newData);

    //able to concate items with items and display them by updating
    updateItems(items?.concat([...new Set(items)]));
    let newArr = items?.concat([...new Set(items)]);
    console.log(newArr);
    // let newArr = [...new Set(items?.map(({ name }) => name))].map((i) =>
    //   items?.find(({ name }) => name == i)
    // );
    // console.log(newArr);
    // updateItems(newArr);
    return newData;
  }
  function addToCart(name: string) {
    let newItem = items?.filter((i) => i.name === name);
    updateCart(newItem);
    console.log(newItem);
  }

  return (
    <>
      Enter Item:
      <input
        type="text"
        value={itemName}
        ref={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setItem(e.currentTarget.value);
        }}
      />
      <button onClick={addItem}>Add Item</button>
      <div>List of Items</div>
      {items?.map((i) => {
        return (
          <div>
            <li key={i.name}>{i.name}</li>
            <button onClick={() => addToCart(i.name)}>Add to Cart</button>
          </div>
        );
      })}
      {/* {cart?.map((i) => {
        return (
          <div>
            <li key={i.name}>{i.name}</li>
          </div>
        );
      })} */}
    </>
  );
};
