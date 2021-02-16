import { Component } from "react";
import { RecipeInterface } from "./recipesBook";

export class RecipeDetails extends Component<RecipeInterface, RecipeInterface> {
  render() {
    let selectedCardId = localStorage.getItem("selected");
    return <div>selectedCardId</div>;
  }
}
