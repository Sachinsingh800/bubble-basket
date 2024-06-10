import React, { useEffect, useState } from "react";
import styles from "./App.module.css"; // Import module-level CSS
import AcceptCookies from "./Compoent/AcceptCookies/AcceptCookies";
import Home from "./Compoent/Home/Home";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Function to retrieve token from cookies
    function getToken() {
      return document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
    }

    // Retrieve token
    const token = getToken();
    if (!token) {
      sessionStorage.setItem("isLoggedIn", false);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleNo = () => {
    window.close(); // Close the tab
  };

  return (
    <div className={styles.App}>
      {" "}
      {/* Use module-level CSS class */}
      <Home />
      <AcceptCookies />
      {showPopup && (
        <div className={styles.popup}>
          {" "}
          {/* Use module-level CSS class */}
          <div className={styles.popup_content}>
            {" "}
            {/* Use module-level CSS class */}
            <h2>Age Verification</h2>
            <p>ARE YOU OVER 18?</p>
            <p>By entering this site you agree to our Privacy Policy</p>
            <p>
              This website requires you to be 18 years of age or older to access
              it. Please verify your age to view the content.
            </p>
            <div className={styles.button_container}>
              {" "}
              {/* Use module-level CSS class */}
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
