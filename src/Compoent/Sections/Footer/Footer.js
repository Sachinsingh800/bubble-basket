import React, { useState } from "react";
import style from "./Footer.module.css";
import CallIcon from "@mui/icons-material/Call";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../../Images/logo2.jpg";
import logo1 from "../../Images/visa.png";
import logo2 from "../../Images/master card.png";
import logo3 from "../../Images/paypal.png";
import logo4 from "../../Images/american express.png";
import logo5 from "../../Images/discover.png";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { sendSubscribtion } from "../../Apis/Apis";

function Footer() {

  return (
    <div className={style.main}>
      <div className={style.header}>
        <div className={style.left_box}>
          <span className={style.icon}>
            <div>
              <CallIcon className={style.instagramIcon} />
            </div>
          </span>
          <span className={style.no_code}>2 0 2 . 4 5 9 . 8 4 8 9</span>
        </div>
        <div className={style.icon_container}>
        <a target="_blank"  href="https://www.facebook.com/LuxuryBubbleBasket">
          <span className={style.icon}>
            <div>
              <FacebookRoundedIcon className={style.instagramIcon} />
            </div>
          </span>
          </a>
          <a target="_blank"  href="https://www.youtube.com/channel/UCOX_uZXsTjPdOSBV1ATdiFg">
          <span className={style.icon}>
            <div>
              <YouTubeIcon className={style.instagramIcon} />
            </div>
          </span>
          </a>
         <a target="_blank"  href="https://www.instagram.com/luxurybubblebasket/">
         <span className={style.icon}>
            <div>
              <InstagramIcon className={style.instagramIcon} />
            </div>
          </span>
          </a> 
          <a target="_blank"  href="https://www.linkedin.com/company/luxurybubblebasket/">
          <span className={style.icon}>
            <div>
              <LinkedInIcon className={style.instagramIcon} />
            </div>
          </span>
          </a>
          <a target="_blank"  href="https://x.com/LuxuryBubbleBsk">
          <span className={style.icon}>
            <div>
              <TwitterIcon className={style.instagramIcon} />
            </div>
          </span>
          </a>
          <a target="_blank"  href="https://in.pinterest.com/luxurybubblebasket/">
          <span className={style.icon}>
            <div>
              <PinterestIcon className={style.instagramIcon} />
            </div>
          </span>
          </a>
        </div>
      </div>
      <div className={style.img_box}>
        <img src={logo} alt="Luxury Bubble Basket Logo" title="Luxury Bubble Basket " loading="lazy"  width="auto" height="auto"   />
      </div>
      <div className={style.nav_bar}>
        <a href="/">
          <div className={style.opt}>HOME </div>
        </a>
        <a href="/Product">
          <div className={style.opt}>SHOP </div>
        </a>
        <a href="/Order-History">
          <div className={style.opt}>ORDERS </div>
        </a>
        <a href="/Contact-Us">
          <div className={style.opt}>CONTACT</div>
        </a>
        <a href="/About-Us">
          <div className={style.opt}>ABOUT</div>
        </a>
        <a href="/catalog">
          <div className={style.opt}>CATALOG</div>
        </a>
        <a href="/FAQ">
          <div className={style.opt} style={{ borderRight: "none" }}>
            FAQ'S{" "}
          </div>
        </a>
      </div>
      <br />
      <div className={style.paymet_conatainer}>
        <div className={style.payment_img_box}>
          <img src={logo1}  alt="visa" title="Luxury Bubble Basket " loading="lazy"  width="auto" height="auto"   />
        </div>
        <div className={style.payment_img_box}>
          <img src={logo2} alt="paypal"  title="Luxury Bubble Basket " loading="lazy"  width="auto" height="auto"   />
        </div>
        <div className={style.payment_img_box}>
          <img src={logo3} alt="paypal"  title="Luxury Bubble Basket " loading="lazy"  width="auto" height="auto"  />
        </div>
        <div className={style.payment_img_box}>
          <img src={logo4} alt="paypal"  title="Luxury Bubble Basket " loading="lazy"  width="auto" height="auto"  />
        </div>
        <div className={style.payment_img_box}>
          <img src={logo5} alt="paypal"  title="Luxury Bubble Basket " loading="lazy"  width="auto" height="auto"   />
        </div>
      </div>
      <div className={style.desc_box}>
        <h6>Copyright@2024 , Luxury Bubble Basket , All Rights Reserved .</h6>
        <p>
          You must be at least 21 years of age to purchase wine or spirits. By
          placing an order through our website, you are representing yourself to
          us as at least 21 years of age. We reserve the right to ask for proof
          of identity before processing an order. An adult (over the age of 21)
          signature with proof of age verification is required at the time of
          delivery
        </p>
      </div>
    </div>
  );
}

export default Footer;
