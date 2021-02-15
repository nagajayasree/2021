import { useContext } from "react";
import { recipeArr, RecipeCtx } from "./recipesBook";
import { Card } from "react-bootstrap";
import CSS from "csstype";

const cardStyles: CSS.Properties = {
  position: "relative",
  margin: "40px",
  width: "35rem",
  marginLeft: "25rem",
};

const titleStyle: CSS.Properties = {
  fontFamily: "revert",
  fontSize: "small",
};

const textStyle: CSS.Properties = {
  textAlign: "center" && "justify",
};

export const RecipesInfo = () => {
  const recipeCtxt = useContext(RecipeCtx);
  return (
    <div>
      {recipeCtxt?.book.map((i) => {
        return (
          <div>
            <Card style={cardStyles}>
              <Card.Body>
                <div>
                  <Card.Title style={titleStyle}>
                    <h2>{i.recipe}</h2>
                  </Card.Title>
                  <Card.Text style={textStyle}>
                    {i.making.map((i) => {
                      return (
                        <div>
                          <h6>Step1:</h6>
                          <p>{i.step1}</p>
                          <h6>Step2:</h6>
                          <p>{i.step2}</p>
                          <h6>Step3:</h6>
                          <p>{i.step3}</p>
                        </div>
                      );
                    })}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
