import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import style from "./UpdatePasswordPageSection.module.css";
import { updatePassword } from "../../Apis/Apis"; // Adjust the import according to your project structure
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function UpdatePasswordPageSection() {
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@#!$%^&*()_+={}\[\]:;"'<>,.?/\\|`~\-]{6,}$/;
    return passwordRegex.test(password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { oldPassword, newPassword } = passwordData;
    const newErrors = {};

    if (!validatePassword(newPassword)) {
      newErrors.newPassword =
        "Password must be at least 6 characters long and contain at least one letter and one number.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await updatePassword({
          oldPassword,
          newPassword,
        });

        if (response.success) {
          alert("Password updated successfully!");
          setPasswordData({
            oldPassword: "",
            newPassword: "",
          });
        } else {
          setApiError(response.message || "Failed to update password.");
        }
      } catch (error) {
        setApiError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className={style.main}>
      <h2>Update Your Password</h2>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.input_box}>
          <label htmlFor="oldPassword">Old Password</label>
          <div className={style.password_input}>
            <input
              type={showPassword ? "text" : "password"}
              id="oldPassword"
              name="oldPassword"
              value={passwordData.oldPassword}
              onChange={handleChange}
              required
            />
            <IconButton
              onClick={handleClickShowPassword}
              className={style.visibility_icon}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </div>
        </div>
        <div className={style.input_box}>
          <label htmlFor="newPassword">New Password</label>
          <div className={style.password_input}>
            <input
              type={showPassword ? "text" : "password"}
              id="newPassword"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handleChange}
              required
            />
            <IconButton
              onClick={handleClickShowPassword}
              className={style.visibility_icon}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </div>
          {errors.newPassword && (
            <p className={style.error}>{errors.newPassword}</p>
          )}
        </div>
        {apiError && <p className={style.error}>{apiError}</p>}
        <button type="submit">Update Password →</button>
      </form>
    </div>
  );
}

export default UpdatePasswordPageSection;
