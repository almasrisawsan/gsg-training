import React from "react";

const ProgressBar = () => {
  return (
    <>
      <p>Adobe Photoshop</p>
      <div className="w3-light-grey w3-round-xlarge w3-small">
        <div
          className="w3-container w3-center w3-round-xlarge w3-teal"
          style={{ width: "90%" }}
        >
          90%
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
