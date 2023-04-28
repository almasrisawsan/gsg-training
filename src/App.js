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

// New Hook -> useMemo
// Usage:
// Skipping expensive calculations -> exmp3
// Skipping re-rendering with useMemo and memo -> exmp4
// New Hook -> useRef : React Hook that lets you reference a value that’s not needed for rendering.
// useRef -> exmp6
// useRef to manipulate dom elements -> exmp7
// scroll to image -> exmp8
// Play Video -> exmp9
// exercises -> ex1, ex2, ex3, ex4
// Forward Ref -> exmp10
// in Ref's -> avoid changing DOM elements managed by React -> exmp11
// exercises -> ex5, ex6, ex7, ex8
// useEffect
/**
 * useEffect(() => {
  // This runs after every render
}); ----> exmp13

useEffect(() => {
  // This runs only on mount (when the component appears)
}, []); ---> exmp14

useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
}, [a, b]); ----> exmp15
 */
// usage:
// 1- Connecting to external system -> exmp12
