import { Component } from "react";
import { RecipeInterface } from "./Final/recipesBook";
import { RecipeCtx } from "./Final/RecipeApp";
import { Card } from "react-bootstrap";
import { cardStyle, titleStyle } from "./RecipesList";

export class RecipesInfo extends Component<{}, RecipeInterface> {
  constructor(props: RecipeInterface) {
    super(props);
    this.state = {
      book: [],
    };
  }

  render() {
    return (
      <div>
        <RecipeCtx.Consumer>
          {(value) => (
            <div>
              {value?.book.map((i) => {
                return (
                  <div>
                    <Card style={cardStyle}>
                      <Card.Title style={titleStyle}>
                        <p key={i.id}>{i.recipeName}</p>
                      </Card.Title>
                      <Card.Body>
                        <div>
                          {i.steps.map((i) => {
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
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </div>
          )}
        </RecipeCtx.Consumer>
      </div>
    );
  }
}
