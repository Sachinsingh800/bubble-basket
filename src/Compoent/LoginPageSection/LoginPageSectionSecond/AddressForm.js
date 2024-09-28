import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import Cookies from "js-cookie";
import axios from "axios";
import styles from "./AddressForm.module.css"; // Import CSS module
import { useNavigate } from "react-router-dom";

const AddressForm = () => {
  const guest = sessionStorage.getItem("guest") === "true"; // Parse guest status as boolean
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address1: "",
    address2: "",
    city: "",
    postCode: "",
    country: "",
    state: "",
    mobile: "",
  });
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [error, setError] = useState("");

  // Fetch countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://modifiedllb.onrender.com/countries"
        );
        setCountries(response.data.data); // Assuming data structure is as provided
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  // Fetch states when country changes
  useEffect(() => {
    const fetchStates = async () => {
      if (formData.country) {
        try {
          const response = await axios.get(
            `https://modifiedllb.onrender.com/statesByCountryCode?countryCode=${formData.country}`
          );
          setStates(response.data.data); // Assuming data structure as provided
        } catch (error) {
          console.error("Error fetching states:", error);
        }
      } else {
        setStates([]); // Clear states if no country is selected
      }
    };
    fetchStates();
  }, [formData.country]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobile") {
      if (/^\d{0,10}$/.test(value)) {
        setFormData({
          ...formData,
          [name]: value,
        });
        setError("");
      } else {
        setError("Please enter a valid 10-digit phone number");
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const phoneCode = countries.find(country => country.isoCode === formData.country)?.phonecode || "";
    const fullMobile = `${phoneCode}-${formData.mobile}`;

    const dataToSubmitGuest = [
      {
        id: Date.now().toString(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        company: formData.company,
        address1: formData.address1,
        address2: formData.address2,
        city: formData.city,
        postCode: formData.postCode,
        country: formData.country,
        state: formData.state,
        mobile: fullMobile,
        setAsDefault: true,
      },
    ];

    if (validateForm()) {
      if (guest) {
        // If user is a guest, store the address in session storage
        sessionStorage.setItem("billingDetails", JSON.stringify(dataToSubmitGuest));
        const checkoutStatus = JSON.parse(
          sessionStorage.getItem("checkoutStatus")
        );
        if (checkoutStatus) {
          navigate("/Checkout-guest");
        } else {
          navigate("/");
        }
        resetForm();
      } else {
        // If user is not a guest, send the address to the API
        try {
          const dataToSubmit = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            companyName: formData.company,
            address1: formData.address1,
            address2: formData.address2,
            townCity: formData.city,
            postcodeZIP: formData.postCode,
            country: formData.country,
            stateCounty: formData.state,
            phone: fullMobile,
          };

          const token = Cookies.get("token");
          const headers = {
            "x-auth-token": token,
            "Content-Type": "application/json",
          };

          // Add new address via API
          await axios.post(
            "https://modifiedllb.onrender.com/user/billingAddress/create",
            dataToSubmit,
            { headers }
          );
          resetForm();
          const checkoutStatus = JSON.parse(
            sessionStorage.getItem("checkoutStatus")
          );
          if (checkoutStatus) {
            navigate("/Checkout");
          } else {
            navigate("/");
          }
        } catch (error) {
          console.error("Error saving address:", error);
        }
      }
    }
  };

  const validateForm = () => {
    // Basic validation for required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "address1",
      "city",
      "postCode",
      "country",
      "state",
      "mobile",
    ];
    if (!formData.mobile || formData.mobile.length !== 10) {
      setError("Mobile number must be 10 digits long");
      return false;
    }
    const isValid = requiredFields.every((field) => formData[field] !== "");
    if (!isValid) {
      setError("Please fill all required fields.");
    }
    return isValid;
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      address1: "",
      address2: "",
      city: "",
      postCode: "",
      country: "",
      state: "",
      mobile: "",
    });
    setError(""); // Reset error message
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.formTitle}>Add an Address</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name *"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
              className={styles.formField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name *"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
              className={styles.formField}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              className={styles.formField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Address 1 *"
              name="address1"
              value={formData.address1}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
              className={styles.formField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Address 2"
              name="address2"
              value={formData.address2}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              className={styles.formField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="City *"
              name="city"
              value={formData.city}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
              className={styles.formField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Post Code *"
              name="postCode"
              value={formData.postCode}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
              className={styles.formField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              fullWidth
              variant="outlined"
              className={styles.formField}
            >
              <InputLabel>Country *</InputLabel>
              <Select
                name="country"
                value={formData.country}
                onChange={handleChange}
                label="Country *"
              >
                {countries.map((country) => (
                  <MenuItem key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              fullWidth
              variant="outlined"
              className={styles.formField}
            >
              <InputLabel>State *</InputLabel>
              <Select
                name="state"
                value={formData.state}
                onChange={handleChange}
                label="State *"
              >
                {states.map((state) => (
                  <MenuItem key={state.name} value={state.name}>
                    {state.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Mobile *"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
              className={styles.formField}
            />
            {error && <div className={styles.errorMessage}>{error}</div>}
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddressForm;
