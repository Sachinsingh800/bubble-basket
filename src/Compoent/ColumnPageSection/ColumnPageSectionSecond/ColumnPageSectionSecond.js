import React, { useEffect, useState } from "react";
import style from "./ColumnPageSectionSecond.module.css";
import product1 from "../../Images/dom perignon lady gaga rose.png";
import { getAllProduct } from "../../Apis/Apis";

function ColumnPageSectionSecond() {
  const [productData, setProductData] = useState([]);
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    handleProductData();
  }, []);

  const handleProductData = async () => {
    setLoading(true)
    try {
      const response = await getAllProduct();

      if (response.status) {
        // Show only the first three products
        setProductData(response.data.slice(0, 8)); 
        setLoading(false)
      }
    } catch (error) {
      console.error("Error getting product data:", error);
      setLoading(false)
    }
  };



  const  handleNaviagte=(id)=>{
    window.location.href=`/ProductPage/${id}`
  }
  return (
    <div className={style.main}>
      <div className={style.additional_box}>
        <div className={style.inner_container1} onClick={()=>handleNaviagte(productData[0]._id)}>
          <span className={style.offer_box}>new</span>
          <div className={style.add_box_img}>
            <img src={productData[0]?.productImg[0]?.url} alt="product" />
          </div>
          <span>{productData[0]?.category}</span>
          <span>{productData[0]?.title}</span>
          <p>★★★★✰</p>
          <h6>
            <strong>${productData[0]?.price}</strong>
          </h6>
        </div>
        <div className={style.inner_container} onClick={()=>handleNaviagte(productData[1]._id)}>
          <span className={style.offer_box}>new</span>
          <div className={style.add_box_img}>
            <img src={productData[1]?.productImg[0]?.url} alt="product" />
          </div>
          <span>{productData[1]?.category}</span>
          <span>{productData[1]?.title}</span>
          <p>★★★★✰</p>
          <h6>
            <strong>${productData[1]?.price}</strong>
          </h6>
        </div>
        <div className={style.inner_container} onClick={()=>handleNaviagte(productData[2]._id)}>
          <span className={style.offer_box}>new</span>
          <div className={style.add_box_img}>
            <img src={productData[2]?.productImg[0]?.url} alt="product" />
          </div>
          <span>{productData[2]?.category}</span>
          <span>{productData[2]?.title}</span>
          <p>★★★★✰</p>
          <h6>
            <strong>${productData[2]?.price}</strong>
          </h6>
        </div>
        <div className={style.inner_container} onClick={()=>handleNaviagte(productData[3]._id)}>
        <span className={style.offer_box}>new</span>
          <div className={style.add_box_img}>
            <img src={productData[3]?.productImg[0]?.url} alt="product" />
          </div>
          <span>{productData[3]?.category}</span>
          <span>{productData[3]?.title}</span>
          <p>★★★★✰</p>
          <h6>
            <strong>${productData[3]?.price}</strong>
          </h6>
        </div>
        <div className={style.inner_container1} onClick={()=>handleNaviagte(productData[4]._id)}>
        <span className={style.offer_box}>new</span>
          <div className={style.add_box_img}>
            <img src={productData[4]?.productImg[0]?.url} alt="product" />
          </div>
          <span>{productData[4]?.category}</span>
          <span>{productData[4]?.title}</span>
          <p>★★★★✰</p>
          <h6>
            <strong>${productData[4]?.price}</strong>
          </h6>
        </div>
        <div className={style.inner_container} onClick={()=>handleNaviagte(productData[5]._id)}>
        <span className={style.offer_box}>new</span>
          <div className={style.add_box_img}>
            <img src={productData[5]?.productImg[0]?.url} alt="product" />
          </div>
          <span>{productData[5]?.category}</span>
          <span>{productData[5]?.title}</span>
          <p>★★★★✰</p>
          <h6>
            <strong>${productData[5]?.price}</strong>
          </h6>
        </div>
        <div className={style.inner_container} onClick={()=>handleNaviagte(productData[6]._id)}>
        <span className={style.offer_box}>new</span>
          <div className={style.add_box_img}>
            <img src={productData[6]?.productImg[0]?.url} alt="product" />
          </div>
          <span>{productData[6]?.category}</span>
          <span>{productData[6]?.title}</span>
          <p>★★★★✰</p>
          <h6>
            <strong>${productData[6]?.price}</strong>
          </h6>
        </div>
        <div className={style.inner_container} onClick={()=>handleNaviagte(productData[7]._id)}>
        <span className={style.offer_box}>new</span>
          <div className={style.add_box_img}>
            <img src={productData[7]?.productImg[0]?.url} alt="product" />
          </div>
          <span>{productData[7]?.category}</span>
          <span>{productData[7]?.title}</span>
          <p>★★★★✰</p>
          <h6>
            <strong>${productData[7]?.price}</strong>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default ColumnPageSectionSecond;
