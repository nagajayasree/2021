import * as React from "react";
import { UContext, UserInterface } from "./context";
import { User } from "./User";

const UserInfo: UserInterface = {
  name: "",
  id: "",
  password: "",
};

export const UserLogin = () => {
  return (
    <div>
      <UContext.Provider value={UserInfo}>
        <User id={"user1"} password={12345} />
      </UContext.Provider>
    </div>
  );
};
