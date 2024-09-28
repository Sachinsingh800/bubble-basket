import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
  InputAdornment,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import styles from "./BillingAddressForm.module.css"; // Import CSS module
import { useNavigate } from "react-router-dom";

const BillingAddressForm = () => {
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
    phoneCode: "",
  });

  const [billingDetails, setbillingDetails] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(false); // State to manage form visibility
  const navigate = useNavigate();

  const [selectedAddressId, setSelectedAddressId] = useState("");
  // Function to handle selecting an address
  const handleSelectAddress = (event) => {
    setSelectedAddressId(event.target.value);
  };

  // useEffect to trigger the address submission when selectedAddressId changes
  useEffect(() => {
    if (selectedAddressId) {
      handleSubmitDefaultAddress();
    }
  }, [selectedAddressId]);

  // Function to submit the selected address as the default
  const handleSubmitDefaultAddress = async () => {
    try {
      const token = Cookies.get("token");
      const headers = {
        "x-auth-token": token,
        "Content-Type": "application/json",
      };

      await axios.put(
        `https://modifiedllb.onrender.com/user/billingAddress/setDefault/${selectedAddressId}`,
        {}, // No need to send data, only the ID is required for setting default
        { headers }
      );
      fetchbillingDetails();
      // Refresh billing details after setting default
    } catch (error) {
      console.error("Error setting default address:", error);
      alert("Error setting default address. Please try again.");
    }
  };

  useEffect(() => {
    fetchbillingDetails();
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://modifiedllb.onrender.com/countries"
        );
        setCountries(response.data.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchStates = async () => {
      if (formData.country) {
        try {
          const response = await axios.get(
            `https://modifiedllb.onrender.com/statesByCountryCode?countryCode=${formData.country}`
          );
          setStates(response.data.data);
        } catch (error) {
          console.error("Error fetching states:", error);
        }
      }
    };
    fetchStates();
  }, [formData.country]);

  const fetchbillingDetails = async () => {
    try {
      const token = Cookies.get("token");
      const headers = {
        "x-auth-token": token,
        "Content-Type": "application/json",
      };
      const response = await axios.get(
        "https://modifiedllb.onrender.com/user/billingAddress/getAll",
        { headers }
      );
      if (response.status === 200) {
        setbillingDetails(response.data.data);
      }
      const defaultAddress = response.data.data.find(
        (address) => address.setAsDefault
      );
      if (defaultAddress) {
        setSelectedAddressId(defaultAddress._id);
      }
    } catch (error) {
      console.error("Error fetching billing details:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCountryChange = (e) => {
    const selectedCountry = countries.find(
      (country) => country.isoCode === e.target.value
    );
    setFormData({
      ...formData,
      country: selectedCountry.isoCode,
      phoneCode: selectedCountry.phonecode,
      state: "",
    });
    setStates([]);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.address1) newErrors.address1 = "Address 1 is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.postCode) newErrors.postCode = "Post code is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (validateForm()) {
    const  fullphone=`${formData.phoneCode}-${formData?.mobile}`
      try {
        const dataToSubmit = {
          firstName: formData?.firstName,
          lastName: formData?.lastName,
          companyName: formData?.company,
          address1: formData?.address1,
          address2: formData?.address2,
          townCity: formData?.city,
          postcodeZIP: formData?.postCode,
          country: formData?.country,
          stateCounty: formData?.state,
          phone: fullphone,
        };

        const token = Cookies.get("token");
        const headers = {
          "x-auth-token": token,
          "Content-Type": "application/json",
        };

        if (isEditing) {
          // Update address
          await axios.put(
            `https://modifiedllb.onrender.com/user/billingAddress/update/${editId}`,
            dataToSubmit,
            { headers }
          );
        } else {
          // Add new address
          await axios.post(
            "https://modifiedllb.onrender.com/user/billingAddress/create",
            dataToSubmit,
            { headers }
          );
        }

        fetchbillingDetails();
        resetForm();
        setShowForm(false); // Hide the form after submission
      } catch (error) {
        console.error("Error saving address:", error);
        alert("Error saving address. Please try again.");
      }
    }
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
      phoneCode: "",
    });
    setIsEditing(false);
    setEditId(null);
  };

  const handleEdit = (id) => {
    const address = billingDetails.find((detail) => detail._id === id);
    setFormData({
      firstName: address.firstName,
      lastName: address.lastName,
      company: address.companyName,
      address1: address.address1,
      address2: address.address2,
      city: address.townCity,
      postCode: address.postcodeZIP,
      country: address.country,
      state: address.stateCounty,
      mobile: address.phone,
      phoneCode:
        countries.find((c) => c.isoCode === address.country)?.phonecode || "",
    });
    setIsEditing(true);
    setEditId(id);
    setShowForm(true); // Show the form for editing
  };

  const handleDelete = async (id) => {
    try {
      const token = Cookies.get("token");
      const headers = {
        "x-auth-token": token,
        "Content-Type": "application/json",
      };
      await axios.delete(
        `https://modifiedllb.onrender.com/user/billingAddress/delete/${id}`,
        { headers }
      );
      fetchbillingDetails();
    } catch (error) {
      console.error("Error deleting address:", error);
    }
  };

  const handleAddNewAddress = () => {
    resetForm(); // Reset form for new address
    setIsEditing(false); // Set editing to false for adding a new address
    setShowForm(true); // Show the form for adding a new address
  };

  const handleCancel = () => {
    resetForm(); // Reset form
    setShowForm(false); // Hide the form
    setSelectedAddressId(null); // Clear selected address
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.formTitle}>
        {isEditing ? "Edit Address" : "Billing Details"}
      </h2>

      {!showForm && ( // Hide address list when form is visible
        <>
          {/* Display saved addresses */}
          <div className={styles.addressList}>
            <div className={styles.card_heading}>
              <h3>Select Billing Address</h3>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddNewAddress}
                className={styles.addNewButton} // Add styling class if needed
              >
                Add
              </Button>
            </div>

            <RadioGroup
              value={selectedAddressId}
              onChange={handleSelectAddress}
              className={styles.radioGroup}
            >
              {billingDetails?.map((address) => (
                <div key={address?._id} className={styles.addressItem}>
                  <FormControlLabel
                    className={styles.address}
                    value={address?._id}
                    control={<Radio />}
                    label={
                      <>
                        <strong>
                          {address?.firstName} {address?.lastName}
                        </strong>
                        <div>
                          {address?.companyName}, {address?.address1},{" "}
                          {address?.address2}, {address?.townCity},{" "}
                          {address?.stateCounty}, {address?.country}
                        </div>
                        <div>
                          {address?.postcodeZIP}, {address?.phone}
                        </div>
                      </>
                    }
                  />
                  <div className={styles.button_box}>
                    {address?.setAsDefault ? (
                      <h6>Default Address</h6>
                    ) : (
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleDelete(address._id)}
                        className={styles.deleteButton}
                      >
                        Delete
                      </Button>
                    )}

                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleEdit(address?._id)}
                      className={styles.editButton}
                    >
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>
        </>
      )}

      {showForm && (
        <div className={styles.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name *"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                error={!!errors.firstName}
                helperText={errors.firstName}
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
                error={!!errors.lastName}
                helperText={errors.lastName}
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
            <Grid item xs={12}>
              <TextField
                label="Address Line 1 *"
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                error={!!errors.address1}
                helperText={errors.address1}
                required
                className={styles.formField}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address Line 2"
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
                error={!!errors.city}
                helperText={errors.city}
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
                error={!!errors.postCode}
                helperText={errors.postCode}
                required
                className={styles.formField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                fullWidth
                variant="outlined"
                error={!!errors.country}
                className={styles.formField}
              >
                <InputLabel>Country *</InputLabel>
                <Select
                  name="country"
                  value={formData.country}
                  onChange={handleCountryChange}
                  label="Country *"
                  required
                >
                  {countries.map((country) => (
                    <MenuItem key={country.isoCode} value={country.isoCode}>
                      {country.name}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{errors.country}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                fullWidth
                variant="outlined"
                error={!!errors.state}
                className={styles.formField}
              >
                <InputLabel>State *</InputLabel>
                <Select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  label="State *"
                  required
                >
                  {states.map((state) => (
                    <MenuItem key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{errors.state}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Mobile *"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                error={!!errors.mobile}
                helperText={errors.mobile}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      +{formData.phoneCode}
                    </InputAdornment>
                  ),
                }}
                className={styles.formField}
              />
            </Grid>
            <Grid item xs={12} className={styles.buttonContainer}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                className={styles.submitButton}
              >
                {isEditing ? "Update Address" : "Save Address"}
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleCancel}
                className={styles.cancelButton}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default BillingAddressForm;
