import React from "react";
import HeroImage from "../HeroImage";
import ListItem from "../ListItem";
import SubTitle from "../SubTitle";
import ProgressBar from "../ProgressBar";
import lion from "./lion.jpg";

function LeftColumn() {
  return (
    <div class="w3-third">
      <div class="w3-white w3-text-grey w3-card-4">
        <HeroImage />
        <div class="w3-container">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <hr />

          <SubTitle />
          <ProgressBar />
          <ProgressBar />
          <ProgressBar />
          <ProgressBar />
          <br />

          <SubTitle />
          <ProgressBar />
          <ProgressBar />
          <ProgressBar />
          <br />
        </div>
      </div>
      <br />
    </div>
  );
}

export default LeftColumn;
