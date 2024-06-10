import React, { useState } from "react";
import style from "./ContactUsPageSectionSecond.module.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";

function ContactUsPageSectionSecond() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for getting in touch!");
    setFormData({
      email: "",
      name: "",
      message: "",
    });
  };

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
              <a
                target="_blank"
                href="https://www.facebook.com/LuxuryBubbleBasket"
                rel="noreferrer"
              >
                <FacebookRoundedIcon className={style.icon} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCOX_uZXsTjPdOSBV1ATdiFg"
                rel="noreferrer"
              >
                <YouTubeIcon className={style.icon} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/luxurybubblebasket/"
                rel="noreferrer"
              >
                <InstagramIcon className={style.icon} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/luxurybubblebasket/"
                rel="noreferrer"
              >
                <LinkedInIcon className={style.icon} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://x.com/LuxuryBubbleBsk"
                rel="noreferrer"
              >
                <TwitterIcon className={style.icon} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://in.pinterest.com/luxurybubblebasket/"
                rel="noreferrer"
              >
                <PinterestIcon className={style.icon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div className={style.form_container}>
        <form onSubmit={handleSubmit}>
          <h6>GET IN TOUCH</h6>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <textarea
            className={style.message_box}
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">SUBMIT →</button>
        </form>
        <div className={style.map_box}>
          <iframe
            className={style.map}
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.6537595606677!2d-77.26227708428358!3d38.90058757957322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64d04c7f8daa7%3A0x1aa1e043c36b5f3!2s501%20Church%20St%20NE%2C%20Vienna%2C%20VA%2022180%2C%20USA!5e0!3m2!1sen!2suk!4v1648740255627!5m2!1sen!2suk"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPageSectionSecond;
