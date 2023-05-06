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
// Cases where useEffect is NOT needed:
// 1- Updating state based on props or state --> exmp20
// 2- Resetting all state when a prop changes --> exmp21
// 3- Caching expensive calculations --> exmp22
// 5- Sharing logic between event handlers --> exmp23
// 6- Sending a POST request -->exmp24
// useCallback --> React Hook that lets you cache a function definition between re-renders.
/** Usage:
 * 1- Skipping re-rendering of components -> exmp33, exmp26, exmp27, exmp28
 * 2- Preventing an Effect from firing too often --> exmp29
 */
// useReducer --> Components with many state updates spread across many event handlers can get overwhelming.
// For these cases, you can consolidate all the state update logic outside your component in a single function, called a reducer.
// useReducer --> exmp25
// useReducer exercises --> ex1,ex2,ex3,ex4
// useContext --> Context lets the parent component make some information available
// to any component in the tree below it—no matter how deep—without passing it explicitly through props.
/**
 * useContext --> exmp32
 *
 * --> exmp30 -> convert to context exmp31
 * // Exercises --> ex5,
 */
