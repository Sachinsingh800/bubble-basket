import React from "react";
import style from "./SectionSeventh.module.css";
import textfile from "../../Images/text.png";
import backgroundImage from "../../Images/medium-shot-smiley-man-drinking-wine.jpg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function SectionSeventh() {
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <div className={style.main}>
      <Parallax
        pages={1.5}
        className={style.Parallax}
        style={{ ...alignCenter, justifyContent: "center" }}
      >
        <ParallaxLayer
          offset={0.5}
          speed={0.8}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div className={style.background}>
            <img src={backgroundImage} alt="bg" className={style.bgImage} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.5}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <div className={style.content}>
            <div className={style.description_box}>
              <h3>CORPORATE</h3>
              <h2> BULK ORDER</h2>
              <p>
                Elevate corporate connections with our curated gift baskets,
                perfect for bulk orders. Strengthen bonds through thoughtful
                gifting!
              </p>
            </div>
            <button className={style.btn}>SHOP NOW </button>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default SectionSeventh;
