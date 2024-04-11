import React from "react";
import style from "./SectionFourth.module.css";
import product1 from "../../Images/26 pc.png";
import product2 from "../../Images/Moet & Chandon Imperial Brut Champagne With 8pc 1.png";
import product3 from "../../Images/dom perignon lady gaga rose.png";
import textfile from "../../Images/text2.png";
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function SectionFourth() {
  const collectionData = [
    {
      id: 1,
      title: "HAND - PAINTED",
      text: "BOTTLES",
      img: product3,
    },
    {
      id: 2,
      title: "PERSONALISED",
      text: "BOTTLES",
      img: product2,
    },
  ];

  const handleMouseEnter = (index) => {
    const optionsBox = document.getElementById(`optionsBox_${index}`);
    if (optionsBox) {
      optionsBox.style.opacity = 1;
    }
  };

  const handleMouseLeave = (index) => {
    const optionsBox = document.getElementById(`optionsBox_${index}`);
    if (optionsBox) {
      optionsBox.style.opacity = 0;
    }
  };

  return (
    <div className={style.main}>
      <div className={style.heading_box}>
        <h2>BOTTLES THAT WOW</h2>
      </div>
      <div className={style.card_box}>
        {collectionData.map((item, index) => (
          <div
            key={item.id}
            className={style.inner_container}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className={style.img_box}>
              <img src={item.img} alt={item.title} />
            </div>
            <div className={style.text_box}>
              <h5>{item.title}</h5>
              <p>{item.text}</p>
            </div>
            <div
              className={style.optionsBox}
              id={`optionsBox_${index}`}
              style={{ opacity: 0 }}
            >
              <div className={style.options}>
                <button className={style.optionButton1}><ShoppingCartIcon /></button>
                <button className={style.optionButton2}><FavoriteBorderIcon/></button>
                <button className={style.optionButton3}><VisibilityIcon  /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionFourth;
