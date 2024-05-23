import React, { useState, useEffect } from "react";
import style from "./ProductSectionFirst.module.css";
import backgroundImage from "../../Images/banner-wine-festival-glass-wine-distillery-old-wooden-table-with-bunches.jpg";
import { getAllProduct } from "../../Apis/Apis";
import { useParams } from "react-router-dom";

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
      </div>
      <div
        className={style.content}
        style={{ transform: `translateY(-${scrollPosition * 0.4}px)` }} // Adjust the speed here
      >
        <div className={style.description_box}>
          <h2> {product?.category}</h2>
        </div>
      </div>
    </div>
  );
}

export default ProductSectionFirst;
