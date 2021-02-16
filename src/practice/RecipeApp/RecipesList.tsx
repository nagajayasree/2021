import { Component } from "react";
import { RecipeCtx } from "./RecipeApp";
import { Card } from "react-bootstrap";
import { RecipeInterface } from "./recipesBook";
import { cardStyle, RecipesInfo, titleStyle } from "./RecipesInfo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
                      <Link to="/recipeInfo">
                        <Card style={cardStyle}>
                          <Card.Title style={titleStyle}>
                            <p key={i.id}>{i.recipeName}</p>
                          </Card.Title>
                        </Card>
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </RecipeCtx.Consumer>
          <Route exact path="/recipeInfo" component={RecipesInfo} />
        </div>
      </Router>
    );
  }
}
