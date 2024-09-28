// src/components/CookiesSettings.js
import React from 'react';
import { Typography, Button, FormControlLabel, Checkbox, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './CookiesSettings.module.css';
import logo from "../Images/logo.jpg"

const CookiesSettings = ({ handleClose }) => {
  return (
    <div className={styles.slider}>
      <div className={styles.header}>
        <img src={logo} alt="Company Logo" className={styles.logo} />
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <Typography variant="h6" className={styles.heading}>WE CARE ABOUT YOUR PRIVACY</Typography>
      <p>
        Below you’ll find detailed information about each cookie category and the possibility to customize your settings. By clicking "Accept all cookies", you accept all cookies, and agree that we share this information with third parties, such as our advertising partners. This may in some cases mean your data will be processed outside the EU/EEA. Cookies are stored only for as long as needed to fulfill their purpose.
      </p>
      <p>
        If you prefer, you can choose which cookie categories to accept or not. Please keep in mind that blocking some types of cookies may impact how we can deliver and improve our services to you. When you're ready, click on 'Confirm my choices' and remember, you can always change your mind later.
      </p>
      <p>
        If you want to learn more about cookies and why we use them, you can visit our Cookie policy page anytime.
        <span><a href="/cookie-policy" className={styles.link}>Cookie policy</a></span>
      </p>
    
      <Button variant="contained" color="primary" className={styles.Button_btn} onClick={() => alert('All cookies allowed')}>
        ALLOW ALL
      </Button>

      <Typography variant="h6" className={styles.heading}>Manage consent preferences</Typography>
      <Divider />
      <div>
      <div className={styles.cookieCategory}>
        <Typography variant="body1" className={styles.categoryTitle}>Strictly necessary cookies</Typography>
        <Typography variant="body2" className={styles.alwaysActive}>Always active</Typography>
      </div>
      <Divider />
      <div className={styles.cookieCategory}>
        <Typography variant="body1" className={styles.categoryTitle}>Performance cookies</Typography>
        <FormControlLabel control={<Checkbox />} label="Enabled" />
      </div>
      <Divider />
      <div className={styles.cookieCategory}>
        <Typography variant="body1" className={styles.categoryTitle}>Functional cookies</Typography>
        <FormControlLabel control={<Checkbox />} label="Enabled" />
      </div>
      <Divider />
      <div className={styles.cookieCategory}>
        <Typography variant="body1" className={styles.categoryTitle}>Marketing cookies</Typography>
        <FormControlLabel control={<Checkbox />} label="Enabled" />
      </div>
      </div>

      <Button variant="contained" color="primary" className={styles.Button_btn} onClick={handleClose}>
        CONFIRM MY CHOICES
      </Button>
    </div>
  );
};

export default CookiesSettings;
