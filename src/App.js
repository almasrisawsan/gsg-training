import Router from "./route";
import { CookiesProvider } from 'react-cookie';

export default function App() {
  return (
    <>
      <CookiesProvider>
        <Router />
      </CookiesProvider>
    </>
  );
}

// React Router fundamentals
// npm i -D react-router-dom ------> will add it to devDependencies
// Basic router --> basic.js
// Add "pages" folder to host all pages and link routes
// Nested routes -> nested
// Use Layouts in router --> nested
// Using outlet ---> outlet
// URL parameters --> params

// Link to a page
// Session storage
// Local Storage
// Cookies
// Login form
// Use access token in authorization

// Reacting to input with state  -> exmp8, go to exp1 before
// Exercises ->  ex5.js
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
