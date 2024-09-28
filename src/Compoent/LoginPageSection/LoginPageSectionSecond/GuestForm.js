import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { activeTabState } from '../../Recoil/Recoil';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './AuthForm.module.css';

const GuestForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: ""
  });
  const [activeTab, setActiveTab] = useRecoilState(activeTabState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePhoneChange = (phone) => {
    setFormData({
      ...formData,
      telephone: phone
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data in session storage
    sessionStorage.setItem('guestFormData', JSON.stringify(formData));
    sessionStorage.setItem("guest", true);
    navigate('/address');  // Navigate to the address page
  };

  return (
    <div className={styles.main}>
      <h2 className={styles.formTitle}>Checkout as Guest</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          className={styles.formField}
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
          required
          type="email"
        />
        {/* Phone Input with phone code */}
        <label>Telephone</label>
        <PhoneInput
          country={'us'}
          value={formData.telephone}
          onChange={handlePhoneChange}
          inputStyle={{ width: '100%' }}  // Make sure it spans full width
        />
        <br/>
        <Button
          type="submit"
          className={styles.formButton}
          variant="contained"
        >
          CONTINUE
        </Button>
      </form>
      <div className={styles.login_text}>
        <p style={{ color: "blue", cursor: "pointer" }} onClick={() => setActiveTab("login")}>
          Already have an Account?
        </p>
      </div>
      <Button onClick={() => setActiveTab("login")} className={styles.formButton} variant="outlined">
        LOGIN
      </Button>
    </div>
  );
};

export default GuestForm;
