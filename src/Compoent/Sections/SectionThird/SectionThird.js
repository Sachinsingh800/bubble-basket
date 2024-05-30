import React, { useState, useEffect } from "react";
import style from "./SectionThird.module.css";
import textfile from "../../Images/text.png";
import backgroundImage from "../../Images/Background - 1500X1000.png";

function SectionThird() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={style.main}>
      <div
        className={style.background}
        style={{ transform: `translateY(${scrollPosition * 0.2}px)` }} // Adjust the speed here
      >
        <img src={backgroundImage} alt="bg" className={style.bgImage} />
      </div>
      <div
        className={style.content}
        style={{ transform: `translateY(-${scrollPosition * 0.4}px)` }} // Adjust the speed here
      >
        <div className={style.description_box}>
          <div className={style.heading_box}>
            <h2>Luxury Gift Baskets</h2>
            <p>For Reathors</p>
          </div>
        </div>
        <br />
        <a href="/Product">
          <button className={style.btn}>Explore Now</button>
        </a>
      </div>
    </div>
  );
}

export default SectionThird;
