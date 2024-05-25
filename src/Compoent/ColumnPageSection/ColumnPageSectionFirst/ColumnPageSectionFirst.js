import React, { useState, useEffect } from "react";
import style from "./ColumnPageSectionFirst.module.css";
import backgroundImage from "../../Images/bottle-wine-glasses-corkscrew-set-evening.jpg";
import { useParams } from "react-router-dom";


function ColumnPageSectionFirst() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { category } = useParams();


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
          <h2>{category}</h2>
        </div>
      </div>
    </div>
  );
}

export default ColumnPageSectionFirst;
