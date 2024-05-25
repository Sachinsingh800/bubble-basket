import React, { useEffect, useState } from "react";
import style from "./SecondSection.module.css";
import AddIcon from "@mui/icons-material/Add";
import { updateCart } from "../../Recoil/Recoil";
import { useRecoilState } from "recoil";
import { AddtoCart, getAllCategory, getAllProduct, getTop1Category } from "../../Apis/Apis";
import axios from "axios";

function SecondSection() {
  const [update, setUpdate] = useRecoilState(updateCart);
  const [loading, setLoading] = useState(false);
  const [showTick, setShowTick] = useState(null);
  const [productData, setProductData] = useState([]);
  const [top1Category,setTop1Category] = useState([])
  const [top2Category,setTop2Category] = useState([])
  const [top3Category,setTop3Category] = useState([])


  console.log(top1Category
    ,"data top")

  useEffect(() => {
    handleAllCategory()
    handleParticularCategory()
}, []);

const handleAllCategory = async () => {
  try {
    const response = await getAllCategory();
    setProductData(response?.data?.slice(0,3));
  } catch (error) {
    console.error("Error in handleAllCategory function:", error);
  }
};
const handleParticularCategory = async () => {
  try {
    const response1 = await getTop1Category("top1");
    const response2 = await getTop1Category("top2");
    const response3 = await getTop1Category("top3");
    console.log(response2,"and",response3)
    setTop1Category(response1.data[0]);
    setTop2Category(response2.data[0]);
    setTop3Category(response3.data[0]);
    
  } catch (error) {
    console.error("Error in handleAllCategory function:", error);
  }
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
   
          <div  className={style.inner_container}      onClick={() =>
            (window.location.href = `/${top1Category?.categoryName}`)
          }>
            <button
              // onClick={() => handleAddToCart(top1Category)}
              className={style.addBtn}
            >
              {showTick === top1Category?._id ? "✓" : <AddIcon />}
            </button>

            <div className={style.img_box}>
              <img src={top1Category?.categoryImg?.url} alt={top1Category?.title} />
            </div>
            <div className={style.text_box}>
              <h5>{top1Category?.categoryName}</h5>
              <p>{top1Category?.content}</p>
            </div>
          </div>



          
          <div  className={style.inner_container}      onClick={() =>
            (window.location.href = `/${top2Category?.categoryName}`)
          }>
            <button
              // onClick={() => handleAddToCart(top2Category)}
              className={style.addBtn}
            >
              {showTick === top2Category?._id ? "✓" : <AddIcon />}
            </button>

            <div className={style.img_box}>
              <img src={top2Category?.categoryImg?.url} alt={top2Category?.title} />
            </div>
            <div className={style.text_box}>
              <h5>{top2Category?.categoryName}</h5>
              <p>{top2Category?.content}</p>
            </div>
          </div>




          <div  className={style.inner_container}      onClick={() =>
            (window.location.href = `/${top3Category?.categoryName}`)
          }>
            <button
              // onClick={() => handleAddToCart(top3Category)}
              className={style.addBtn}
            >
              {showTick === top3Category?._id ? "✓" : <AddIcon />}
            </button>

            <div className={style.img_box}>
              <img src={top3Category?.categoryImg?.url} alt={top3Category?.title} />
            </div>
            <div className={style.text_box}>
              <h5>{top3Category?.categoryName}</h5>
              <p>{top3Category?.content}</p>
            </div>
          </div>

      </div>
      <a href="/Product">
        <button className={style.viewAllbtn}>VIEW ALL  ⟶</button>
      </a>
    </div>
  );
}

export default SecondSection;
