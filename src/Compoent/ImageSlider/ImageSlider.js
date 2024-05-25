// ImageSlider.js
import React from "react";
import style from "./ImageSlider.module.css";
import image1 from "../Images/Dom Perignon.png";
import image2 from "../Images/Gaymus Vineyards.png";
import image3 from "../Images/Moet & Champagne.png";
import image4 from "../Images/Veuve Clicquot.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

function ImageSlider() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2000, min: 1000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className={style.custom_button}>
        <button onClick={() => previous()}>
          <GoArrowLeft className={style.icon} />
        </button>
        <button onClick={() => next()}>
          <GoArrowRight className={style.icon} />
        </button>
      </div>
    );
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.headingBox}>
        <h2>SHOP BY BRANDS</h2>
      </div>
      <div className={style.carousel_box}>
        <Carousel
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
          responsive={responsive}
        >
          <a href={`/${"Dom Perignon"}`}>
            <div className={style.img_box}>
              <img src={image1} alt="slide 1" />
            </div>
          </a>
          <a href={`/${"Caymus"}`}>
            <div className={style.img_box}>
              <img src={image2} alt="slide 2" />
            </div>
          </a>
          <a href={`/${"Moet &amp; Chandon"}`}>
            <div className={style.img_box}>
              <img src={image3} alt="slide 3" />
            </div>
          </a>
          <a href={`/${"Veuve Clicquot"}`}>
            <div className={style.img_box}>
              <img src={image4} alt="slide 4" />
            </div>
          </a>
          <a href={`/${"Denis Premier"}`}>
            <div className={style.img_box}>
              <img src={image4} alt="slide 5" />
            </div>
          </a>
        </Carousel>
      </div>
    </div>
  );
}

export default ImageSlider;
