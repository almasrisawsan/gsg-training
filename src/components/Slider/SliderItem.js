import React from "react";

const SliderItem = ({ label, sub, desc, index, isButtonAvailable = false }) => {
  return (
    <div className={`carousel-item ${index === 0 && "active"}`}>
      <div className="container ">
        <div className="row">
          <div className="col-md-7 col-lg-6 ">
            <div className="detail-box">
              <h1>
                <span>{label}</span>
                <br />
                {sub}
              </h1>
              <p>{desc}</p>
              {isButtonAvailable && (
                <div className="btn-box">
                  <a href="" className="btn1">
                    Shop Now
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
