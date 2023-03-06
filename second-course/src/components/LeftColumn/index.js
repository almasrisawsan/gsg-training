import React from "react";
import HeroImage from "../HeroImage";
import ListItem from "../ListItem";

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

          <p class="w3-large">
            <b>
              <i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>
              Skills
            </b>
          </p>
          <p>Adobe Photoshop</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div
              class="w3-container w3-center w3-round-xlarge w3-teal"
              style={{ width: "90%" }}
            >
              90%
            </div>
          </div>
          <p>Photography</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div
              class="w3-container w3-center w3-round-xlarge w3-teal"
              style={{ width: "80%" }}
            >
              <div class="w3-center w3-text-white">80%</div>
            </div>
          </div>
          <p>Illustrator</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div
              class="w3-container w3-center w3-round-xlarge w3-teal"
              style={{ width: "75%" }}
            >
              75%
            </div>
          </div>
          <p>Media</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div
              class="w3-container w3-center w3-round-xlarge w3-teal"
              style={{ width: "50%" }}
            >
              50%
            </div>
          </div>
          <br />

          <p class="w3-large w3-text-theme">
            <b>
              <i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>
              Languages
            </b>
          </p>
          <p>English</p>
          <div class="w3-light-grey w3-round-xlarge">
            <div
              class="w3-round-xlarge w3-teal"
              style={{ width: "100%", height: "24px" }}
            ></div>
          </div>
          <p>Spanish</p>
          <div class="w3-light-grey w3-round-xlarge">
            <div
              class="w3-round-xlarge w3-teal"
              style={{ width: "55%", height: "24px" }}
            ></div>
          </div>
          <p>German</p>
          <div class="w3-light-grey w3-round-xlarge">
            <div
              class="w3-round-xlarge w3-teal"
              style={{ width: "25%", height: "24px" }}
            ></div>
          </div>
          <br />
        </div>
      </div>
      <br />
    </div>
  );
}

export default LeftColumn;
