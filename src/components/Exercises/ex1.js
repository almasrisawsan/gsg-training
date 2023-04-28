//Convert to functional component

import React, { useState } from "react";

const Car = (props) => {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    color: "red",
    year: 1964,
  });

  const { brand, model, color, year } = car;
  return (
    <div>
      <h1>My {brand}</h1>{" "}
      <p>
        It is a {color}
        {model}
        from {year}.{" "}
      </p>{" "}
    </div>
  );
};
export default Car;

// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red",
//       year: 1964,
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color}
//           {this.state.model}
//           from {this.state.year}.
//         </p>
//       </div>
//     );
//   }
// }
