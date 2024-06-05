import React, { useEffect, useState } from "react";
import style from "./RegisterPageSectionSecond.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import the CSS for the PhoneInput component
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
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
  const [errors, setErrors] = useState({});
  const [showVerification, setShowVerification] = useState(false);
  const [data, setData] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const rememberMeData = JSON.parse(localStorage.getItem("rememberMeData"));
    if (rememberMeData) {
      setFormData(rememberMeData);
    }
    const cartData = JSON.parse(sessionStorage.getItem("cartData") || "[]");
    if (cartData) {
      setData(cartData);
    }
  }, []);

  const validate = () => {
    const errors = {};
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@#!$%^&*()_+={}\[\]:;"'<>,.?/\\|`~\-]{6,}$/; // Minimum 6 characters, at least one letter and one number, and allows symbols

    if (!formData.firstName || !nameRegex.test(formData.firstName)) {
      errors.firstName = "Please enter a valid first name";
    }
    if (!formData.lastName || !nameRegex.test(formData.lastName)) {
      errors.lastName = "Please enter a valid last name";
    }
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.password || !passwordRegex.test(formData.password)) {
      errors.password = "Password must be at least 6 characters long and contain at least one letter and one number";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    try {
      const response = await RegisterUser(formData);
      if (response.status) {
        alert(response.message);
        setShowVerification(true);
        scrollToTop()
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        items: data.length > 0 ? data.map((item) => ({
          productId: item?._id,
          quantity: item?.quantity,
        })) : [],
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
        email: formData.email,
      };
      const response = await resendOtp(email);
      alert(response.message)
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
              type="text"
              placeholder="OTP"
              maxLength={6}
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
            {errors.firstName && <p className={style.error}>{errors.firstName}</p>}
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
            {errors.lastName && <p className={style.error}>{errors.lastName}</p>}
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
            {errors.email && <p className={style.error}>{errors.email}</p>}
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
            <div className={style.password_input}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <IconButton
                onClick={() => setShowPassword((prev) => !prev)}
                edge="end"
                size="small"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
            {errors.password && <p className={style.error}>{errors.password}</p>}
          </div>
          <div className={style.input_box}>
            <label htmlFor="confirmPassword">Confirm Password *</label>
            <div className={style.password_input}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <IconButton
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                edge="end"
                size="small"
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </div>
            {errors.confirmPassword && <p className={style.error}>{errors.confirmPassword}</p>}
          </div>
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
