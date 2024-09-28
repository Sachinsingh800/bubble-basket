import React, { useState, useEffect } from 'react';
import { TextField, Button, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './AuthForm.module.css';
import { RegisterUser } from '../../Apis/Apis';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useRecoilState } from 'recoil';
import { activeTabState } from '../../Recoil/Recoil';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    password: '',
    confirmPassword: '',
  });

  const [activeTab, setActiveTab] = useRecoilState(activeTabState);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [data, setData] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const cartData = JSON.parse(sessionStorage.getItem('cartData') || '[]');
    if (cartData.length > 0) {
      setData(cartData);
    }
  }, []);

  const validate = () => {
    const errors = {};
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@#!$%^&*()_+={}\[\]:;"'<>,.?/\\|`~\-]{6,}$/;
    const phoneRegex = /^\d{10}$/; // Validates 10-digit phone numbers

    // First Name validation
    if (!formData.firstName || !nameRegex.test(formData.firstName)) {
      errors.firstName = 'Please enter a valid first name';
    }

    // Last Name validation
    if (!formData.lastName || !nameRegex.test(formData.lastName)) {
      errors.lastName = 'Please enter a valid last name';
    }

    // Email validation
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Telephone validation
    // Extract digits only for validation

    // Password validation
    if (!formData.password || !passwordRegex.test(formData.password)) {
      errors.password = 'Password must be at least 6 characters long and contain at least one letter and one number';
    }

    // Confirm Password validation
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle changes specifically for the PhoneInput component
  const handlePhoneChange = (phone) => {
    setFormData({
      ...formData,
      telephone: phone
    });
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
      const response = await RegisterUser({
        ...formData,
        items:
          data.length > 0
            ? data.map((item) => ({
                productId: item?._id,
                quantity: item?.quantity,
              }))
            : [],
      });

      if (response.status) {
        alert(response.message);
        Cookies.set('token', response.token, { expires: 7 }); // Token will expire in 7 days
        sessionStorage.removeItem('guest');
        navigate('/address'); // Navigate to the address page
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className={styles.main}>
      <h2 className={styles.formTitle}>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          className={styles.formField}
          error={!!errors.firstName}
          helperText={errors.firstName}
          required
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          className={styles.formField}
          error={!!errors.lastName}
          helperText={errors.lastName}
          required
        />
        <TextField
          label="E-Mail"
          name="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          className={styles.formField}
          error={!!errors.email}
          helperText={errors.email}
          required
        />
        <label className={styles.phoneLabel}>Telephone</label>
        <PhoneInput
          country={'us'}
          value={formData.telephone}
          onChange={handlePhoneChange}
          inputStyle={{ width: '100%' }} // Ensure it spans full width
          containerStyle={{ marginTop: '16px', marginBottom: '8px' }}
          inputProps={{
            name: 'telephone',
            required: true,
            autoFocus: false
          }}
        />
        {errors.telephone && (
          <p className={styles.errorText}>{errors.telephone}</p>
        )}
        <TextField
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          className={styles.formField}
          type={showPassword ? 'text' : 'password'}
          error={!!errors.password}
          helperText={errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          required
        />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          className={styles.formField}
          type={showConfirmPassword ? 'text' : 'password'}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowConfirmPassword}>
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          required
        />
        <Button type="submit" className={styles.formButton} variant="contained">
          CONTINUE
        </Button>
      </form>
      <div className={styles.linkContainer}>
        <p style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setActiveTab('login')}>
          Already have an Account?
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
