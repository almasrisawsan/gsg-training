import React from "react";
import HeaderLeft from "../HeaderLeft";
import HeaderRight from "../HeaderRight";
import "./styles.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <HeaderLeft />
      <HeaderRight />
    </div>
  );
};

export default Header;
