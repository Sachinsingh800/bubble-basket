// src/components/CookiesBanner.js
import React, { useState, useEffect } from "react";
import { Button, Drawer, Typography } from "@mui/material";
import CookiesSettings from "./CookiesSettings";
import styles from "./CookiesBanner.module.css";
import {useNavigate } from "react-router-dom"


const CookiesBanner = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  const handleOpenSettings = () => {
    setOpen(true);
  };

  const handleCloseSettings = () => {
    setOpen(false);
  };

  const handleAcceptAllCookies = () => {
    localStorage.setItem("cookiesAccepted", true);
    setOpen(false);
    window.location.reload()
  };

  return (
    <div className={styles.banner}>
      <Typography variant="h6" gutterBottom className={styles.heading}>
        Before you start shopping
      </Typography>
      <p>
        We use first- and third-party cookies including other tracking
        technologies from third party publishers to give you the full
        functionality of our website, customize your user experience, perform
        analytics and deliver personalized advertising on our websites, apps
        and newsletters across internet and via social media platforms. For
        that purpose, we collect information about user, browsing patterns and
        device.
      </p>
      <p>
        By clicking "Accept all cookies", you accept and agree that we share
        this information with third parties, such as our advertising partners.
        Click on "Cookie settings" to customize your options. Visit our Cookie
        policy to learn more.
        <span>
          {" "}
          <a href="/cookie-policy" className={styles.link}>
            Cookie policy
          </a>
        </span>
      </p>


          <Button
            variant="contained"
            color="primary"
            onClick={handleAcceptAllCookies}
            className={styles.Button_btn}
          >
            Accept all cookies
          </Button>
          <Button
            className={styles.Button_btn1}
            variant="outlined"
            color="primary"
            onClick={handleOpenSettings}
          >
            Cookie settings
          </Button>
      <Drawer anchor="right" open={open} onClose={handleCloseSettings}>
        <CookiesSettings handleClose={handleCloseSettings} />
      </Drawer>
    </div>
  );
};

export default CookiesBanner;
