import * as React from "react";
import { UContext } from "./context";
import { Input } from "./Input";

export const User = () => {
  const userCtxt = React.useContext(UContext);
  const [name, setName] = React.useState(userCtxt?.name);
  const [id, setId] = React.useState(userCtxt?.id);
  const [password, setPassword] = React.useState(userCtxt?.password);

  return (
    <>
      <p>Welcome {name}!</p>
      <div>
        <label htmlFor="userId" placeholder="Enter Id">
          User Id:
          <Input
            value={id}
            type={"text"}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setId(e.currentTarget.value)
            }
          />
          {/* <input
            type="text"
            value={id}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setId(e.currentTarget.value)
            }
          /> */}
        </label>
      </div>
      <div>
        <label htmlFor="pwd" placeholder="Enter Password">
          Password:
          <Input
            value={password}
            type={"text"}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          {/* <input
            type="text"
            value={password}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setPassword(e.currentTarget.value)
            }
          /> */}
        </label>
      </div>
      <p>
        <button>Login</button>
      </p>
      <p></p>
    </>
  );
};
