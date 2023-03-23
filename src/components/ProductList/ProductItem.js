import React from "react";

const ProductItem = ({ image, title, description, alt, onAddProduct }) => {
  return (
    <div className="w3-quarter">
      <img src={image} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onAddProduct}>Show Details</button>
    </div>
  );
};

export default ProductItem;
