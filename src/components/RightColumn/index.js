import React from "react";
import RightSection from "../RightSection";
import { workExperience, education } from "./data";

function RightColumn() {
  return (
    <div className="w3-twothird">
      <RightSection data={workExperience} title="Work Experience" />
      <RightSection data={education} title="Education" />
    </div>
  );
}

export default RightColumn;
