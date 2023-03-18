import React from "react";
import HeroImage from "../HeroImage";
import ListItem from "../ListItem";
import SubTitle from "../SubTitle";
import ProgressBar from "../ProgressBar";
import { address, skills } from "./data";

const heroImageData = {
  name: "Jane Doe",
  image: "https://www.w3schools.com/w3images/avatar_hat.jpg",
};

function LeftColumn() {
  return (
    <div class="w3-third">
      <div class="w3-white w3-text-grey w3-card-4">
        <HeroImage />
        <div class="w3-container">
          {address.map(({ label, icon, count, value }) => (
            <ListItem />
          ))}

          <hr />

          <SubTitle />
          {skills.map(({ label, percentage }) => (
            <ProgressBar />
          ))}

          <br />

          <SubTitle />
          {skills.map((item) => (
            <ProgressBar />
          ))}
          <br />
        </div>
      </div>
      <br />
    </div>
  );
}

export default LeftColumn;
