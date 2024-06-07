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
      items: 1,
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
          <a href={`brand/${"Dom Perignon"}`}>
            <div className={style.img_box}>
              <img src={image1} alt="Dom Perignon" title="Luxury Bubble Basket" loading="lazy"  width="auto" height="auto"  />
            </div>
          </a>
          <a href={`brand/${"Caymus"}`}>
            <div className={style.img_box}>
              <img src={image2} alt="Caymus" title="Luxury Bubble Basket" loading="lazy"  width="auto" height="auto" />
            </div>
          </a>
          <a href={`brand/${"Moet &amp; Chandon"}`}>
            <div className={style.img_box}>
              <img src={image3} alt="Moet &amp Chandon" title="Luxury Bubble Basket" loading="lazy"  width="auto" height="auto" />
            </div>
          </a>
          <a href={`brand/${"Veuve Clicquot"}`}>
            <div className={style.img_box}>
              <img src={image4} alt="Veuve Clicquot" title="Luxury Bubble Basket" loading="lazy"  width="auto" height="auto" />
            </div>
          </a>
        </Carousel>
      </div>
    </div>
  );
}

export default ImageSlider;
