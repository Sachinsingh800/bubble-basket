import React from "react";
import style from "./SectionThird.module.css";
import textfile from "../../Images/text.png";
import backgroundImage from "../../Images/banner-wine-festival-glass-wine-distillery-old-wooden-table-with-bunches.jpg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function SectionThird() {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
    <div className={style.main}>
      <Parallax pages={1.3} className={style.Parallax}>
        <ParallaxLayer offset={0} speed={0.8} style={{ ...alignCenter, justifyContent: 'center' }} >
          <div className={style.background}>
            <img src={backgroundImage} alt="bg" className={style.bgImage} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <div className={style.content}>
            <div className={style.description_box}>
              <img src={textfile} alt="text" />
              <h2>E L E G A N T &amp; U N I Q U E</h2>
            </div>
            <button className={style.btn}>DISCOVER →</button>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default SectionThird;
