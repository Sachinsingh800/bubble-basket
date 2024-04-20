import React, { useState } from "react";
import style from "./SectionFourth.module.css";
import product1 from "../../Images/26 pc.png";
import product2 from "../../Images/Moet & Chandon Imperial Brut Champagne With 8pc 1.png";
import product3 from "../../Images/dom perignon lady gaga rose.png";
import textfile from "../../Images/text2.png";
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AlertDialogSlide from "../../DailLogBox/AlertDialogSlide";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { cartData } from "../../Recoil/Recoil";
import { useRecoilState } from "recoil";

function SectionFourth() {
  const [data, setData] = useRecoilState(cartData);
  const [showCartTick, setShowCartTick] = useState(false);
  const [showLikeTick, setShowLikeTick] = useState(false);

  const collectionData = [
    {
      id: nanoid(),
      productCategory: "HAND - PAINTED",
      productName: "HAND - PAINTED",
      productDescription: "BOTTLES",
      productImg: product3,
      productRating: 4,
      price: 79.00,
      quantity: 1,
      subTotal: 79.00,
    },
    {
      id: nanoid(),
      productCategory: "PERSONALISED",
      productName: "PERSONALISED",
      productDescription: "BOTTLES",
      productImg: product2,
      productRating: 4,
      price: 100.00,
      quantity: 1,
      subTotal: 100.00,
    },
  ];

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

  const handleAddToCart = (item) => {
    setShowCartTick(true);
    setData([...data, item]); // Add the clicked item to the cartData
  };

  const handleAddToLike = (item) => {
    setShowLikeTick(true);
  };

  return (
    <div className={style.main}>
      <div className={style.heading_box}>
        <h2>BOTTLES THAT WOW</h2>
      </div>
      <div className={style.card_box}>
        {collectionData.map((item, index) => (
          <div
            key={item.id}
            className={style.inner_container}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className={style.img_box}>
              <img src={item.productImg} alt={item.title} />
            </div>
            <div className={style.text_box}>
              <h5>{item.productName}</h5>
              <p>{item.productDescription}</p>
            </div>
            <div
              className={style.optionsBox}
              id={`optionsBox_${index}`}
              style={{ opacity: 0 }}
            >
              <div className={style.options}>
                <button className={style.optionButton1} onClick={() => handleAddToCart(item)}>
                  {showCartTick  && <span className={style.tick}>✓</span>}
                  <ShoppingCartIcon />
                </button>
                <button className={style.optionButton2} onClick={() => handleAddToLike(item)}>
                  {showLikeTick  && <span className={style.tick}>✓</span>}
                  <FavoriteBorderIcon/>
                </button>
                <span className={style.optionButton3}><AlertDialogSlide /></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionFourth;
