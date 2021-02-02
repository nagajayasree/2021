import * as React from "react";
import { UContext, UserInterface } from "./context";
import { Login } from "./Login";

const UserInfo: UserInterface = {
  name: "",
  id: "",
  password: "",
};

const userArr = [
  {
    name: "user1",
    id: "id1",
    password: "pass1",
  },
  {
    name: "user2",
    id: "id2",
    password: "pass2",
  },
];

let usersArr: [
  { name: "u1"; id: "i1"; password: "p1" },
  { name: "u2"; id: "i2"; password: "p2" }
];

export const Main = () => {
  return (
    <div>
      <UContext.Provider value={UserInfo}>
        <Login />
      </UContext.Provider>
    </div>
  );
};
