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

// React memo -> exmp1
// React memo --> has to do with props but not it's own state --> exmp2
// New Hook -> useMemo
// Usage:
// Skipping expensive calculations -> exmp3
// Skipping re-rendering with useMemo and memo -> exmp4
