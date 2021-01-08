import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Collapse = styled.div.attrs({
  className: "collpase navbar-collapse",
})``;

const List = styled.div.attrs({
  className: "navbar-nav mr-auto",
})``;

const Item = styled.div.attrs({
  className: "collpase navbar-collapse",
})``;

class Links extends Component {
  render() {
    return (
      <>
        <Collapse>
          <Link to="/">My First MERN Application</Link>
          <List>
            <Item>
              <Link to="/movies/list">List Movies</Link>
            </Item>
            <Item>
              <Link to="/movies/create">Create Movie</Link>
            </Item>
          </List>
        </Collapse>
      </>
    );
  }
}

export default Links;
