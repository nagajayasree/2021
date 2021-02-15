import { RecipeCtx } from "./RecipeApp";
import { useContext } from "react";
import { Card } from "react-bootstrap";
import { cardStyle, titleStyle } from "./RecipesInfo";

export const RecipesList = () => {
  const recipeList = useContext(RecipeCtx);
  return (
    <div>
      {recipeList?.book.map((i) => {
        return (
          <div>
            <Card style={cardStyle}>
              <Card.Title style={titleStyle}>
                <div>{i.recipeName}</div>
              </Card.Title>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
