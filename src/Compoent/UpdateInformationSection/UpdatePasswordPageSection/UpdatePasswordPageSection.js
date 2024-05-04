import React, { useState } from "react";
import style from "./UpdatePasswordPageSection.module.css";
import { forgetPassword, resetPassword } from "../../Apis/Apis";

function UpdatePasswordPageSection() {
  const [passwordData, setPasswordData] = useState({
    newPassword: "",
     otp: "",
     email:""
  });

  const [email, setEmail] = useState("");
  const [showPasswordContainer, setPasswordContainer] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await resetPassword(passwordData);
    } catch (error) {
      console.log("error");
    } finally {
          // Clear the form fields
    setPasswordData({
      newPassword: "",
      otp: "",
      email:""
    });
    }
     

  };

  const handleForgetPassword = async () => {
    try {
      const response = await forgetPassword(email);
    } catch (error) {
      console.log("error");
    } finally {
      setPasswordContainer(false)
    }
  };

  return (
    <div className={style.main}>
        <h2>Your Password</h2>
      {showPasswordContainer ? (
        <div className={style.form}>
          <div className={style.input_box}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button onClick={handleForgetPassword}>Reset</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.input_box}>
            <label htmlFor="newPassword">newPassword</label>
            <input
              type="newPassword"
              id="newPassword"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.input_box}>
            <label htmlFor="otp">OTP</label>
            <input
              type="otp"
              id="otp"
              name="otp"
              value={passwordData.otp}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.input_box}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={passwordData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Update Password →</button>
        </form>
      )}
    </div>
  );
}

export default UpdatePasswordPageSection;
