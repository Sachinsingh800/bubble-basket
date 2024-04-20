// HomePageCarousel.js
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./HomePageCarousel.module.css";

import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import product1 from "../Images/dom perignon lady gaga rose.png";

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
        <button onClick={onPrevClick}>
          {" "}
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
             <div className={style.inner_container_ }>
                <h1>MADE WITH PASSION</h1>
                <div className={style.img_box}>
                <img className="img" src={product1} alt="beer" />
                </div>
              </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={style.carousel_box}>
          <div className={style.inner_container_ }>
                <h1>MADE WITH PASSION</h1>
                <div className={style.img_box}>
                <img className="img" src={product1} alt="beer" />
                </div>
              </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={style.carousel_box}>
          <div className={style.inner_container_ }>
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
