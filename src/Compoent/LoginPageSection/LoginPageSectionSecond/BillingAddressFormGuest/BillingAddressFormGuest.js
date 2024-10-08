import React, { useEffect, useState } from "react";
import axios from "axios";
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
} from "@mui/material";
import styles from "./BillingAddressFormGuest.module.css"; // Import CSS module
import { useNavigate } from "react-router-dom";

const BillingAddressFormGuest = () => {
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

  const [billingDetails, setBillingDetails] = useState([]);
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
    handleSubmitDefaultAddress(event.target.value);
  };

  // Function to submit the selected address as the default
  const handleSubmitDefaultAddress = (addressId) => {
    const updatedAddresses = billingDetails.map((address) =>
      address.id === addressId
        ? { ...address, setAsDefault: true }
        : { ...address, setAsDefault: false }
    );
    setBillingDetails(updatedAddresses);
    sessionStorage.setItem("billingDetails", JSON.stringify(updatedAddresses));
    alert("Default address updated");
  };

  useEffect(() => {
    fetchBillingDetails();
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

  const fetchBillingDetails = () => {
    const storedDetails = sessionStorage.getItem("billingDetails");
    if (storedDetails) {
      const parsedDetails = JSON.parse(storedDetails);
      setBillingDetails(parsedDetails);
      const defaultAddress = parsedDetails.find(
        (address) => address.setAsDefault
      );
      if (defaultAddress) {
        setSelectedAddressId(defaultAddress.id);
      }
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

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (validateForm()) {
      const dataToSubmit = {
        id: isEditing ? editId : Date.now().toString(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        company: formData.company,
        address1: formData.address1,
        address2: formData.address2,
        city: formData.city,
        postCode: formData.postCode,
        country: formData.country,
        state: formData.state,
        mobile: formData.mobile,
        phoneCode: formData.phoneCode,
        setAsDefault: selectedAddressId === (isEditing ? editId : null),
      };

      let updatedBillingDetails = [...billingDetails];

      if (isEditing) {
        // Update existing address
        updatedBillingDetails = updatedBillingDetails.map((address) =>
          address.id === editId ? dataToSubmit : address
        );
      } else {
        // Add new address
        updatedBillingDetails.push(dataToSubmit);
      }

      // If setting as default, unset others
      if (dataToSubmit.setAsDefault) {
        updatedBillingDetails = updatedBillingDetails.map((address) =>
          address.id === dataToSubmit.id
            ? { ...address, setAsDefault: true }
            : { ...address, setAsDefault: false }
        );
        setSelectedAddressId(dataToSubmit.id);
      }

      setBillingDetails(updatedBillingDetails);
      sessionStorage.setItem(
        "billingDetails",
        JSON.stringify(updatedBillingDetails)
      );
      resetForm();
      setShowForm(false); // Hide the form after submission
      alert(
        isEditing
          ? "Address updated successfully"
          : "Address added successfully"
      );
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
    setErrors({});
  };

  const handleEdit = (id) => {
    const address = billingDetails?.find((detail) => detail?.id === id);
    setFormData({
      firstName: address?.firstName,
      lastName: address?.lastName,
      company: address?.company,
      address1: address?.address1,
      address2: address?.address2,
      city: address?.city,
      postCode: address?.postCode,
      country: address?.country,
      state: address?.state,
      mobile: address?.mobile,
      phoneCode: address?.phoneCode,
    });
    setIsEditing(true);
    setEditId(id);
    setShowForm(true); // Show the form for editing
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
      let updatedBillingDetails = billingDetails?.filter(
        (address) => address?.id !== id
      );

      // If the deleted address was default, set another as default
      const deletedAddress = billingDetails.find((addr) => addr.id === id);
      if (deletedAddress?.setAsDefault && updatedBillingDetails.length > 0) {
        updatedBillingDetails[0].setAsDefault = true;
        setSelectedAddressId(updatedBillingDetails[0].id);
      }

      setBillingDetails(updatedBillingDetails);
      sessionStorage.setItem(
        "billingDetails",
        JSON.stringify(updatedBillingDetails)
      );
      alert("Address deleted successfully");
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
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.formTitle}>
        {isEditing ? "Edit Address" : "Billing Details"}
      </h2>

      {!showForm && (
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

            {billingDetails.length === 0 ? (
              <p>No billing addresses found. Please add one.</p>
            ) : (
              <RadioGroup
                value={selectedAddressId}
                onChange={handleSelectAddress}
                className={styles.radioGroup}
              >
                {billingDetails.map((address) => (
                  <div key={address.id} className={styles.addressItem}>
                    <FormControlLabel
                      className={styles.address}
                      value={address.id}
                      control={<Radio />}
                      label={
                        <>
                          <strong>
                            {address.firstName} {address.lastName}
                          </strong>
                          <div>
                            {address.company && `${address.company}, `}
                            {address.address1}
                            {address.address2 && `, ${address.address2}`},{" "}
                            {address.city}, {address.state}, {address.country}
                          </div>
                          <div>
                            {address.postCode}, +{address.phoneCode}{" "}
                            {address.mobile}
                          </div>
                        </>
                      }
                    />
                    <div className={styles.button_box}>
                      {address.setAsDefault ? (
                        <h6>Default Address</h6>
                      ) : (
                        <Button
                          variant="outlined"
                          color="secondary"
                          onClick={() => handleDelete(address.id)}
                          className={styles.deleteButton}
                        >
                          Delete
                        </Button>
                      )}

                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => handleEdit(address.id)}
                        className={styles.editButton}
                      >
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            )}
          </div>
        </>
      )}

      {showForm && (
        <form className={styles.form}>
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
                type="text" // Change type to 'text' to handle the maxLength properly
                value={formData.mobile}
                onChange={(e) => {
                  const value = e.target.value;
                  // Check if the value is a number and has 10 digits or less
                  if (/^\d*$/.test(value) && value.length <= 10) {
                    handleChange(e); // Call the change handler only if the input is valid
                  }
                }}
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
                onClick={(e) => handleSubmit(e)}
                variant="contained"
                color="primary"
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
        </form>
      )}
    </div>
  );
};

export default BillingAddressFormGuest;
