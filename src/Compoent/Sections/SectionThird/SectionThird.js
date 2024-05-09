import React, { useState, useEffect } from "react";
import style from "./SectionThird.module.css";
import textfile from "../../Images/text.png";
import backgroundImage from "../../Images/banner-wine-festival-glass-wine-distillery-old-wooden-table-with-bunches.jpg";

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
          <img src={textfile} alt="text" />
          <h2>E L E G A N T &amp; U N I Q U E</h2>
        </div>
        <a href="/Product">
          <button className={style.btn}>DISCOVER →</button>
        </a>
      </div>
    </div>
  );
}

export default SectionThird;
