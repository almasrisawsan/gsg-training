import React from "react";

function HeroImage({ image, name, title = "Front end Developer" }) {
  return (
    <div className="w3-display-container">
      <img src={image} style={{ width: "100%" }} alt="Avatar" />
      <div className="w3-display-bottomleft w3-container w3-text-black">
        <h2>{name}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default HeroImage;
