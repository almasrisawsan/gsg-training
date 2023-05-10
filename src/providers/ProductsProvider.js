import React, { useEffect, useState } from "react";
import ProductsContext from "../contexts/ProductsContext";
import axios from "axios";

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const {
      data: { products },
    } = await axios.get("https://dummyjson.com/products");
    setProducts(products);
  };

  const addProduct = () => {
    //add product logic
  };

  const deleteProduct = () => {
    //logic delete product
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ productsList: products, addProduct, deleteProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
