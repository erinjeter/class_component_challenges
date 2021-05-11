import React from "react";

export default class CatList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.cats.map((cat, index) => (
          <li key={index}>{cat}</li>
        ))}
      </ul>
    );
  }
}
