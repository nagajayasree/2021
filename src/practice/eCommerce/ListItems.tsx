import { useState } from "react";

export interface MainProps {
  data: {
    id: number;
    name: string;
  }[];
}

export const ItemsInfo: MainProps = {
  data: [
    { id: 1, name: "item1" },
    { id: 2, name: "item2" },
    { id: 3, name: "item3" },
    { id: 4, name: "item4" },
  ],
};

export const Items = () => {
  const [items, setItems] = useState(ItemsInfo.data);
  
  return (
    <>
      {items.map((i) => {
        return (
          <li key={i.id}>
            {i.name}
            <button>Add to cart</button>
          </li>
        );
      })}
    </>
  );
};
