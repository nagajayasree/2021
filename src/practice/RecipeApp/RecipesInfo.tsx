import { useContext } from "react";
import { RecipeCtx } from "./RecipeApp";
import { Card } from "react-bootstrap";
import CSS from "csstype";

export const cardStyle: CSS.Properties = {
  position: "relative",
  margin: "40px",
  width: "35rem",
  marginLeft: "25rem",
};

export const titleStyle: CSS.Properties = {
  fontFamily: "revert",
  fontSize: "20px",
};

export const textStyle: CSS.Properties = {
  textAlign: "center" && "justify",
};

export const RecipesInfo = () => {
  const recipeCtxt = useContext(RecipeCtx);
  return (
    <div>
      {recipeCtxt?.book.map((i) => {
        return (
          <div>
            <Card style={cardStyle}>
              <Card.Body>
                <div>
                  <Card.Title style={titleStyle}>
                    <h2>{i.recipeName}</h2>
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
