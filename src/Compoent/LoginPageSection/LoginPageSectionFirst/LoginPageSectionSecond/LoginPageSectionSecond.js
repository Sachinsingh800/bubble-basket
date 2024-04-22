import React, { useState } from "react";
import style from "./LoginPageSectionSecond.module.css";

function LoginPageSectionSecond() {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, such as logging in
    console.log(formData);
  };

  return (
    <div className={style.main}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h4>LOGIN</h4>
        <div>
          <label htmlFor="usernameOrEmail">Username or email address *</label>
          <input
            type="text"
            id="usernameOrEmail"
            name="usernameOrEmail"
            value={formData.usernameOrEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div>
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
        <div className={style.check_box}>
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <button type="submit">LOGIN →</button>
        <p>Lost your password?</p>
      </form>
    </div>
  );
}

export default LoginPageSectionSecond;
