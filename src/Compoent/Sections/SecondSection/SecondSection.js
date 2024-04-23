import React, { useEffect, useState } from "react";
import style from "./SecondSection.module.css";
import product1 from "../../Images/26 pc.png";
import product2 from "../../Images/Moet & Chandon Imperial Brut Champagne With 8pc 1.png";
import product3 from "../../Images/dom perignon lady gaga rose.png";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { nanoid } from "nanoid";
import { updateCart } from "../../Recoil/Recoil";
import { useRecoilState } from "recoil";

function SecondSection() {
  const [openPopoverId, setOpenPopoverId] = useState(null);
  const [update, setUpdate] = useRecoilState(updateCart);
  const [showTick, setShowTick] = useState(null);

  const collectionData = [
    {
      id: nanoid(),
      productCategory: "HAND - PAINTED",
      productName: "CHAMPAGNE",
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quo voluptates iure eaque dolorum repudiand",
      productImg: product3,
      productRating: 4,
      price: 79.0,
      quantity: 1,
      subTotal: 79.0,
    },
    {
      id: nanoid(),
      productCategory: "PERSONALISED",
      productName: "WINE",
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quo voluptates iure eaque dolorum repudiand",
      productImg: product2,
      productRating: 4,
      price: 100.0,
      quantity: 1,
      subTotal: 100.0,
    },
    {
      id: nanoid(),
      productCategory: "PERSONALISED",
      productName: "CHOCOLATE",
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quo voluptates iure eaque dolorum repudiand",
      productImg: product1,
      productRating: 4,
      price: 100.0,
      quantity: 1,
      subTotal: 100.0,
    },
  ];

  const handleOpenPopover = (id) => {
    setOpenPopoverId(id);
  };

  const handleClosePopover = () => {
    setOpenPopoverId(null);
  };

  const handleAddToCart = (item) => {
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    localStorage.setItem("cartData", JSON.stringify([...cartData, item]));
    setUpdate(update + 1);
    setShowTick(item.id);
  };

  return (
    <div className={style.main}>
      <div className={style.heading_box}>
        <p>
          <hr />
          Gift Basket
          <hr />
        </p>
        <h2>COLLECTION</h2>
      </div>
      <div className={style.card_box}>
        {collectionData.map((item) => (
          <div key={item.id} className={style.inner_container}>
            <button
              onClick={() => handleAddToCart(item)}
              className={style.addBtn}
            >
              {showTick === item.id ? "✓" : <AddIcon />}
            </button>

            <div className={style.img_box}>
              <img src={item.productImg} alt={item.title} />
            </div>
            <div className={style.text_box}>
              <h5>{item.productName}</h5>
              <p>{item.productDescription}</p>
            </div>
          </div>
        ))}
      </div>
      <a href="/ColumnPage">
        <button className={style.viewAllbtn}>VIEW ALL →</button>
      </a>
    </div>
  );
}

export default SecondSection;
