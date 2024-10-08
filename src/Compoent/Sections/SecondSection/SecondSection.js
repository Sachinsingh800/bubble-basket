import React, { useEffect, useState } from "react";
import style from "./SecondSection.module.css";
import AddIcon from "@mui/icons-material/Add";
import { updateCart } from "../../Recoil/Recoil";
import { useRecoilState } from "recoil";
import {
  AddtoCart,
  getAllCategory,
  getAllProduct,
  getTop1Category,
} from "../../Apis/Apis";
import axios from "axios";

function SecondSection() {
  const [update, setUpdate] = useRecoilState(updateCart);
  const [loading, setLoading] = useState(false);
  const [showTick, setShowTick] = useState(null);
  const [productData, setProductData] = useState([]);
  const [top1Category, setTop1Category] = useState([]);
  const [top2Category, setTop2Category] = useState([]);
  const [top3Category, setTop3Category] = useState([]);

  useEffect(() => {
    handleAllCategory();
    handleParticularCategory();
  }, []);

  const handleAllCategory = async () => {
    try {
      const response = await getAllCategory();
      setProductData(response?.data?.slice(0, 3));
    } catch (error) {
      console.error("Error in handleAllCategory function:", error);
    }
  };
  const handleParticularCategory = async () => {
    try {
      const response1 = await getTop1Category("top1");
      const response2 = await getTop1Category("top2");
      const response3 = await getTop1Category("top3");
      setTop1Category(response1.data[0]);
      setTop2Category(response2.data[0]);
      setTop3Category(response3.data[0]);
    } catch (error) {
      console.error("Error in handleAllCategory function:", error);
    }
  };


  const convertString = (input) => {
    // Replace spaces and %20 with -
    return input
      .replace(/%20/g, "-") // Convert encoded spaces
      .replace(/\s+/g, "-") // Convert regular spaces
      .replace(/:/g, "") // Remove colons
      .toLowerCase();  
  };

  return (
    <div className={style.main}>
      <div className={style.heading_box}>
        <p>
          <span />
          Gift Basket
          <span />
        </p>
        <h2>COLLECTION</h2>
      </div>
      <div className={style.card_box}>
        {loading && <p>Loading...</p>}

        <div
          className={style.inner_container}
          onClick={() =>
            (window.location.href = `/${convertString(top1Category?.categoryName)}`)
          }
        >
          <div className={style.add_btn_box}>
            <button className={style.addBtn}>
              {showTick === top1Category?._id ? "✓" : <AddIcon />}
            </button>
          </div>

          <div className={style.img_box}>
            <img
              src={top1Category?.categoryImg?.url}
              alt={top1Category?.categoryName}
              title={top1Category?.content}
              loading="lazy"
              width="auto"
              height="auto"
            />
          </div>
          <div className={style.text_box}>
            <h5>{top1Category?.categoryName}</h5>
            <p>{top1Category?.content}</p>
          </div>
        </div>

        <div
          className={style.inner_container}
          onClick={() =>
            (window.location.href = `/${convertString(top2Category?.categoryName)}`)
          }
        >
          <div className={style.add_btn_box}>
            <button className={style.addBtn}>
              {showTick === top2Category?._id ? "✓" : <AddIcon />}
            </button>
          </div>

          <div className={style.img_box}>
            <img
              src={top2Category?.categoryImg?.url}
              alt={top2Category?.categoryName}
              title={top2Category?.content}
              loading="lazy"
              width="auto"
              height="auto"
            />
          </div>
          <div className={style.text_box}>
            <h5>{top2Category?.categoryName}</h5>
            <p>{top2Category?.content}</p>
          </div>
        </div>

        <div
          className={style.inner_container}
          onClick={() =>
            (window.location.href = `/${convertString(top3Category?.categoryName)}`)
          }
        >
          <div className={style.add_btn_box}>
            <button className={style.addBtn}>
              {showTick === top3Category?._id ? "✓" : <AddIcon />}
            </button>
          </div>

          <div className={style.img_box}>
            <img
              src={top3Category?.categoryImg?.url}
              alt={top3Category?.categoryName}
              title={top3Category?.content}
              loading="lazy"
              width="auto"
              height="auto"
            />
          </div>
          <div className={style.text_box}>
            <h5>{top3Category?.categoryName}</h5>
            <p>{top3Category?.content}</p>
          </div>
        </div>
      </div>
      <a href="/Product">
        <button className={style.viewAllbtn}>VIEW ALL ⟶</button>
      </a>
    </div>
  );
}

export default SecondSection;
