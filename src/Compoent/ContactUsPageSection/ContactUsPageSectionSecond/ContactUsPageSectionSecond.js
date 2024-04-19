import React from "react";
import style from "./ContactUsPageSectionSecond.module.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function ContactUsPageSectionSecond() {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
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
        <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
            </div>
      </div>
    </div>
  );
}

export default ContactUsPageSectionSecond;
