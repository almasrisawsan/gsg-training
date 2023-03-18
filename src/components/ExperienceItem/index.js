import React from "react";

function ExperienceItem({
  title = "",
  company = "",
  date = "",
  description = "",
}) {
  return (
    <div className="w3-container">
      <h5 className="w3-opacity">
        {title && <b>{`${title} / ${company}`}</b>}
      </h5>
      <h6 className="w3-text-teal">
        <i className="fa fa-calendar fa-fw w3-margin-right"></i>
        <span className="w3-tag w3-teal w3-round">{date}</span>
      </h6>
      <p>{description}</p>
      <hr />
    </div>
  );
}

export default ExperienceItem;
