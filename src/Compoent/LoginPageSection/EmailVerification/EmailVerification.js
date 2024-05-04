import React, { useState, useEffect } from "react";
import style from "./EmailVerification.module.css";
import { verifyEmail, resendOTP } from "../../Apis/Apis"; // Assuming you have functions for verifying email and resending OTP in your API file
import axios from "axios";

function EmailVerification() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    OTP: "",
  });
  const [timer, setTimer] = useState(60); // Initial timer value in seconds
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerRunning]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await verifyEmail(formData.usernameOrEmail, formData.OTP);

      if (response.status === "success") {
        // If login is successful, save token to local storage
        localStorage.setItem("token", JSON.stringify(response.token));
        // Redirect to dashboard or desired page
        // Example: history.push('/dashboard');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response } = error;
        const errorMessage = response?.data?.message;
        console.log("Error Message:", errorMessage);
      } else {
        const errorMessage = error.message;
        console.log("Network Error:", errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setLoading(true);
    try {
      await resendOTP(formData.usernameOrEmail);
      setTimer(60); // Reset timer
      setTimerRunning(true);
    } catch (error) {
      console.log("Error while resending OTP:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.main}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h4>VERIFY YOUR E-MAIL</h4>
        <div className={style.input_box}>
          <label htmlFor="usernameOrEmail">Username or email address *</label>
          <input
            type="text"
            id="usernameOrEmail"
            name="usernameOrEmail"
            value={formData.usernameOrEmail}
            onChange={handleChange}
            required
          />
          <label htmlFor="OTP">OTP *</label>
          <input
            type="number"
            id="OTP"
            name="OTP"
            value={formData.OTP}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "VERIFYING..." : "VERIFY →"}
        </button>
        <p>
          {timer > 0
            ? `Resend OTP in ${timer} seconds`
            : <button type="button" onClick={handleResendOTP} disabled={loading}>
                Resend OTP
              </button>}
        </p>
      </form>
    </div>
  );
}

export default EmailVerification;
