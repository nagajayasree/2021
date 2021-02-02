import * as React from "react";
import { UContext, UserInterface } from "./context";

export const GetUser = ({ name, id, password }: UserInterface) => {
  const userCtxt = React.useContext(UContext);
  const [userName] = React.useState(userCtxt?.name);
  const [userId] = React.useState(userCtxt?.id);
  const [userPassword] = React.useState(userCtxt?.password);
  return (
    <>
      from props: name:{name},id:{id},password:{password}
      <p>
        from state:
        {userName},{userId},{userPassword}
      </p>
    </>
  );
};
