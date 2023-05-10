// Let’s say that the user wants a component that increments a counter variable on every onClick event:
function ClickCounter() {
  const [count, setCount] = useState(0); //default value of this state will be 0.
  return (
    <div>
      {/*When clicked, increment the value of 'count'*/}
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <p>Clicked: {count}</p> {/*Render the value of count*/}
    </div>
  );
}
export default ClickCounter;

//what if the client wants another component that contains the same functionality, 
//but it triggers on an onMouseOver event?
function HoverCounter(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/*If the user hovers over this button, then increment 'count'*/}
      <button onMouseOver={() => setCount((count) => count + 1)}>
        Increment
      </button>
      <p>
        Clicked: {count}
      </p>
    </div>
  );
}
export default HoverCounter;

//A higher-order component is a function that takes in a component and returns a new component.
// const newComponent = higherFunction(WrappedComponent);

// render components
import ClickIncrease from "./components/ClickIncrease"; 
import HoverIncrease from "./components/HoverIncrease";
export default function App() {
  return (
    <div className="App">
      {/*Render both of these components to the UI */}
      <ClickIncrease />
      <HoverIncrease />
    </div>
  );
}


//create HOC withCounter
import React from "react";
const UpdatedComponent = (OriginalComponent) => {
  function NewComponent(props) {
    const [counter, setCounter] = useState(10); //create a Hook
    return (
      <OriginalComponent
        counter={counter} //export our counter Hook
        //now create an 'incrementSize' function
        incrementCounter={() => setCounter((counter) => counter + 1)}
      />
    );
  }
};
export default UpdatedComponent;

//code inside the original components
const { counter, incrementCounter } = props; 
return (
  <div>
    {/*Use the incrementCounter method to increment the 'counter' state..*/}
    <button onClick={() => incrementCounter()}>Increment counter</button> 
    {/*Render the value of our 'counter' variable:*/}
    <p> Value of 'counter' in HoverIncrease/ClickIncrease: {counter}</p>
  </div>
);

