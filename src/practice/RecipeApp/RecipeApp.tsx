import { createContext } from "react";
import { RecipesInfo } from "./RecipesInfo";
import { RecipesList } from "./RecipesList";
import { recipeArr, RecipeInterface } from "./recipesBook";
export const RecipeCtx = createContext<RecipeInterface | null>(null);

export const RecipeApp = () => (
  <RecipeCtx.Provider value={recipeArr}>
    <RecipesList />
    <RecipesInfo />
  </RecipeCtx.Provider>
);
