import { LoginForm } from "./LoginForm";
import { Welcome } from "./Welcome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const MainComp = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginForm title={"Login Page"} uname={"js"} pwd={"js"} />
          </Route>
          <Route path="/welcome" component={Welcome} />
        </Switch>
      </Router>
    </>
  );
};
