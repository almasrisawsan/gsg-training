import { useState } from "react";
import withCounter from "../components/Examples/withCounter";

// Let’s say that the user wants a component that increments a counter variable on every onClick event:
function ClickCounter(props) {
  const { counter, incrementCounter } = props;

  return (
    <div>
      {/*When clicked, increment the value of 'count'*/}
      <button onClick={() => incrementCounter()}>Increment</button>
      <p>Clicked: {counter}</p> {/*Render the value of count*/}
    </div>
  );
}
export default withCounter(ClickCounter);
