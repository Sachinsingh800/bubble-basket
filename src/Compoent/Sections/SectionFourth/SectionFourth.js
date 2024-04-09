import React from "react";
import style from "./SectionFourth.module.css";
import product1 from "../../Images/26 pc.png";
import product2 from "../../Images/Moet & Chandon Imperial Brut Champagne With 8pc 1.png";
import product3 from "../../Images/dom perignon lady gaga rose.png";
import textfile from "../../Images/text2.png";

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

  return (
    <div className={style.main}>
      <div className={style.heading_box}>
        <h2>BOTTLES THAT WOW</h2>
      </div>
      <div className={style.card_box}>
        {collectionData.map((item, index) => (
          <div key={item.id} className={style.inner_container}>
            <div className={style.img_box}>
              <img src={item.img} alt={item.title} />
            </div>
            <div className={style.text_box}>
              <h5>{item.title}</h5>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionFourth;
