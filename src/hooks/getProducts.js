import { useContext, useEffect, useState } from "react";
import ProductsContext from "../contexts/ProductsContext";

const GetProducts = () => {
  const [counter, setCounter] = useState(0);

  console.log(counter);
  useEffect(() => {
    setCounter(counter + 1);
  }, []);

  return counter;
};

export default GetProducts;
