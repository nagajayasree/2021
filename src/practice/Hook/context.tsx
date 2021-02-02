import * as React from "react";
export interface UserInterface {
  name?: string;
  id?: string | number;
  password?: string | number;
  status?: string;
}
export const UContext = React.createContext<UserInterface | null>(null);
