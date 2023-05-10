import { useState } from "react";
import withCounter from "../components/Examples/withCounter";

//what if the client wants another component that contains the same functionality,
//but it triggers on an onMouseOver event?
function HoverCounter(props) {
  const { counter, incrementCounter } = props;
  return (
    <div>
      {/*If the user hovers over this button, then increment 'count'*/}
      <button onMouseOver={() => incrementCounter()}>Increment</button>
      <p>Clicked: {counter}</p>
    </div>
  );
}
export default withCounter(HoverCounter);
