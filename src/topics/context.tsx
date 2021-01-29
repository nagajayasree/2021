import * as React from "react";

export interface ContextInterface {
  username?: string;
  password?: string | number;
  firstName?: string;
  lastName?: string;
}

const UserCtxt = React.createContext<ContextInterface | null>(null);

const sampleUserInfo: ContextInterface = {
  username: "abcxyz",
  password: 12345,
};

const sampleUserNames: ContextInterface = {
  firstName: "firstname",
  lastName: "lastname",
};

export const UserInfo = () => {
  const userContext = React.useContext(UserCtxt);
  return (
    <div>
      Username:{userContext?.username},Password:{userContext?.password}
    </div>
  );
};

export const UserName = () => {
  const userContext = React.useContext(UserCtxt);
  return (
    <div>
      <p>Firstname:{userContext?.firstName}</p>
      <p>Lastname:{userContext?.lastName}</p>
    </div>
  );
};

export const User = () => (
  <UserCtxt.Provider value={sampleUserInfo}>
    <UserInfo />
  </UserCtxt.Provider>
);

export const GetUserName = () => (
  <UserCtxt.Provider value={sampleUserNames}>
    <UserName />
  </UserCtxt.Provider>
);
