import React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import VisibilityIcon from "@mui/icons-material/Visibility";
import style from "./AlertDialogSlide.module.css";
import product from "../Images/Moet & Chandon Imperial Brut Champagne With 8pc 1.png";
import CloseIcon from "@mui/icons-material/Close";
import { useRecoilState } from "recoil";
import { cartData } from "../Recoil/Recoil";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ cartdata }) {
  const [open, setOpen] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);
  const [data, setData] = useRecoilState(cartData);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    const itemToAdd = { ...cartdata, quantity: quantity };
    setData([...data, itemToAdd]);
    localStorage.setItem("cartData", JSON.stringify([...data, itemToAdd]));
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button className={style.optionButton3} onClick={handleClickOpen}>
        <VisibilityIcon />
      </button>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className={style.dialog}
      >
        <button className={style.close_btn} onClick={handleClose}>
          <CloseIcon />
        </button>
        <div className={style.container}>
          <div className={style.left_box}>
            <div className={style.img_box}>
              <img src={cartdata.productImg} alt="product" />
            </div>
          </div>
          <div className={style.right_box}>
            <div className={style.des_box}>
              <h2>{cartdata.productName}</h2>
              <h6>${cartdata.price}</h6>
              <span>{cartdata.productDescription}</span>
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
