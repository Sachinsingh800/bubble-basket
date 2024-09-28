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
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import styles from "./ShippingAddressForm.module.css"; // Import CSS module
import { useNavigate } from "react-router-dom";

const ShippingAddressForm = () => {
  // Initialize formData with country set to US and phoneCode to 1
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address1: "",
    address2: "",
    city: "",
    postCode: "",
    country: "US", // Default country to US
    state: "",
    mobile: "",
    phoneCode: "1", // US phone code
  });

  const [shippingDetails, setshippingDetails] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  // Set countries to only include United States
  const [countries, setCountries] = useState([
    { name: "United States", isoCode: "US", phonecode: "1" },
  ]);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        `https://modifiedllb.onrender.com/user/address/setDefault/${selectedAddressId}`,
        {}, // No need to send data, only the ID is required for setting default
        { headers }
      );
      fetchshippingDetails();
      // Refresh shipping details after setting default
    } catch (error) {
      console.error("Error setting default address:", error);
      alert("Error setting default address. Please try again.");
    }
  };

  useEffect(() => {
    fetchshippingDetails();
    // Since country is fixed to US, no need to fetch countries from API
    // fetchCountries is no longer needed
    fetchStates(); // Fetch states for default country
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchStates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.country]);

  // Function to fetch states based on country code (fixed to US)
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

  // Function to fetch shipping details from API
  const fetchshippingDetails = async () => {
    try {
      const token = Cookies.get("token");
      const headers = {
        "x-auth-token": token,
        "Content-Type": "application/json",
      };
      const response = await axios.get(
        "https://modifiedllb.onrender.com/user/address/getAll",
        { headers }
      );
      if (response.status === 200) {
        setshippingDetails(response.data.data);
      }
      const defaultAddress = response.data.data.find(
        (address) => address.setAsDefault
      );
      if (defaultAddress) {
        setSelectedAddressId(defaultAddress._id);
      }
    } catch (error) {
      console.error("Error fetching shipping details:", error);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Removed handleCountryChange since country is fixed to US

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.address1) newErrors.address1 = "Address 1 is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.postCode) newErrors.postCode = "Post code is required";
    // Country is fixed, no need to validate
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission for adding or editing address
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const fullphone = `${formData.phoneCode}-${formData.mobile}`;
    if (validateForm()) {
      try {
        const dataToSubmit = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          companyName: formData.company,
          address1: formData.address1,
          address2: formData.address2,
          townCity: formData.city,
          postcodeZIP: formData.postCode,
          country: formData.country, // Always US
          stateCounty: formData.state,
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
            `https://modifiedllb.onrender.com/user/address/update/${editId}`,
            dataToSubmit,
            { headers }
          );
        } else {
          // Add new address
          await axios.post(
            "https://modifiedllb.onrender.com/user/address/create",
            dataToSubmit,
            { headers }
          );
        }

        fetchshippingDetails();
        resetForm();
        setShowForm(false); // Hide the form after submission
      } catch (error) {
        console.error("Error saving address:", error);
        alert("Error saving address. Please try again.");
      }
    }
  };

  // Reset form to initial state
  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      address1: "",
      address2: "",
      city: "",
      postCode: "",
      country: "US", // Reset to US
      state: "",
      mobile: "",
      phoneCode: "1", // Reset to US phone code
    });
    setIsEditing(false);
    setEditId(null);
    setErrors({});
  };

  // Handle editing an existing address
  const handleEdit = (id) => {
    const address = shippingDetails.find((detail) => detail._id === id);
    if (address) {
      setFormData({
        firstName: address.firstName,
        lastName: address.lastName,
        company: address.companyName,
        address1: address.address1,
        address2: address.address2,
        city: address.townCity,
        postCode: address.postcodeZIP,
        country: "US", // Ensure country is always US
        state: address.stateCounty,
        mobile: address.phone.replace(`${address.phoneCode}-`, ""),
        phoneCode: countries.find((c) => c.isoCode === "US")?.phonecode || "1",
      });
      setIsEditing(true);
      setEditId(id);
      setShowForm(true); // Show the form for editing
    }
  };

  // Handle deleting an address
  const handleDelete = async (id) => {
    try {
      const token = Cookies.get("token");
      const headers = {
        "x-auth-token": token,
        "Content-Type": "application/json",
      };
      await axios.delete(
        `https://modifiedllb.onrender.com/user/address/delete/${id}`,
        { headers }
      );
      fetchshippingDetails();
    } catch (error) {
      console.error("Error deleting address:", error);
      alert("Error deleting address. Please try again.");
    }
  };

  // Handle adding a new address
  const handleAddNewAddress = () => {
    resetForm(); // Reset form for new address
    setIsEditing(false); // Set editing to false for adding a new address
    setShowForm(true); // Show the form for adding a new address
  };

  // Handle cancelling the form
  const handleCancel = () => {
    resetForm(); // Reset form
    setShowForm(false); // Hide the form
    setSelectedAddressId(""); // Clear selected address
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.formTitle}>
        {isEditing ? "Edit Address" : "Where Would You Like to Send This Gift?"}
      </h2>

      {!showForm && ( // Hide address list when form is visible
        <>
          {/* Display saved addresses */}
          <div className={styles.addressList}>
            <div className={styles.card_heading}>
              <h3>Select Shipping Address</h3>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddNewAddress}
                className={styles.addNewButton} // Add styling class if needed
              >
                Add
              </Button>
            </div>

            {shippingDetails.length === 0 ? (
              <p>No shipping addresses found. Please add one.</p>
            ) : (
              <RadioGroup
              value={selectedAddressId}
              onChange={handleSelectAddress}
              className={styles.radioGroup}
            >
              {shippingDetails?.map((address) => (
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
            )}
          </div>
        </>
      )}

      {showForm && (
        <div className={styles.form}>
          <Grid container spacing={2}>
            {/* First Name */}
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

            {/* Last Name */}
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

            {/* Company */}
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

            {/* Address Line 1 */}
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

            {/* Address Line 2 */}
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

            {/* City */}
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

            {/* Post Code */}
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

            {/* Country - Fixed to US and Disabled */}
            <Grid item xs={12} sm={6}>
              <FormControl
                fullWidth
                variant="outlined"
                // No need to validate country since it's fixed
                className={styles.formField}
              >
                <InputLabel>Country *</InputLabel>
                <Select
                  name="country"
                  value={formData.country}
                  // onChange={handleCountryChange} // Removed since country is fixed
                  label="Country *"
                  required
                  disabled // Disable the country select field
                >
                  {countries.map((country) => (
                    <MenuItem key={country.isoCode} value={country.isoCode}>
                      {country.name}
                    </MenuItem>
                  ))}
                </Select>
                {/* No error message needed since it's fixed */}
              </FormControl>
            </Grid>

            {/* State */}
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

            {/* Mobile */}
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

            {/* Form Buttons */}
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
        </div>
      )}
    </div>
  );
};

export default ShippingAddressForm;
