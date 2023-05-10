import { useEffect, useState } from "react";
import Router from "./route";
import { CookiesProvider } from "react-cookie";
import ProductsProvider from "./providers/ProductsProvider";

function App() {
  return (
    <CookiesProvider>
      <ProductsProvider>
        <Router />
      </ProductsProvider>
    </CookiesProvider>
  );
}

export default App;
/**
// Custom hooks -> custom hook for use context ->exmp35
// useData --> exmp36
// useInput --> exmp37
// useCounter --> exmp38
ex
 */
