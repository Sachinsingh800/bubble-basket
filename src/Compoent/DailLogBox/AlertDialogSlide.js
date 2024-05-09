import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import VisibilityIcon from "@mui/icons-material/Visibility";
import style from "./AlertDialogSlide.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { useRecoilState } from "recoil";
import { updateCart } from "../Recoil/Recoil";
import { AddtoCart } from "../Apis/Apis";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ cartdata }) {
  const [open, setOpen] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);
  const [update, setUpdate] = useRecoilState(updateCart);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCartInBeckend = async (productId) => {
    try {
      const response = await AddtoCart(productId);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = () => {
    const loginStatus=JSON.parse(localStorage.getItem("isLoggedIn"))
    if(loginStatus){
      handleAddToCartInBeckend(cartdata._id)
    }
    const itemToAdd = { ...cartdata, quantity: quantity };
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const existingProductIndex = cartData.findIndex((product) => product._id === itemToAdd._id);

    if (existingProductIndex !== -1) {
      // If the product already exists in the cart, update its quantity
      const updatedCartData = [...cartData];
      updatedCartData[existingProductIndex].quantity += quantity;
      localStorage.setItem("cartData", JSON.stringify(updatedCartData));
    } else {
      // If the product doesn't exist in the cart, add it with specified quantity
      localStorage.setItem("cartData", JSON.stringify([...cartData, itemToAdd]));
    }

    // Trigger UI update
    setUpdate(update + 1);
    setOpen(false);
  };

  function renderHTML(htmlString) {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  }

  return (
    <React.Fragment>
      <button className={style.optionButton3} onClick={() => setOpen(true)}>
        <VisibilityIcon />
      </button>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen(false)}
        aria-describedby="alert-dialog-slide-description"
        className={style.dialog}
      >
        <button className={style.close_btn} onClick={() => setOpen(false)}>
          <CloseIcon />
        </button>
        <div className={style.container}>
          <div className={style.left_box}>
            <div className={style.img_box}>
              <img src={cartdata.productImg[0].url} alt="product" />
            </div>
          </div>
          <div className={style.right_box}>
            <div className={style.des_box}>
              <h2>{cartdata?.title}</h2>
              <h6>${cartdata?.price}</h6>
              <span>{renderHTML(cartdata?.description)}</span>
              <div className={style.input_box}>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
                <button onClick={handleAddToCart}>ADD TO CART →</button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
