import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import style from "./HomePageCarousel.module.css";
import product1 from "../Images/dom perignon lady gaga rose.webp";

function HomePageCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const onPrevClick = () => {
    setIndex((index - 1 + 3) % 3);
  };

  const onNextClick = () => {
    setIndex((index + 1) % 3);
  };

  return (
    <>
      <div className={style.button_container}>
        <button onClick={onPrevClick}>
          <GoArrowLeft className={style.icon} />
        </button>
        <button onClick={onNextClick}>
          <GoArrowRight className={style.icon} />
        </button>
      </div>
      <Carousel
        slide={true}
        onSelect={handleSelect}
        indicators={false}
        controls={false}
        activeIndex={index}
      >
        <Carousel.Item>
          <div className={style.carousel_box}>
             <div className={style.inner_container_}>
                <h1>MADE WITH PASSION</h1>
                <div className={style.img_box}>
                  <img className="img" src={product1} alt="beer" />
                </div>
              </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={style.carousel_box}>
            <div className={style.inner_container_}>
              <h1>MADE WITH PASSION</h1>
              <div className={style.img_box}>
                <img className="img" src={product1} alt="beer" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={style.carousel_box}>
            <div className={style.inner_container_}>
              <h1>MADE WITH PASSION</h1>
              <div className={style.img_box}>
                <img className="img" src={product1} alt="beer" />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HomePageCarousel;
