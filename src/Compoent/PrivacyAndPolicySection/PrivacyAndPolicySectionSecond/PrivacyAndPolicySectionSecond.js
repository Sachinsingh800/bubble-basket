import React from "react";
import style from "./PrivacyAndPolicySectionSecond.module.css";

function PrivacyAndPolicySectionSecond() {
  return (
    <div className={style.main}>
       <div className={style.title_box}>
        <hr />
        <span>Luxury</span>
        <hr />
      </div>
      <div className={style.header}>
        <h1>BUBBLE BASKET</h1>
        <p>
          Ele atterum signiferumque his, sit in augue populae intellegam id
          tales accusata in sea
        </p>
      </div>
      <br />
      <div className={style.container}>
        <div className={style.left}>
          <h2>Privacy Policy</h2>
          <p>
            Your privacy is important to us. It is [Your Company Name]'s policy
            to respect your privacy regarding any information we may collect
            from you across our website, [yourwebsite.com], and other sites we
            own and operate.
          </p>
          <h3>Information We Collect</h3>
          <p>
            <strong>Log Data:</strong> When you visit our website, our servers
            may automatically log the standard data provided by your web
            browser. It may include your computer’s Internet Protocol (IP)
            address, your browser type and version, the pages you visit, the
            time and date of your visit, the time spent on each page, and other
            details.
          </p>
          <p>
            <strong>Personal Information:</strong> We may ask for personal
            information, such as your name, email, address, and payment
            details, when you make a purchase, sign up for our newsletter, or
            fill out a contact form. We only collect the information necessary
            to provide the services you request and to improve our site.
          </p>
          <p>
            <strong>Cookies:</strong> We may use cookies to store information
            about your preferences and to personalize the website content for
            you. You can control the use of cookies through your browser
            settings.
          </p>
          {/* Add more sections as needed */}
        </div>
        <div className={style.right}>
          <h2>How We Use Information</h2>
          <p>
            We use the information we collect in various ways, including to:
            <ul>
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
          </p>
          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
}

export default PrivacyAndPolicySectionSecond;
