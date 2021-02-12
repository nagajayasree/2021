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

    // let combine = items?.concat(newData);
    // const combine = items?.push(...newData);

    // let combined1 = [].concat(items, newData);
    // let combined2 = [...items, ...newData];

    //able to concate items with items and display them by updating
    // updateItems(items?.concat([...new Set(items)]));
    // let newArr = items?.concat([...new Set(items)]);
    // console.log(newArr);

    // let newArr = [...new Set(items?.map(({ name }) => name))].map((i) =>
    //   items?.find(({ name }) => name == i)
    // );
    // console.log(newArr);
    // updateItems(newArr);
    // return newData;

    // const merge = (a1: { name: string }[], a2: { name: string }[]) => {
    //   a1.map((itm) => ({
    //     ...a2.find((item) => item.name === itm.name && item),
    //     ...itm,
    //   }));
    // };
    // let getItems = items as MainProps;
    // console.log(merge(getItems, newData));

    const mergedArr = items?.map(() => {
      const found = newData.name;
      return { ...items, found };
    });
    console.log(mergedArr);

    //   items?.forEach((it) => {
    //     let find: any = newData.find((i) => {
    //       return it.name === i.name;
    //     });
    //     if (find) mergedArr.push(Object.assign({}, it, find));
    //   });
    //   console.log(mergedArr);
    // }

    // function combineArrays(arr1: number[], arr2: number[]) {
    //   return [...arr1, ...arr2];
    // }
    // let a1 = [1, 2, 3],
    //   a2 = [1, 2, 3];
    // console.log(combineArrays(a1, a2));
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
