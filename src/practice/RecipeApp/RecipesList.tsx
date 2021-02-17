import { Component } from "react";
import { RecipeCtx } from "./RecipeApp";
import { Card } from "react-bootstrap";
import { RecipeInterface } from "./recipesBook";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { RecipeDetails } from "./RecipeDetails";
import CSS from "csstype";

export const cardStyle: CSS.Properties = {
  position: "relative",
  margin: "40px",
  width: "25rem",
  height: "3rem",
  marginLeft: "30rem",
};

export const titleStyle: CSS.Properties = {
  fontFamily: "revert",
  fontSize: "20px",
  marginTop: "10px",
};

export const bodyStyle: CSS.Properties = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  textAlign: "center" && "justify",
  position: "relative",
  display: "block",
  width: "25rem",
  height: "40rem",
};

export const textStyle: CSS.Properties = {
  textAlign: "center" && "justify",
};

export class RecipesList extends Component<{}, RecipeInterface> {
  constructor(props: RecipeInterface) {
    super(props);
    this.state = {
      book: [],
    };
  }

  // goToCardInfo = (name: string) => {
  //   console.log("selected", name);
  //   // localStorage.setItem("selected", name);
  //   // this.props.history.push("/recipeInfo/:name");
  // };

  render() {
    return (
      <Router>
        <div>
          <RecipeCtx.Consumer>
            {(value) => (
              <div>
                {value?.book.map((i) => {
                  return (
                    <div
                    //  onClick={() => this.goToCardInfo(i.recipeName)}
                    >
                      <Link to={`/recipeDetails/${i.recipeName}/${i.id}`}>
                        <Card style={cardStyle}>
                          <Card.Title style={titleStyle}>
                            <p key={i.id}>{i.recipeName}</p>
                          </Card.Title>
                          <Card.Body style={bodyStyle}>
                            {i.steps.map((i) => {
                              return (
                                <div>
                                  Step1:{i.step1}
                                  Step2:{i.step2}
                                  Step3:{i.step3}
                                </div>
                              );
                            })}
                          </Card.Body>
                        </Card>
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </RecipeCtx.Consumer>
          <Route exact path="/" component={RecipesList}></Route>
          <Route
            path={`/recipeDetails/:recipeName/:id`}
            component={RecipeDetails}
          />
        </div>
      </Router>
    );
  }
}
