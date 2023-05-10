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
 * Continue in React Context
 * Higher order components --> exmp34, exmp33
 */
