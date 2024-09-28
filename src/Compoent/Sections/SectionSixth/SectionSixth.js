import React, { useEffect, useState } from "react";
import style from "./SectionSixth.module.css";
import { getAllCategory } from "../../Apis/Apis";
import axios from "axios";

function SectionSixth() {



  const  formatTitleForUrl = (input) => {
    // Replace spaces and %20 with -
    return input
      .replace(/%20/g, "-") // Convert encoded spaces
      .replace(/\s+/g, "-") // Convert regular spaces
      .replace(/:/g, "") // Remove colons
      .toLowerCase();  
  };
  
const getAllCategory = async (e,title) => {
  e.preventDefault()
  window.location.href=`/${formatTitleForUrl(title)}`
};
  const collectionData = [
    {
      id: 1,
      title: "TIFFANY GIFT BOX",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quo voluptates iure eaque dolorum repudiand",
      link:"TIFFANY WINE"
    },
    {
      id: 2,
      title: "HOLIDAY GIFT BOX",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quo voluptates iure eaque dolorum repudiand",
      link:"WINE"
    },
    {
      id: 3,
      title:"NEW YEAR GIFT BOX",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quo voluptates iure eaque dolorum repudiand",
       link:"CHAMPAGNE"
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
          <div key={item.id} className={style.inner_container} onClick={(e)=>getAllCategory(e,item?.link)}>
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
