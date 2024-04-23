import React, { useEffect, useState } from 'react';
import styles from './App.module.css'; // Import module-level CSS
import HideAppBar from './Compoent/NavBar/NavBar';
import productImage from "./Compoent/Images/dom perignon lady gaga rose.png";
import { nanoid } from "nanoid";

function App() {
  const [showPopup, setShowPopup] = useState(false);



  const handleClose = () => {
    setShowPopup(false);
  };

  const handleNo = () => {
    window.close(); // Close the tab
  };

  return (
    <div className={styles.App}> {/* Use module-level CSS class */}
      <HideAppBar />
      {showPopup && (
        <div className={styles.popup}> {/* Use module-level CSS class */}
          <div className={styles.popup_content}> {/* Use module-level CSS class */}
            <h2>Age Verification</h2>
            <p>ARE YOU OVER 18?</p>
            <p>By entering this site you agree to our Privacy Policy</p>
            <p>This website requires you to be 18 years of age or older to access it. Please verify your age to view the content.</p>
            <div className={styles.button_container}> {/* Use module-level CSS class */}
              <button onClick={handleClose}>Yes, I am</button>
              <button onClick={handleNo}>No, I am not</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
