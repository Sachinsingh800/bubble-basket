import React, { useState, useEffect } from "react";
import style from "./SectionThird.module.css";
import backgroundImage from "../../Images/Background - 1600X897.webp";
import backgroundImageMob from "../../Images/mobile banner.webp";
import leaf1 from "../../Images/third banner leaf-1.webp"
import leaf2 from "../../Images/third banner leaf-2.webp"
import leaf1mob from "../../Images/third banner mob Leaf - 1.webp"

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
      <div className={style.leaf1mob}>
        <img src={leaf1mob} alt="Luxury Bubble Basket " title="Luxury Bubble Basket " loading="lazy"  width="auto" height="auto" />
      </div>
      <div className={style.leaf1}>
        <img src={leaf1} alt="Luxury Bubble Basket " title="Luxury Bubble Basket " loading="lazy"  width="auto" height="auto" />
      </div>
      <div className={style.leaf2}>
        <img src={leaf2} alt="Luxury Bubble Basket " title="Luxury Bubble Basket " loading="lazy"  width="auto" height="auto" />
      </div>
      <div
        className={style.background}
        style={{ transform: `translateY(${scrollPosition * 0.2}px)` }} // Adjust the speed here
      >
        <img src={backgroundImage} alt="Luxury Bubble Basket " title="Luxury Bubble Basket " loading="lazy"  width="auto" height="auto"  className={style.bgImage} />
        <img src={backgroundImageMob} alt="Luxury Bubble Basket " title="Luxury Bubble Basket " loading="lazy"  width="auto" height="auto"  className={style.bgImagemob} />
      </div>
      <div
        className={style.content}
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
      
      <div
        className={style.contentmob}
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
