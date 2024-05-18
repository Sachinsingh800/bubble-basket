import React, { useEffect, useState } from "react";
import style from "./RegisterPageSectionSecond.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import the CSS for the PhoneInput component
import axios from "axios";
import { RegisterUser, resendOtp, verifyEmail } from "../../Apis/Apis";

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
  const [otp, setOtp] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showVerification, setShowVerification] = useState(false);
  const [data, setData] = useState([]);
  const [totalprice, setTotalPrice] = useState(null);

  useEffect(() => {
    const rememberMeData = JSON.parse(localStorage.getItem("rememberMeData"));
    if (rememberMeData) {
      setFormData(rememberMeData);
    }
    const cartData = JSON.parse(localStorage.getItem("cartData") || "[]");
    const priceData = JSON.parse(localStorage.getItem("totalPrice") || "null");
    if (cartData) {
      setData(cartData);
      setTotalPrice(priceData);
    }
  }, []);

  useEffect(() => {
    const verifyEmail = JSON.parse(localStorage.getItem("OtpVerification"));
    setShowVerification(verifyEmail);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    setPasswordError(""); // Clear any previous password error
    try {
      const response = await RegisterUser(formData);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const handleVerification = async () => {
    try {
      const userData = {
        firstName: formData?.firstName,
        lastName: formData?.lastName,
        email: formData?.email,
        password: formData?.password,
        telephone: formData?.telephone,
        otp: otp,
        items: data.map((item) => ({
          productId: item?._id,
          quantity: item?.quantity,
        })),
        totalPrice: totalprice ? totalprice : null,
        totalItems: data?.length,
      };
      const response = await verifyEmail(userData);
      // Handle response as needed
    } catch (error) {
      console.error("Error verifying user:", error);
    }
  };

  const handleResendOtp = async () => {
    try {
      const email = {
        email: formData?.email,
      };
      const response = await resendOtp(email);
      // Handle response as needed
    } catch (error) {
      console.error("Error verifying user:", error);
    }
  };

  return (
    <div className={style.main}>
      {showVerification ? (
        <div className={style.form}>
          <div className={style.input_box}>
            <h4>VERIFY YOUR EMAIL</h4>
            <input
              type="number"
              placeholder="otp"
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleVerification}>VERIFY EMAIL →</button>
            <button onClick={handleResendOtp}>Resend OTP</button>
          </div>
        </div>
      ) : (
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
              onChange={(value) =>
                setFormData({ ...formData, telephone: value })
              }
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
          {passwordError && <p className={style.error}>{passwordError}</p>}
          <button type="submit">REGISTER →</button>
          <p>
            Already have an account? <a href="/Login">Login</a>
          </p>
        </form>
      )}
    </div>
  );
}

export default RegisterPageSectionSecond;
