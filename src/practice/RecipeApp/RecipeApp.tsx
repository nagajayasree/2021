import { createContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { RecipesList } from "./RecipesList";
import { recipeArr, RecipeInterface } from "./recipesBook";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { RecipesInfo } from "./RecipesInfo";
import { NavBar } from "./NavBar";

export const RecipeCtx = createContext<RecipeInterface | null>(null);

export const RecipeApp = () => (
  <Router>
    <div>
      <RecipeCtx.Provider value={recipeArr}>
        <NavBar />
        <RecipesList />
        {/* <Route path="/home" component={RecipesList} /> */}
        {/* <Route path="/home">
          <RecipesList />
        </Route> */}
        {/* <Route path="/recipes/:id" component={RecipesInfo} /> */}
        {/* <Route path="/recipes/:id" component={RecipesInfo} /> */}
        {/* <RecipesInfo /> */}
      </RecipeCtx.Provider>
    </div>
  </Router>
);
