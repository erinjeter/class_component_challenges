import React, { Component } from "react";
export default class DogIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
  }

  fetchImage = () => {
    const result = fetch(" https://dog.ceo/api/breeds/image/random");
    const jsonified = result.json();
    this.setState({
      url: jsonified.url,
    });
  };

  render() {
    return (
      <div>
        <img src={this.state.url} alt="random dog image" />
        <button onClick={this.getImage}>New Image</button>
      </div>
    );
  }
}
