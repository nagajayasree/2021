import { Component } from "react";
import { RecipeCtx } from "./RecipeApp";
import { Accordion, Button, Card } from "react-bootstrap";
import { RecipeInterface } from "./recipesBook";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { RecipeDetails } from "../RecipeDetails";
import CSS from "csstype";

const accStyle: CSS.Properties = {
  width: "25em",
  marginLeft: "30em",
  marginTop: "2em",
};

export class Recipes extends Component<{}, RecipeInterface> {
  constructor(props: RecipeInterface) {
    super(props);
    this.state = {
      book: [],
    };
  }

  render() {
    return (
      <Router>
        <div>
          <RecipeCtx.Consumer>
            {(value) => (
              <div>
                {value?.book.map((i) => {
                  return (
                    <div>
                      <Accordion style={accStyle}>
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle as={Button} eventKey="0">
                              <div key={i.id}>{i.recipeName}</div>
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              {i.steps.map((i) => {
                                return (
                                  <div>
                                    <h6>Step1:</h6>
                                    {i.step1}
                                    <h6>Step2:</h6>
                                    {i.step2}
                                    <h6>Step3:</h6>
                                    {i.step3}
                                  </div>
                                );
                              })}
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </div>
                  );
                })}
              </div>
            )}
          </RecipeCtx.Consumer>
        </div>
      </Router>
    );
  }
}
