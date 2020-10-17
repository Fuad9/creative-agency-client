import React from "react";
import { Carousel } from "3d-react-carousal";
import slideImgOne from "../../../../images/carousel-1.png";
import slideImgTwo from "../../../../images/carousel-2.png";
import slideImgThree from "../../../../images/carousel-33.png";
import slideImgFour from "../../../../images/carousel-4.png";
import slideImgFive from "../../../../images/carousel-5.png";
import "./Slider.css";

const Slider = () => {
  let slides = [
    <img src={slideImgOne} alt="1" />,
    <img src={slideImgTwo} alt="2" />,
    <img src={slideImgThree} alt="3" />,
    <img src={slideImgFour} alt="4" />,
    <img src={slideImgFive} alt="5" />,
  ];

  return (
    <>
      <section className=" mt-5" id="portfolio">
        <div className="container-fluid worksInfo">
          <div className="text-center text-white pt-5">
            <h2>
              Here are some of{" "}
              <span style={{ color: "#7AB259" }}>our works</span>
            </h2>
          </div>
          <div className="my-5 d-flex justify-content-center">
            <div style={{ width: "800px", height: "600px" }}>
              <Carousel slides={slides} autoplay={true} interval={1000} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
