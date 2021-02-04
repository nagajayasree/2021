import { useState } from "react";

type TodoProps = {
  todo: string;
  todoArr: { value: string }[];
};

let todos: TodoProps = {
  todo: "",
  todoArr: [
    { value: "write diary" },
    { value: "bring veggies" },
    { value: "code ts" },
  ],
};

export const Todo = () => {
  const [newtodo, setTodo] = useState(todos.todo);
  const [getTodos, addTodo] = useState(todos.todoArr);
  const [list, updateList] = useState(todos.todoArr);

  //   const handleRemoveItem = (value) => {
  //     updateList((list) => list.filter((i) => i.value !== value));
  //   };

  //   const removeItem = (e: React.MouseEvent<HTMLButtonElement>) => {
  //     console.log("remove");
  //     let value = e.currentTarget.getAttribute("value");
  //     updateList(list.filter((i) => i.value !== value));
  //   };

  function handleRemove(value: string) {
    console.log(value);
    const newList = list.filter((i) => i.value !== value);
    updateList(newList);
  }
  return (
    <>
      <div>
        <input
          type="text"
          value={newtodo}
          placeholder={"Enter todo"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTodo(e.currentTarget.value)
          }
        />
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            addTodo([...getTodos, { value: newtodo }])
          }
        >
          Add Todo
        </button>
        <button onClick={() => setTodo("")}>Reset</button>
      </div>
      <div>
        {getTodos.map((e) => {
          return (
            <div>
              <li key={e.value}>
                {e.value}
                <button type="button" onClick={() => handleRemove(e.value)}>
                  Remove
                </button>
              </li>
            </div>
          );
        })}
      </div>
    </>
  );
};
