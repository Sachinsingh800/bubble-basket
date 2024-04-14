// HomePageCarousel.js
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./HomePageCarousel.module.css";
import {
  SlidingAnimation,
  SlidingAnimation2,
  SlidingAnimation3,
} from "../SlidingAnimation/SlidingAnimation";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

function HomePageCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const onPrevClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else if (index === 0) setIndex(2);
  };
  const onNextClick = () => {
    if (index === 2) {
      setIndex(0);
    } else if (index === 0 || index > 0) setIndex(index + 1);
  };

  return (
    <>
      <div className={style.button_container}>
        <button onClick={onPrevClick}> <GoArrowLeft  style={{fontSize:50}} /></button>
        <button onClick={onNextClick}><GoArrowRight style={{fontSize:50}} /></button>
      </div>
      <Carousel
        slide={true}
        interval={6000}
        onSelect={handleSelect}
        indicators={false}
        controls={false}
        activeIndex={index}
      >
        <Carousel.Item>
          <div className={style.carousel_box}>
            <SlidingAnimation />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={style.carousel_box}>
            <SlidingAnimation2 />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={style.carousel_box}>
            <SlidingAnimation3 />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HomePageCarousel;
