import React, { useState, useEffect } from "react";
import style from "./SectionSeventh.module.css";
import backgroundImage from "../../Images/medium-shot-smiley-man-drinking-wine.jpg";

function SectionSeventh() {
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
          <h3>CORPORATE</h3>
          <h2> BULK ORDER</h2>
          <p>
            Elevate corporate connections with our curated gift baskets, perfect
            for bulk orders. Strengthen bonds through thoughtful gifting!
          </p>
        </div>
        <a href="/ColumnPage">
          <button className={style.btn}>CONTACT US →</button>
        </a>
      </div>
    </div>
  );
}

export default SectionSeventh;
