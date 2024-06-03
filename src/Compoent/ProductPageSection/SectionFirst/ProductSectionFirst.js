import React, { useState, useEffect } from "react";
import style from "./ProductSectionFirst.module.css";
import backgroundImage from "../../Images/single product page1.jpg";
import backgroundImageMob from "../../Images/single product page mob 1.jpg";
import { useParams } from "react-router-dom";
import { getAllProduct } from "../../Apis/Apis";

function ProductSectionFirst() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [productData, setProductData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(()=>{
    handleProductData()
  },[])

  const handleProductData = async () => {
    try {
      const response = await getAllProduct();
      // Show only the first three products
      setProductData(response.data);
    } catch (error) {
      console.error("Error getting product data:", error);
    }
  };
  const product = productData.find((item) => item._id.toString() === id);

  return (
    <div className={style.main}>
      <div
        className={style.background}
        style={{ transform: `translateY(${scrollPosition * 0.2}px)` }} // Adjust the speed here
      >
        <img src={backgroundImage} alt="bg" className={style.bgImage} />
        <img src={backgroundImageMob} alt="bg" className={style.bgImagemob} />
      </div>
      <div
        className={style.content}
        style={{ transform: `translateY(-${scrollPosition * 0.4}px)` }} // Adjust the speed here
      >
        <div className={style.description_box}>
          <h2> {product?.category}</h2>
        </div>
      </div>
      
      <div
        className={style.contentmob}
      >
        <div className={style.description_box}>
          <h2> {product?.category}</h2>
        </div>
      </div>
    </div>
  );
}

export default ProductSectionFirst;

