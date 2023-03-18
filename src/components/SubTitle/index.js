import React from "react";

const SubTitle = ({ title }) => {
  return (
    <p className="w3-large">
      <b>
        <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>
        {title}
      </b>
    </p>
  );
};

export default SubTitle;
