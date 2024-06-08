import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import style from "./HomePageCarousel.module.css";
import product1 from "../Images/Desktop - Champagne (1600X897).webp";
import product2 from "../Images/Desktop - Chocolate (1600X897).webp";
import product3 from "../Images/Desktop - Spa (1600X897).webp";
import product4 from "../Images/Desktop - Wine (1600X897).webp";

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
    <h1 hidden>Luxury Bubble Basket | Buy Gifts For Everyone</h1>
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
                <div className={style.img_box}>
                  <img className="img" src={product1} alt="Luxury Bubble Basket " title="Luxury Bubble Basket " loading="lazy"  width="auto" height="auto" />
                </div>
              </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={style.carousel_box}>
            <div className={style.inner_container_}>
              <div className={style.img_box}>
                <img className="img" src={product2} alt="Luxury Bubble Basket " title="Luxury Bubble Basket " loading="lazy"  width="auto" height="auto" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={style.carousel_box}>
            <div className={style.inner_container_}>
              <div className={style.img_box}>
                <img className="img" src={product3} alt="Luxury Bubble Basket " title="Luxury Bubble Basket " loading="lazy"  width="auto" height="auto" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={style.carousel_box}>
            <div className={style.inner_container_}>
              <div className={style.img_box}>
                <img className="img" src={product4} alt="Luxury Bubble Basket " title="Luxury Bubble Basket " loading="lazy"  width="auto" height="auto" />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HomePageCarousel;
