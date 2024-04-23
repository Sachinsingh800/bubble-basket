import React, { useState } from "react";
import style from "./UpdateAddressPageSection.module.css";

function UpdateAddressPageSection() {
  const [addressData, setAddressData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address1: "",
    address2: "",
    city: "",
    postcode: "",
    country: "",
    region: "",
    mobileNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData({ ...addressData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, such as updating address on the backend
    console.log(addressData);
    // Clear the form fields
    setAddressData({
      firstName: "",
      lastName: "",
      company: "",
      address1: "",
      address2: "",
      city: "",
      postcode: "",
      country: "",
      region: "",
      mobileNo: "",
    });
  };

  return (
    <div className={style.main}>
      <h2>Edit Address</h2>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.input_box}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={addressData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className={style.input_box}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={addressData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className={style.input_box}>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={addressData.company}
            onChange={handleChange}
          />
        </div>
        <div className={style.input_box}>
          <label htmlFor="address1">Address 1</label>
          <input
            type="text"
            id="address1"
            name="address1"
            value={addressData.address1}
            onChange={handleChange}
          />
        </div>
        <div className={style.input_box}>
          <label htmlFor="address2">Address 2</label>
          <input
            type="text"
            id="address2"
            name="address2"
            value={addressData.address2}
            onChange={handleChange}
          />
        </div>
        <div className={style.input_box}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={addressData.city}
            onChange={handleChange}
          />
        </div>
        <div className={style.input_box}>
          <label htmlFor="postcode">Post Code</label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            value={addressData.postcode}
            onChange={handleChange}
          />
        </div>
        <div className={style.input_box}>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={addressData.country}
            onChange={handleChange}
          />
        </div>
        <div className={style.input_box}>
          <label htmlFor="region">Region / State</label>
          <input
            type="text"
            id="region"
            name="region"
            value={addressData.region}
            onChange={handleChange}
          />
        </div>
        <div className={style.input_box}>
          <label htmlFor="mobileNo">Mobile No.</label>
          <input
            type="text"
            id="mobileNo"
            name="mobileNo"
            value={addressData.mobileNo}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Address →</button>
      </form>
    </div>
  );
}

export default UpdateAddressPageSection;
