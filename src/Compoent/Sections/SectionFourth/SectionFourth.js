import React, { useEffect, useState } from "react";
import style from "./SectionFourth.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AlertDialogSlide from "../../DailLogBox/AlertDialogSlide";
import { updateCart } from "../../Recoil/Recoil";
import { useRecoilState } from "recoil";
import { AddtoCart, getAllProduct } from "../../Apis/Apis";

function SectionFourth() {
  const [data, setData] = useState([]);
  const [showCartTick, setShowCartTick] = useState(false);
  const [showLikeTick, setShowLikeTick] = useState(false);
  const [update, setUpdate] = useRecoilState(updateCart);
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleProductData();
  }, []);

  const handleProductData = async () => {
    setLoading(true);
    try {
      const response = await getAllProduct();

      if (response.status) {
        // Show only the first three products
        setProductData(response.data.slice(0, 2));
        setLoading(false);
      }
    } catch (error) {
      console.error("Error getting product data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const cartdata = JSON.parse(localStorage.getItem("cartData"));
    setData(cartdata || []); // Initialize data with an empty array if cartdata is null or undefined
  }, [update]);

  const handleMouseEnter = (index) => {
    const optionsBox = document.getElementById(`optionsBox_${index}`);
    if (optionsBox) {
      optionsBox.style.opacity = 1;
    }
  };

  const handleMouseLeave = (index) => {
    const optionsBox = document.getElementById(`optionsBox_${index}`);
    if (optionsBox) {
      optionsBox.style.opacity = 0;
    }
  };

  const handleAddToCartInBeckend = async (productId) => {
    try {
      const response = await AddtoCart(productId);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = (item) => {
    const loginStatus=JSON.parse(localStorage.getItem("isLoggedIn"))
    if(loginStatus){
      handleAddToCartInBeckend(item._id)
    }
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const existingProductIndex = cartData.findIndex((product) => product._id === item._id);
  
    if (existingProductIndex !== -1) {
      // If the product already exists in the cart, update its quantity
      const updatedCartData = [...cartData];
      updatedCartData[existingProductIndex].quantity += 1;
      localStorage.setItem("cartData", JSON.stringify(updatedCartData));
    } else {
      // If the product doesn't exist in the cart, add it with default quantity as 1
      const newItem = { ...item, quantity: 1 };
      localStorage.setItem("cartData", JSON.stringify([...cartData, newItem]));
    }
  
    // Trigger UI update
    setUpdate(update + 1);
  };

  const handleAddToLike = (item) => {
    setShowLikeTick(true);
  };

  function renderHTML(htmlString) {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  }

  return (
    <div className={style.main}>
              {loading && <p>Loading..</p>}
      <div className={style.heading_box}>
        <h2>BOTTLES THAT WOW</h2>
      </div>
      <div className={style.card_box}>
        {productData.map((item, index) => (
          <div
            key={item.id}
            className={style.inner_container}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className={style.img_box}>
              <img src={item.productImg[0].url} alt={item.title} />
            </div>
            <div className={style.text_box}>
              <h5>{item?.title}</h5>
              <p>{item?.category}</p>
            </div>
            <div
              className={style.optionsBox}
              id={`optionsBox_${index}`}
              style={{ opacity: 0 }}
            >
              <div className={style.options}>
                <button
                  className={style.optionButton1}
                  onClick={() => handleAddToCart(item)}
                >
                  {showCartTick && <span className={style.tick}>✓</span>}
                  <ShoppingCartIcon />
                </button>
                {/* <button
                  className={style.optionButton2}
                  onClick={() => handleAddToLike(item)}
                >
                  {showLikeTick && <span className={style.tick}>✓</span>}
                  <FavoriteBorderIcon />
                </button> */}
                <span className={style.optionButton3}>
                  <AlertDialogSlide cartdata={item} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionFourth;
