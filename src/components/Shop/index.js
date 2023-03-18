import React from "react";

export const Shop = ({ children }) => {
  return (
    <section className="why_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">{children}</div>
        <div className="row">
          <div className="col-md-4">
            <div className="box ">
              <div className="img-box">
                <img src="images/delivery.svg" />
              </div>
              <div className="detail-box">
                <h5>Fast Delivery</h5>
                <p>variations of passages of Lorem Ipsum available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
