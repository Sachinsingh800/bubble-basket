import React from "react";
import style from "./ContactUsPageSectionSecond.module.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";


function ContactUsPageSectionSecond() {
  return (
    <div className={style.main}>
      <div className={style.address_box}>
        <div>
          <p>ADDRESS</p>
          <span>501 Church Street NE, Vienna, VA, United States, Virginia</span>
        </div>
        <div>
          <p>CONTACT</p>
          <span>+1 202-459-8489 contact@wineandchampagnegifts.com</span>
        </div>
        <div>
          <p>FOLLOW US ON</p>
          <ul>
                <li>
                  <FacebookRoundedIcon className={style.icon} />
                </li>
                <li>
                  <InstagramIcon className={style.icon} />
                </li>
                <li>
                  <LinkedInIcon className={style.icon} />
                </li>
                <li>
                  <TwitterIcon className={style.icon} />
                </li>
              </ul>
        </div>
      </div>
      <br/>
      <div className={style.form_container}>
        <form>
            <h6>GET IN TOUCH</h6>
            <input type="emai" placeholder="E-mail" />
            <input type="text" placeholder="Name" />
            <textarea className={style.message_box} type="text" placeholder="Message" />
            <button>SUBMIT →</button>
        </form>
        <div className={style.map_box}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889"  allowfullscreen></iframe>
            </div>
      </div>
    </div>
  );
}

export default ContactUsPageSectionSecond;
