import React from 'react';
import style from "./SectionThird.module.css";
import textfile from "../../Images/text.png";
import backgroundImage from "../../Images/banner-wine-festival-glass-wine-distillery-old-wooden-table-with-bunches.jpg"; // Adjusted import

function SectionThird() {
  return (
    <div className={style.main}>
     
      <div className={style.background}>
      <img  src={backgroundImage} alt='bg' />
      </div>
      <div className={style.description_box}>
        <img src={textfile} alt='text' />
        <h2>E L E G A N T & U N I Q U E</h2>
      </div>
      <button className={style.btn}>DISCOVER  →</button>
    </div>
  );
}

export default SectionThird;
