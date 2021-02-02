import * as React from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { UContext } from "./context";

export const LoginUI = () => {
  const userCtxt = React.useContext(UContext);
  const [userName, setName] = React.useState(userCtxt?.name);
  const [userId, setId] = React.useState(userCtxt?.id);
  const [userPassword, setPassword] = React.useState(userCtxt?.password);
  return (
    <>
      <div>
        <label htmlFor="">
          Id:
          <Input
            type={"text"}
            placeholder={"Enter Id"}
            value={userId}
            onChange={(e) => setId(e.currentTarget.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="">
          Password:
          <Input
            type={"text"}
            placeholder={"Enter Password"}
            value={userPassword}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </label>
      </div>
      <div>
        <Button>Log In</Button>
      </div>
    </>
  );
};
