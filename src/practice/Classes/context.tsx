import * as React from "react";
import { State } from "./LoginForm";
export const UserCtx = React.createContext<State | null>(null);
