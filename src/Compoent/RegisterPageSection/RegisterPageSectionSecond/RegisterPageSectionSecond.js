import React, { useState } from "react";
import style from "./RegisterPageSectionSecond.module.css";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Import the CSS for the PhoneInput component

function RegisterPageSectionSecond() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, such as registering the user
    console.log(formData);
  };

  return (
    <div className={style.main}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h4>REGISTER</h4>
        <div className={style.input_box}>
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.input_box}>
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.input_box}>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.input_box}>
          <label htmlFor="telephone">Telephone *</label>
          <PhoneInput
          className={style.phone_box}
            country="in" // Set the default country
            value={formData.telephone}
            onChange={(value) => setFormData({ ...formData, telephone: value })}
            inputProps={{
              name: "telephone",
              required: true,
            }}
          />
        </div>
        <div className={style.input_box}>
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.input_box}>
          <label htmlFor="confirmPassword">Confirm Password *</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">REGISTER →</button>
        <p>Already have an account? <a href="/Login">Login</a></p>
      </form>
    </div>
  );
}

export default RegisterPageSectionSecond;
