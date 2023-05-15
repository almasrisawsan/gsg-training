import ClickCounter from "../../components/ClickCounter";
import HoverCounter from "../../components/HoverCounter";
import { useContext, useEffect } from "react";
import ProductsContext from "../../contexts/ProductsContext";
import getProducts from "../../hooks/getProducts";

const App = () => {
  //console.log(productsList);

  return (
    <div className="App">
      {/*Render both of these components to the UI */}
      <ClickCounter />
      <HoverCounter />
      <button onClick={() => getProducts()}>Click me</button>
    </div>
  );
};

export default App;
