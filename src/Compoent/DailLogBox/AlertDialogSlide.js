import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import VisibilityIcon from "@mui/icons-material/Visibility";
import style from "./AlertDialogSlide.module.css";
import product from "../Images/Moet & Chandon Imperial Brut Champagne With 8pc 1.png";
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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
        <button className={style.close_btn} onClick={handleClose}><CloseIcon /></button>
        <div className={style.container}>
            <div className={style.left_box}>
            <div className={style.img_box}>
            <img src={product} alt="product" />
          </div>
            </div>
           <div className={style.right_box}>
           <div className={style.des_box}>
            <h2>THREE BOTTLE PACK</h2>
            <h6>$65.00</h6>
            <span>
              Te dicunt apeirian sit, verear noluisse an ius. Dictas feugait at
              pro, saepe im officiis vel ex, sit eu dicit simul quando in audire
              assueverit eum. Eu sedem copiosae consetetur, eu errem dolore
              virtute nec.
            </span>
            <div className={style.input_box}>
              <input type="number" value={1} />
              <button>ADD TO CART →</button>
            </div>
          </div>
           </div>
        
        </div>
      </Dialog>
    </React.Fragment>
  );
}
