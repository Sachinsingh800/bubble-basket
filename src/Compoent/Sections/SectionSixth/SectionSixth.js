import React from "react";
import style from "./SectionSixth.module.css";
import product1 from "../../Images/26 pc.png";
import product2 from "../../Images/Moet & Chandon Imperial Brut Champagne With 8pc 1.png";
import product3 from "../../Images/dom perignon lady gaga rose.png";
import textfile from "../../Images/text2.png";

function SectionSixth() {
  const collectionData = [
    {
      id: 1,
      title: "EASTER",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quo voluptates iure eaque dolorum repudiand",
    },
    {
      id: 2,
      title: "MOTHER’S DAY",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quo voluptates iure eaque dolorum repudiand",
    },
    {
      id: 3,
      title: "FATHER’S DAY",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quo voluptates iure eaque dolorum repudiand",
    },
  ];

  const handleNavigate=()=>{
    window.location.href="/ColumnPage"
  }

  return (
    <div className={style.main}>
      <div className={style.heading_box}>
        <p>
          <hr />
          Explore Our Most Popular Gifts
          <hr />
        </p>
        <h2>SHOP BY OCCASION</h2>
      </div>
      <div className={style.card_box}>
        {collectionData.map((item, index) => (
          <div key={item.id} className={style.inner_container}>
      
              <div className={style.text_box} onClick={handleNavigate}>
                <h5>{item.title}</h5>
              </div>
      
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionSixth;
