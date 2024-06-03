import React, { useState, useEffect } from "react";
import style from "./SectionSeventh.module.css";
import backgroundImage from "../../Images/medium-shot-smiley-man-drinking-wine.jpg";
import bulkOrderForm from "../../BulkOrderForm/bulkOrderForm.xlsx";

function SectionSeventh() {
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

  const downloadExcel = () => {
    // Path to the Excel file in your project folder
    const excelFilePath = bulkOrderForm;

    fetch(excelFilePath)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Luxury_Bubble_Basket.xlsx");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => {
        console.error("Error downloading the Excel file:", error);
      });
  };

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
          <h3>CORPORATE</h3>
          <h2> BULK ORDER</h2>
          <p>
            Elevate corporate connections with our curated gift baskets, perfect
            for bulk orders. Strengthen bonds through thoughtful gifting!
          </p>
        </div>
        <a href="/Product">
          <button className={style.btn}>SHOP NOW </button>
        </a>

        <button className={style.btn} onClick={downloadExcel}>
          DOWNLOAD FORM{" "}
        </button>
      </div>
      <div className={style.contentmob}>
        <div className={style.description_box}>
          <h3>CORPORATE</h3>
          <h2> BULK ORDER</h2>
          <p>
            Elevate corporate connections with our curated gift baskets, perfect
            for bulk orders. Strengthen bonds through thoughtful gifting!
          </p>
        </div>
        <a href="/Product">
          <button className={style.btn}>SHOP NOW </button>
        </a>

        <button className={style.btn} onClick={downloadExcel}>
          DOWNLOAD FORM{" "}
        </button>
      </div>
    </div>
  );
}

export default SectionSeventh;
