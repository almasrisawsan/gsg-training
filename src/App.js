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

// Class components -> exmp5
// React memo -> exmp1
// React memo --> has to do with props but not it's own state --> exmp2
// New Hook -> useMemo
// Usage:
// Skipping expensive calculations -> exmp3
// Skipping re-rendering with useMemo and memo -> exmp4
// New Hook -> useRef : React Hook that lets you reference a value that’s not needed for rendering.
// useRef -> exmp6
// useRef to manipulate dom elements -> exmp7
// scroll to image -> exmp8
// Play Video -> exmp9
// Forward Ref -> exmp10
