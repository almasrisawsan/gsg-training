import ProductItem from "./ProductItem";
import { data } from "./data";

const ProductList = () => {
  return (
    <div className="w3-content w3-margin-top" style={{ maxWidth: "1440px" }}>
      <div className="w3-row-padding">
        <div className="w3-row-padding w3-padding-16 w3-center" id="food">
          {data.map((item, index) => (
            <ProductItem {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
