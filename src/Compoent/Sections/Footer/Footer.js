import React from "react";
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
          <span className={style.icon}>
            <div>
              <FacebookRoundedIcon className={style.instagramIcon} />
            </div>
          </span>
          <span className={style.icon}>
            <div>
              <YouTubeIcon className={style.instagramIcon} />
            </div>
          </span>
          <span className={style.icon}>
            <div>
              <InstagramIcon className={style.instagramIcon} />
            </div>
          </span>
          <span className={style.icon}>
            <div>
              <LinkedInIcon className={style.instagramIcon} />
            </div>
          </span>
          <span className={style.icon}>
            <div>
              <TwitterIcon className={style.instagramIcon} />
            </div>
          </span>
          <span className={style.icon}>
            <div>
              <PinterestIcon className={style.instagramIcon} />
            </div>
          </span>
        </div>
      </div>
      <div className={style.img_box}>
        <img src={logo} alt="logo" />
      </div>
      <div className={style.nav_bar}>
        <a href="/">
          <div className={style.opt}>HOME </div>
        </a>
        <a href="/OrderHistory">
          <div className={style.opt}>PAGES </div>
        </a>
        <a href="/ContactUsPage">
          <div className={style.opt}>SHOP </div>
        </a>
        <a href="/PrivacyAanPolicy">
          <div className={style.opt}>ORDERS </div>
        </a>
        <a href="/ContactUsPage">
          <div className={style.opt}>CONTACT</div>
        </a>
        <a href="/AboutUsPage">
          <div className={style.opt}>ABOUT</div>
        </a>
        <a href="/FAQPage">
          <div className={style.opt} style={{ borderRight: "none" }}>
            FAQ'S{" "}
          </div>
        </a>
      </div>
      <br />
      <div className={style.input_box}>
        <input placeholder="YOUR MAIL" />
        <button>SUBMIT →</button>
      </div>
      <div className={style.paymet_conatainer}>
        <div className={style.payment_img_box}>
          <img src={logo1} alt="visa" />
        </div>
        <div className={style.payment_img_box}>
          <img src={logo2} alt="paypal" />
        </div>
        <div className={style.payment_img_box}>
          <img src={logo3} alt="paypal" />
        </div>
        <div className={style.payment_img_box}>
          <img src={logo4} alt="paypal" />
        </div>
        <div className={style.payment_img_box}>
          <img src={logo5} alt="paypal" />
        </div>
      </div>
      <div className={style.desc_box}>
        <h6>Copyright@2014 , dc wine and spirits , All Rights Reserved .</h6>
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
