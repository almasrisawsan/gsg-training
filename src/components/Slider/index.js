import { data } from "./data";
import SliderItem from "./SliderItem";

const Slider = () => {
  return (
    <section className="slider_section ">
      <div className="slider_bg_box">
        <img src="images/slider-bg.jpg" alt="" />
      </div>
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {data.map((item, index) => (
            <SliderItem {...item} index={index} />
          ))}
        </div>
        <div className="container">
          <ol className="carousel-indicators">
            <li
              data-target="#customCarousel1"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#customCarousel1" data-slide-to="1"></li>
            <li data-target="#customCarousel1" data-slide-to="2"></li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Slider;
