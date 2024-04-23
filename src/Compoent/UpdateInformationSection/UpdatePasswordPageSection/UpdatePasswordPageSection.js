import React, { useState } from "react";
import style from "./UpdatePasswordPageSection.module.css";

function UpdatePasswordPageSection() {
  const [passwordData, setPasswordData] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate passwords
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Handle form submission, such as updating password on the backend
    console.log(passwordData);
    // Clear the form fields
    setPasswordData({
      password: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className={style.main}>
      <h2>Your Password</h2>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.input_box}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={passwordData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.input_box}>
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={passwordData.newPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.input_box}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={passwordData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Password →</button>
      </form>
    </div>
  );
}

export default UpdatePasswordPageSection;
