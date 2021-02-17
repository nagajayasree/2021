import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { RecipesList } from "./RecipesList";
import { RecipesInfo } from "./RecipesInfo";
import { RecipeCtx } from "./RecipeApp";
// import { RecipeCtx } from "./RecipeApp";

export const NavBar = () => (
  <Router>
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>RecipeApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-Navbar">
          <Nav className="mr-auto">
            <Link to="/home">
              <Nav.Link>Home</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/home" component={RecipesList} />
      </Switch>
    </div>
  </Router>
);
