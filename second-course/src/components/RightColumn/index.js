import React from "react";
import ExperienceItem from "../ExperienceItem";
import MainTitle from "../MainTitle";

function RightColumn() {
  return (
    <div class="w3-twothird">
      <div class="w3-container w3-card w3-white w3-margin-bottom">
        <MainTitle />
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
      </div>

      <div class="w3-container w3-card w3-white">
        <MainTitle />
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
      </div>
    </div>
  );
}

export default RightColumn;
