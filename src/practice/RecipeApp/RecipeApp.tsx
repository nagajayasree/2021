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
        {/* <NavBar /> */}
        <RecipesList />
      </RecipeCtx.Provider>
    </div>
  </Router>
);
