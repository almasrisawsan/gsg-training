import React from "react";

function ListItem({ icon, label }) {
  return (
    <p>
      <i className={`${icon} fa-fw w3-margin-right w3-large w3-text-teal`}></i>
      {label}
    </p>
  );
}

export default ListItem;
