import { createContext } from "react";
import { Recipes } from "./Recipes";
import { recipeArr, RecipeInterface } from "./recipesBook";
import { BrowserRouter as Router } from "react-router-dom";
import { RecipesList } from "../RecipesList";
import { NavBar } from "../NavBar";

export const RecipeCtx = createContext<RecipeInterface | null>(null);

export const RecipeApp = () => (
  <Router>
    <div>
      <RecipeCtx.Provider value={recipeArr}>
        {/* <NavBar /> */}
        {/* <RecipesList /> */}
        <Recipes />
      </RecipeCtx.Provider>
    </div>
  </Router>
);
