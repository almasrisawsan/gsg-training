import React from "react";

function MainTitle({ title }) {
  return (
    <h2 className="w3-text-grey w3-padding-16">
      <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
      {title}
    </h2>
  );
}

export default MainTitle;
