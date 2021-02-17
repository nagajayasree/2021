import { BrowserRouter as Router, Route } from "react-router-dom";
import { RecipesList } from "./RecipesList";

export const RecipeDetails = ({ match }: any) => {
  return (
    <Router>
      <>
        <h3>{match.params.recipeName}</h3>
        {/* <p>{match.params.id}</p> */}
        {/* <p>{match.params.steps}</p> */}
      </>
    </Router>
  );
};
