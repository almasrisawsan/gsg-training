import React from "react";
import HeroImage from "../HeroImage";
import ListItem from "../ListItem";
import SubTitle from "../SubTitle";
import ProgressBar from "../ProgressBar";
import { address, skills, languages } from "./data";

const heroImageData = {
  name: "John Doe",
  image: "https://www.w3schools.com/w3images/avatar_hat.jpg",
  title: "Backend Developer",
};

function LeftColumn() {
  return (
    <div className="w3-third">
      <div className="w3-white w3-text-grey w3-card-4">
        <HeroImage {...heroImageData} />
        <div className="w3-container">
          {address.map((item) => (
            <ListItem {...item} />
          ))}

          <hr />

          <SubTitle title="Skills" />
          {skills.map((item) => (
            <ProgressBar {...item} />
          ))}

          <br />

          <SubTitle title="Languages" />
          {languages.map((item) => (
            <ProgressBar {...item} />
          ))}
          <br />
        </div>
      </div>
      <br />
    </div>
  );
}

export default LeftColumn;
