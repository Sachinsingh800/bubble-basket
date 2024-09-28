import React, { useState, useEffect } from 'react';
import { TextField, Button, IconButton, InputAdornment, CircularProgress } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';
import styles from './AuthForm.module.css';
import { getCheckout, loginUser } from "../../Apis/Apis";


const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(sessionStorage.getItem("cartData"));
    if (cartData) {
      setData(cartData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

    try {
      const response = await loginUser(
        {
          email: formData.usernameOrEmail,
          password: formData.password,
          items: data.length > 0
            ? data.map((item) => ({
                productId: item._id,
                quantity: item.quantity,
              }))
            : [],
        },
      );
      if (response.status) {
        // If login is successful, save token to local storage
        // Example: history.push('/dashboard');
        sessionStorage.removeItem("guest")
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response } = error;
        const errorMessage = response;
        console.log("Error Message:", errorMessage);
      } else {
        const errorMessage = error.message;
        console.log("Network Error:", errorMessage);
      }
    } finally {
      setLoading(false);
      // handleCheckoutOrder()
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h2 className={styles.formTitle}>Login with your email</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="E-Mail"
          name="usernameOrEmail"
          value={formData.usernameOrEmail}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          className={styles.formField}
          required
        />
        <TextField
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          className={styles.formField}
          type={showPassword ? "text" : "password"}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          className={styles.formButton}
          variant="contained"
          type="submit"
          fullWidth
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'CONTINUE'}
        </Button>
      </form>
      <div className={styles.linkContainer}>
        <a href="/Forgot-Password">Forgotten Password</a>
      </div>
    </div>
  );
};

export default LoginForm;
