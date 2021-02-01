import * as React from "react";
import { UContext, UserInterface } from "./context";
import { Input } from "./Input";
import { Button } from "./Button";

export const User = ({ name, id, password }: UserInterface) => {
  const userCtxt = React.useContext(UContext);
  const [userName, setName] = React.useState(userCtxt?.name);
  const [userId, setId] = React.useState(userCtxt?.id);
  const [userPassword, setPassword] = React.useState(userCtxt?.password);
  const [status, setStatus] = React.useState("");

  return (
    <>
      <p>Welcome {userName}!</p>
      <div>
        <label htmlFor="userId" placeholder="Enter Id">
          User Id:
          <Input
            value={userId}
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
            value={userPassword}
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
      <div>
        <Button type={"button"}>Log In</Button>
      </div>
    </>
  );
};
