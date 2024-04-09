import React from "react";
import style from "./Footer.module.css";
import CallIcon from "@mui/icons-material/Call";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../../Images/logo.jpg";

function Footer() {
  return (
    <div className={style.main}>
      <div className={style.header}>
        <div>
          <span>
            <CallIcon />
          </span>
          <span>+91 9876543210</span>
        </div>
        <div className={style.icon_container}>
          <span>
            <FacebookRoundedIcon />
          </span>
          <span>
            <InstagramIcon />
          </span>
          <span>
            <LinkedInIcon />
          </span>
          <span>
            <TwitterIcon />
          </span>
        </div>
      </div>
      <div className={style.img_box}>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <p>HOME</p>
        <p>PAGE</p>
        <p>SHOP</p>
        <p>ORDERS</p>
        <p>CONTACT</p>
        <p>ABOUT</p>
        <p>FAQ'S</p>
      </div>
      <div className={style.input_box}>
        <input placeholder="YOUR MAIL" />
        <button>SUBMIT →</button>
      </div>
      <div className={style.paymet_conatainer}>
        <div className={style.payment_img_box}></div>
        <div className={style.payment_img_box}></div>
        <div className={style.payment_img_box}></div>
        <div className={style.payment_img_box}></div>
        <div className={style.payment_img_box}></div>
      </div>
      <div className={style.desc_box}>
        <h6>
          C o p y r i g h t @ 2 0 1 4 , d c w i n e a n d s p i r i t s , A l l
          R i g h t s R e s e r v e d .
        </h6>
        <p>
          You must be at least 21 years of age to purchase wine or spirits. By
          placing an order through our website, you are representing yourself to
          us as at least 21 years of age. We reserve the right to ask for proof
          of identity before processing an order. An adult (over the age of 21)
          signature with proof of age verication is required at the time of
          delivery
        </p>
      </div>
    </div>
  );
}

export default Footer;
