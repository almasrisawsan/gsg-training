import { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {
  return function NewComponent(props) {
    const [counter, setCounter] = useState(0); //create a Hook
    return (
      <OriginalComponent
        counter={counter} //export our counter Hook
        //now create an 'incrementSize' function
        incrementCounter={() => setCounter((counter) => counter + 1)}
        {...props}
      />
    );
  };
};
export default UpdatedComponent;
