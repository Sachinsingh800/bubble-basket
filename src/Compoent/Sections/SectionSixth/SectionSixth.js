import React, { useEffect, useState } from "react";
import style from "./SectionSixth.module.css";
import { getAllCategory } from "../../Apis/Apis";
import axios from "axios";

function SectionSixth() {




const getAllCategory = async (e,title) => {
  e.preventDefault()
  window.location.href=`/Product/${title}`
};
  const collectionData = [
    {
      id: 1,
      title: "PRIDE MONTH",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quo voluptates iure eaque dolorum repudiand",
    },
    {
      id: 2,
      title: "FATHER’S DAY",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quo voluptates iure eaque dolorum repudiand",
    },
    {
      id: 3,
      title: "INDEPENDENCE DAY",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quo voluptates iure eaque dolorum repudiand",
    },
  ];

  const handleNavigate = () => {
    // window.location.href = "/ColumnPage";
  };

  return (
    <div className={style.main}>
      <div className={style.heading_box}>
        <p>
          <span />
          Explore Our Most Popular Gifts
          <span />
        </p>
        <h2>SHOP BY OCCASION</h2>
      </div>
      <div className={style.card_box}>
        {collectionData?.map((item, index) => (
          <div key={item.id} className={style.inner_container} onClick={(e)=>getAllCategory(e,item?.title)}>
            <div className={style.text_box} onClick={handleNavigate}>
              <h5>{item?.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionSixth;
