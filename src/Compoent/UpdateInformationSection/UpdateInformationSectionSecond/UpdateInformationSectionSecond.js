import React, { useState } from "react";
import style from "./UpdateInformationSectionSecond.module.css";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Import the CSS for the PhoneInput component

function UpdateInformationSectionSecond() {
  // Initial user data - you can replace this with data fetched from the backend
  const initialUserData = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    telephone: "+1234567890",
  };

  const [userData, setUserData] = useState(initialUserData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setUserData({ ...userData, telephone: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, such as updating user data on the backend
  };

  return (
    <div className={style.main}>
      <h2>My Account Information</h2>
      <form onSubmit={handleSubmit} className={style.form}>
        <h4>Your Personal Details</h4>
        <div className={style.input_box}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.input_box}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.input_box}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.input_box}>
          <label htmlFor="telephone">Telephone</label>
          <PhoneInput
            country="us" // Set the default country
            value={userData.telephone}
            onChange={handlePhoneChange}
            inputProps={{
              name: "telephone",
              required: true,
            }}
          />
        </div>
        <button type="submit">Update Information →</button>
      </form>
    </div>
  );
}

export default UpdateInformationSectionSecond;
