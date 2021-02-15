import { Component } from "react";
import { recipeArr } from "./recipeBook";
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
  textAlign: 'center' && 'justify',
};

export class RecipesInfo extends Component {
  state = {
    recipeArr,
  };
  render() {
    return (
      <div>
        {this.state.recipeArr.book.map((i) => {
          return (
            <Card border="primary" style={cardStyles}>
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
          );
        })}
      </div>
    );
  }
}
