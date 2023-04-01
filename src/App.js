import React from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    age: "",
  });

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const submitUser = async (event) => {
    const newUser = {
      firstName: user.fName,
      lastName: user.lName,
      age: user.age,
    };
    console.log(newUser);
    const response = await axios.post(
      "https://dummyjson.com/users/add",
      newUser
    );
    console.log(response);
  };
  return (
    <>
      <input
        value={user.firstName}
        type="text"
        name="fName"
        placeholder="First Name"
        onChange={handleInputChange}
      ></input>
      <input
        value={user.lastName}
        type="text"
        name="lName"
        placeholder="Last Name"
        onChange={handleInputChange}
      ></input>
      <input
        value={user.age}
        type="text"
        name="age"
        placeholder="Age"
        onChange={handleInputChange}
      ></input>
      <button onClick={submitUser}>Submit</button>
    </>
  );
};

export default App;

// State is isolated -> exmp1,exmp17
// Removing from array -> exmp2
// Transforming an array -> exmp3
// Replacing item in array -> exmp4
// Inserting into array -> exmp5
// Making changes to array -> exmp6
// Exercises -> ex1.js, ex2.js, ex3.js
// Updating objects in array -> fix the issue -> exmp7
// Reacting to input with state  -> exmp8, go to exp1 before
// Exercises -> ex4.js, ex5.js
// Choosing the state structure ->
// -- Group related state -> exmp10
// -- Avoid contradictions in state -> exmp11
// -- Avoid redundant state -> exmp13
// -- Avoid duplication in state -> exmp14
// -- Avoid deeply nested state -> exmp15
// Exercises -> ex6.js, ex7.js, ex8.js
// Sharing state between components ->
// -- Lifting state up -> exmp16 ----> check screenshots before and after
// Exercises -> ex9.js, ex10.js
// Preserving and resetting state (using key) ->
// -- Re rendering component resets the state -> exmp18.js
// -- Same component at the same position preserves the state -> exmp19.js
// -- Different component at the same position resets the state -> exmp20.js, exmp21.js
// -- Nesting components functions is not a good practice -> exmp22.js
// -- Resetting the state at the same position -> exmp23.js
// -- Resetting state with a key -> exmp24.js
// -- Resetting state with a key -> exmp12.js
// Exercises -> ex11.js, ex12.js, ex13.js, ex14.js
// Installing Axios and using API's to submit a form
// localStorage & sessionStorage & Cookies
// Sign up & Login
