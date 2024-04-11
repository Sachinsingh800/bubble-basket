import React, { useState } from "react";
import style from "./ImageSlider.module.css";
import image1 from "../Images/Dom Perignon.png";
import image2 from "../Images/Gaymus Vineyards.png";
import image3 from "../Images/Moet & Champagne.png";
import image4 from "../Images/Veuve Clicquot.png";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

function ImageSlider() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollLeft = () => {
    const newPosition = Math.max(0, scrollPosition - 200); // Adjust scroll step as needed
    setScrollPosition(newPosition);
  };

  const handleScrollRight = () => {
    const newPosition = scrollPosition + 200; // Adjust scroll step as needed
    setScrollPosition(newPosition);
  };

  return (
    <div className={style.main}>
    <button className={style.scrollBtn} onClick={handleScrollLeft}>
        <GoArrowLeft style={{ fontSize: 50 }} />
      </button>
        <div className={style.slider}>

      <div
        className={style.slide}
  
      >
        <div className={style.images}       style={{
          transform: `translateX(-${scrollPosition}px)`,
          transition: "transform 0.5s ease",
        }}>
          <div className={style.img_box}>
            <img src={image1} alt="Image 1" className={style.image} />
          </div>
          <div className={style.img_box}>
            <img src={image2} alt="Image 2" className={style.image} />
          </div>
          <div className={style.img_box}>
            <img src={image3} alt="Image 3" className={style.image} />
          </div>

          <div className={style.img_box}>
            <img src={image4} alt="Image 4" className={style.image} />
          </div>
          <div className={style.img_box}>
            <img src={image1} alt="Image 1" className={style.image} />
          </div>
          <div className={style.img_box}>
            <img src={image2} alt="Image 2" className={style.image} />
          </div>
          <div className={style.img_box}>
            <img src={image3} alt="Image 3" className={style.image} />
          </div>

          <div className={style.img_box}>
            <img src={image4} alt="Image 4" className={style.image} />
          </div>
        </div>
      </div>

    </div>
    <button className={style.scrollBtn} onClick={handleScrollRight}>
        <GoArrowRight style={{ fontSize: 50 }} />
      </button>
    </div>
    
  );
}

export default ImageSlider;
