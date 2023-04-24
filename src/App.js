import Router from "./route";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <CookiesProvider>
      <Router />
    </CookiesProvider>
  );
}

export default App;

// Protected routes
// exercise -> create 3 pages and router -> Login , Sign Up, Home page
// How to use SASS to styles components -> variables, imports
// Back to state
// Choosing the state structure ->
// -- Group related state -> exmp10  -> done
// -- Avoid contradictions in state -> exmp11 -> done
// -- Avoid redundant state -> exmp13 -> done
// -- Avoid duplication in state -> exmp14
// -- Avoid deeply nested state -> exmp15 --> will add it as an example on google classes
// Exercises --> ex.6, ex7, ex8

// Sharing state between components ->
// -- Lifting state up -> exmp16 ----> Done
// Exercises -> ex9.js, ex10.js
// Preserving and resetting state (using key) ->
// -- Re rendering component resets the state -> exmp18.js -> Done
// -- Same component at the same position preserves the state -> exmp19.js -> Done
// -- Different component at the same position resets the state -> exmp20.js, exmp21.js -> Done
// -- Nesting components functions is not a good practice -> exmp22.js
// -- Resetting the state at the same position -> exmp23.js
// -- Resetting state with a key -> exmp24.js
// -- Resetting state with a key -> exmp12.js
// Exercises -> ex11.js, ex12.js, ex13.js, ex14.js
// React memo -> exmp25
// React memo --> has to do with props but not it's own state --> exmp26
