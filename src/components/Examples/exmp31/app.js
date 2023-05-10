import ProductsContext from "../../../contexts/ProductsContext.js";
import Heading from "./Heading.js";
import Section from "./Section.js";
import { useContext } from "react";

export default function Page() {
  const { productsList, addProduct, deleteProduct } =
    useContext(ProductsContext);

  return (
    <>
      {productsList.map((product) => (
        <>
          <>{product.title}</>
          <hr />
        </>
      ))}
    </>
  );
}
