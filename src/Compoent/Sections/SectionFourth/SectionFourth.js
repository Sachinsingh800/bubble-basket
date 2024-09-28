import React, { useEffect, useState } from "react";
import style from "./SectionFourth.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AlertDialogSlide from "../../DailLogBox/AlertDialogSlide";
import { updateCart } from "../../Recoil/Recoil";
import { useRecoilState } from "recoil";
import {
  AddtoCart,
  getAllCategory,
  getAllProduct,
  getTop1Category,
} from "../../Apis/Apis";
import leftbottomimage from "../../Images/Grape.webp";
import righttopimage from "../../Images/Leaf 1.webp";
import axios from "axios";

function SectionFourth() {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useRecoilState(updateCart);
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [top4Category, setTop4Category] = useState([]);
  const [top5Category, setTop5Category] = useState([]);

  useEffect(() => {
    handleAllCategory();
    handleParticularCategory();
  }, []);

  const handleAllCategory = async () => {
    try {
      const response = await getAllCategory();
      setProductData(response?.data?.slice(3, 5));
    } catch (error) {
      console.error("Error in handleAllCategory function:", error);
    }
  };

  const handleParticularCategory = async () => {
    try {
      const response4 = await getTop1Category("top4");
      const response5 = await getTop1Category("top5");
      setTop4Category(response4.data[0]);
      setTop5Category(response5.data[0]);
    } catch (error) {
      console.error("Error in handleAllCategory function:", error);
    }
  };

  useEffect(() => {
    const cartdata = JSON.parse(localStorage.getItem("cartData"));
    setData(cartdata || []); // Initialize data with an empty array if cartdata is null or undefined
  }, [update]);


  const  formatTitleForUrl = (input) => {
    // Replace spaces and %20 with -
    return input
      .replace(/%20/g, "-") // Convert encoded spaces
      .replace(/\s+/g, "-") // Convert regular spaces
      .replace(/:/g, "") // Remove colons
      .toLowerCase();  
  };

  return (
    <div className={style.main}>
      <div className={style.left_bottom_design}>
        <img src={leftbottomimage}           alt="Luxury Bubble Basket"
          title="Luxury Bubble Basket"
          loading="lazy"
          width="auto"
          height="auto"/>
      </div>
      <div className={style.right_top_design}>
        <img src={righttopimage}          alt="Luxury Bubble Basket"
          title="Luxury Bubble Basket"
          loading="lazy"
          width="auto"
          height="auto" />
      </div>
      {loading && <p>Loading..</p>}
      <div className={style.heading_box}>
        <h2>BOTTLES THAT WOW</h2>
      </div>
      <div className={style.card_box}>
        <div
          className={style.inner_container}
          onClick={() =>
            (window.location.href = `/${formatTitleForUrl(top4Category?.categoryName)}`)
          }
        >
          <div className={style.img_box}>
            <img
              src={top4Category?.categoryImg?.url}
              alt={top4Category?.categoryName}
              title={top4Category?.content}
              loading="lazy"
              width="auto"
              height="auto"
            />
          </div>
          <div className={style.text_box}>
            <h6>{top4Category?.categoryName}</h6>
            <p>BOTTLES</p>
          </div>
        </div>

        <div
          className={style.inner_container}
          onClick={() =>
            (window.location.href = `/${formatTitleForUrl(top5Category?.categoryName)}`)
          }
        >
          <div className={style.img_box}>
            <img
              src={top5Category?.categoryImg?.url}
              alt={top5Category?.categoryName}
              title={top5Category?.content}
              loading="lazy"
              width="auto"
              height="auto"
            />
          </div>
          <div className={style.text_box}>
            <h6>{top5Category?.categoryName}</h6>
            <p>BOTTLES</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFourth;
