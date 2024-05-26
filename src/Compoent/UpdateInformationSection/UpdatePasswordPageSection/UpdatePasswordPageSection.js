import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import style from "./UpdatePasswordPageSection.module.css";
import { forgetPassword, resendOtp, resetPassword } from "../../Apis/Apis";

function UpdatePasswordPageSection() {
  const [passwordData, setPasswordData] = useState({
    newPassword: "",
    otp: "",
    email: "",
  });

  const [email, setEmail] = useState("");
  const [showPasswordContainer, setPasswordContainer] = useState(true);
  const [errors, setErrors] = useState({});
  const [otpSent, setOtpSent] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateOtp = (otp) => {
    const otpRegex = /^\d{6}$/;
    return otpRegex.test(otp);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!validateEmail(passwordData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!validatePassword(passwordData.newPassword)) {
      newErrors.newPassword = "Password must be at least 8 characters long and contain at least one letter and one number";
    }
    if (!validateOtp(passwordData.otp)) {
      newErrors.otp = "OTP must be a 6-digit number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await resetPassword(passwordData);
      console.log(response, "reset password response");
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleForgetPassword = async () => {
    if (!validateEmail(email)) {
      setErrors({ email: "Invalid email format" });
      return;
    }
    try {
      const response = await forgetPassword(email);
      console.log(response, "forget password response");
      if (response.status) {
        setPasswordContainer(false);
        setOtpSent(true);
      } else {
        alert(response?.message);
      }
    } catch (error) {
      console.log("error", error);
      alert("User not found");
    }
  };

  const handleResendOtp = async () => {
    try {
      const response = await resendOtp({ email });
      // Handle response as needed
      alert(response.message);
    } catch (error) {
      console.error("Error verifying user:", error);
    }
  };

  return (
    <div className={style.main}>
      <h2>Update Your Password</h2>
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
            {errors.email && <p className={style.error}>{errors.email}</p>}
          </div>
          <button onClick={handleForgetPassword}>Reset</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={style.form}>
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
            {errors.newPassword && <p className={style.error}>{errors.newPassword}</p>}
          </div>
          <div className={style.input_box}>
            <label htmlFor="otp">OTP</label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={passwordData.otp}
              onChange={handleChange}
              required
            />
            {errors.otp && <p className={style.error}>{errors.otp}</p>}
            {otpSent && <p onClick={handleResendOtp} className={style.resendotp}>Resend OTP</p>}
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
            {errors.email && <p className={style.error}>{errors.email}</p>}
          </div>
          <button type="submit">Update Password →</button>
        </form>
      )}
    </div>
  );
}

export default UpdatePasswordPageSection;
