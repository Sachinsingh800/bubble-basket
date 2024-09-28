import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import styles from './AuthForm.module.css';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { activeTabState } from '../../Recoil/Recoil';

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

    // Restrict the telephone input to 10 digits only
    if (name === "telephone") {
      // Allow only digits and limit to 10 characters
      const regex = /^[0-9]{0,10}$/;
      if (regex.test(value)) {
        setFormData({
          ...formData,
          [name]: value
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
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
          required // Optional: Add required attribute
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          className={styles.formField}
          required // Optional: Add required attribute
        />
        <TextField
          label="E-Mail"
          name="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          className={styles.formField}
          required // Optional: Add required attribute
          type="email" // Ensures the correct input type
        />
        <TextField
          label="Telephone"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          className={styles.formField}
          required // Optional: Add required attribute
        />
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
