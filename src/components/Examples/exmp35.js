import { ProductsContext } from "../../contexts/ProductsContext";
import { useContext } from "react";

const useProducts = () => useContext(ProductsContext);

export default useProducts;
