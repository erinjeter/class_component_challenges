import React, { Component } from "react";
import { Container } from "reactstrap";
import CatIndex from "./CatIndex";

export default class Cats extends Component {
  render() {
    return (
      <Container className="App">
        <CatIndex />
      </Container>
    );
  }
}
