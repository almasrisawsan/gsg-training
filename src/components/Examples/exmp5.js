import React from "react";

export default class DataBox extends React.Component {
  constructor() {
    super();
    this.state = {
      key: "Hello",
    };
  }

  // componentWillMount() {
  //   //any logic
  // }

  componentDidMount() {
    // useEffect(()=>{},[])
    //any logic
  }

  componentWillUpdate() {
    // any logic
  }
  //Rerender
  componentDidUpdate() {
    //any logic
  }

  componentWillUnmount() {
    //any logic
  }

  render() {
    return <h1>Hello</h1>;
  }
}
