import "./App.css";
import React from "react";
import SectionHeader from "./components/SectionHeader";
import DataBox from "./components/DataBox";

const App = () => {
  const dataArray = [
    {
      image: "images/delivery.svg",
      title: "Fast Delivery",
      description: "variations of passages of Lorem Ipsum available",
    },
    {
      image: "images/shipping.svg",
      title: "Free Shipping",
      description: "variation of Lorem Ipsum available",
    },
    {
      image: "images/quality.svg",
      title: "Best Quality",
      description: "variation of Lorem Ipsum available",
    },
  ];

  return (
    <section className="why_section layout_padding">
      <div className="container">
        <SectionHeader />
        <div className="row">
          {dataArray.map((item) => (
            <DataBox />
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
