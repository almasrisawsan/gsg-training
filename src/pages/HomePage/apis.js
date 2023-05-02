import axios from "axios";

export const getData = async () => {
  const results = await axios.get("https://dummyjson.com/products");
  const {
    data: { products },
  } = results;

  return products;
};
