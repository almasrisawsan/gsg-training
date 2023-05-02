import { memo, useEffect, useState } from "react";
import MyComponent from "../../components/Examples/exmp18/app";
import axios from "axios";
import { getData } from "./apis";

const ProductCard = ({ title, description, price }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <h4>Price: {price}</h4>
      <hr />
    </>
  );
};
export default function MyApp() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const result = await getData();
    setProducts(result);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products.map((product) => (
        <ProductCard {...product} />
      ))}
    </>
  );
}
