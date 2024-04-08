// HomePageCarousel.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./HomePageCarousel.module.css";
import { SlidingAnimation, SlidingAnimation2, SlidingAnimation3 } from '../SlidingAnimation/SlidingAnimation';

function HomePageCarousel() {
  return (
    <Carousel slide={true} interval={6000}>
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
  );
}

export default HomePageCarousel;
