import React from "react";

export default class DataBox extends React.Component {
  constructor() {
    super();
    this.state = {
      key: "Hello",
    };
  }

  render() {
    return <h1>Hello</h1>;
  }
}
