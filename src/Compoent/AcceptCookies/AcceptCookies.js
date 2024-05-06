import React, { useState } from 'react';
import style from "./AcceptCookies.module.css"

const AcceptCookies = () => {
  const [accepted, setAccepted] = useState(false);

  // Function to handle accepting cookies
  const handleAccept = () => {
    // Set accepted to true
    setAccepted(true);
    // Store the acceptance status in local storage
    localStorage.setItem('cookiesAccepted', 'true');
  };

  // Check if cookies have been accepted
  const cookiesAccepted = localStorage.getItem('cookiesAccepted') === 'true';

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
