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
  const [todo, setTodo] = useState(todos.todo);
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

  function handleAdd(e: React.MouseEvent<HTMLButtonElement>) {
    const newList = list.concat({ value: todo });
    addTodo(newList);
  }

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
          value={todo}
          placeholder={"Enter todo"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTodo(e.currentTarget.value)
          }
        />
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            addTodo([...getTodos, { value: todo }])
          }
          //   onClick={handleAdd} //able to add only one todo
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
