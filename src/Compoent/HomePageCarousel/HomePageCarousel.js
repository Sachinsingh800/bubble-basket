import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import style from "./HomePageCarousel.module.css";
import product1 from "../Images/Desktop - 1600X600 - Champagne.webp";
import product2 from "../Images/Desktop - 1600X600 - Chocolate.webp";
import product3 from "../Images/Desktop - 1600X600 - Spa.webp";
import product4 from "../Images/Desktop - 1600X600 - Wine.webp";
import Mobproduct1 from "../Images/Mobile - Champagne (500X700).webp";
import Mobproduct2 from "../Images/Mobile - Chocolate (500X700).webp";
import Mobproduct3 from "../Images/Mobile - Spa (500X700).webp";
import Mobproduct4 from "../Images/Mobile - Wine (500X700).webp";

function HomePageCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };



  const handleNavigate = (type) => {
    window.location.href = `/${type}`;
  };

  return (
    <>
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
              <div className={style.img_box} onClick={() => handleNavigate("WINE")}>
                <img
                  className={style.img}
                  src={product4}
                  alt="Luxury Bubble Basket"
                  title="Luxury Bubble Basket"
                  loading="lazy"
                  width="auto"
                  height="auto"
                />
                <img
                  className={style.imgMob}
                  src={Mobproduct4}
                  alt="Luxury Bubble Basket"
                  title="Luxury Bubble Basket"
                  loading="lazy"
                  width="auto"
                  height="auto"
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={style.carousel_box}>
            <div className={style.inner_container_}>
              <div className={style.img_box} onClick={() => handleNavigate("CHAMPAGNE")}>
                <img
                  className={style.img}
                  src={product1}
                  alt="Luxury Bubble Basket"
                  title="Luxury Bubble Basket"
                  loading="lazy"
                  width="auto"
                  height="auto"
                />
                <img
                  className={style.imgMob}
                  src={Mobproduct1}
                  alt="Luxury Bubble Basket"
                  title="Luxury Bubble Basket"
                  loading="lazy"
                  width="auto"
                  height="auto"
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={style.carousel_box}>
            <div className={style.inner_container_}>
              <div className={style.img_box} onClick={() => handleNavigate("CHOCOLATE")}>
                <img
                  className={style.img}
                  src={product2}
                  alt="Luxury Bubble Basket"
                  title="Luxury Bubble Basket"
                  loading="lazy"
                  width="auto"
                  height="auto"
                />
                <img
                  className={style.imgMob}
                  src={Mobproduct2}
                  alt="Luxury Bubble Basket"
                  title="Luxury Bubble Basket"
                  loading="lazy"
                  width="auto"
                  height="auto"
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={style.carousel_box}>
            <div className={style.inner_container_}>
              <div className={style.img_box} onClick={() => handleNavigate("SPA-BASKET")}>
                <img
                  className={style.img}
                  src={product3}
                  alt="Luxury Bubble Basket"
                  title="Luxury Bubble Basket"
                  loading="lazy"
                  width="auto"
                  height="auto"
                />
                <img
                  className={style.imgMob}
                  src={Mobproduct3}
                  alt="Luxury Bubble Basket"
                  title="Luxury Bubble Basket"
                  loading="lazy"
                  width="auto"
                  height="auto"
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HomePageCarousel;
