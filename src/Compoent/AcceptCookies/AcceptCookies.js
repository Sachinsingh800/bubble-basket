import React, { useState, useEffect } from 'react';
import style from "./AcceptCookies.module.css";

const AcceptCookies = () => {
  const [accepted, setAccepted] = useState(false);

  // Function to handle accepting cookies
  const handleAccept = () => {
    // Set accepted to true
    setAccepted(true);
    // Store the acceptance status in a cookie
    document.cookie = "cookiesAccepted=true; path=/; max-age=31536000"; // 1 year expiry
  };

  // Check if cookies have been accepted
  const cookiesAccepted = document.cookie.includes("cookiesAccepted=true");

  useEffect(() => {
    // Automatically accept cookies on mobile devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      handleAccept();
    }
  }, []);

  // If cookies have been accepted or the user explicitly accepts them, return null
  if (cookiesAccepted || accepted) {
    return null;
  }

  // Otherwise, render the component
  return (
    <div className={style.accept_cookies}>
      <p>This website uses cookies to improve your experience.</p>
      <button onClick={handleAccept}>Accept Cookies</button>
    </div>
  );
};

export default AcceptCookies;
