import React from "react";

const ProductCard = () => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-4">
      <div className="box">
        <div className="option_container">
          <div className="options">
            <a href="" className="option1">
              Add to Cart
            </a>
            <a href="" className="option2">
              Buy Now
            </a>
          </div>
        </div>
        <div className="img-box">
          <img src="" alt="" />
        </div>
        {/* <div className="detail-box">{children}</div> */}
      </div>
    </div>
  );
};

export default ProductCard;
