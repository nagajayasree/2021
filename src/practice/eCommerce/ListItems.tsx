import { MainProps } from "./eCommMain";

export const Items = ({ listItems }: MainProps) => {
  // const Data = React.useContext(ItemCtx);
  // const [itemName, setItem] = React.useState(ItemsInfo.item);
  // const [items, updateItems] = React.useState(data);
  // const [cart, addToCart] = React.useState(cartItems);
  // const onClickAdd = (name: string) => {
  //   let newItem = data?.filter((i) => i.name == name);
  //   updateItems(newItem);
  //   addToCart(newItem);
  //   console.log(newItem);
  // };

  return (
    <>
      {/* cannot use consumer,bcoz value is not provided in provider*/}
      {/* <ItemCtx.Consumer>
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
      </ItemCtx.Consumer> */}
      {listItems?.map((i) => {
        return (
          <div>
            <li key={i.name}>{i.name}</li>
            <button>Add to Cart</button>
          </div>
        );
      })}
    </>
  );
};
