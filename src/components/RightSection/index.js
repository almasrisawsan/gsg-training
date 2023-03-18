import React from "react";
import MainTitle from "../MainTitle";
import ExperienceItem from "../ExperienceItem";

const RightSection = ({ data, title }) => {
  return (
    <div className="w3-container w3-card w3-white w3-margin-bottom">
      <MainTitle title={title} />
      {data.map((item) => (
        <ExperienceItem {...item} />
      ))}
    </div>
  );
};

export default RightSection;
