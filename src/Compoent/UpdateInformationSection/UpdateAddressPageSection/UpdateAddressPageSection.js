import React, { useEffect, useState } from "react";
import style from "./UpdateAddressPageSection.module.css";
import { deleteAddress, getAllAddress, updateAddress } from "../../Apis/Apis";
import Cookies from "js-cookie";

function UpdateAddressPageSection() {
  const [addressData, setAddressData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: {
      houseNoAndStreetName: "",
      apartment: "",
    },
    townCity: "",
    stateCounty: "",
    postcodeZIP: "",
    phone: "",
    email: "",
    orderNotes: "",
    setAsDefault: false,
  });
  const [allAddress, setAllAddress] = useState([]);
  const [update, setUpdate] = useState(0);
  const [addressId, setAddressId] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      window.location.href = "/login";
    }
    handleAllAddress();
  }, []);

  const handleAllAddress = async () => {
    try {
      const response = await getAllAddress();
      setAllAddress(response.data);
      sessionStorage.setItem("address", JSON.stringify(response.data[0]));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteAddress = async (id) => {
    try {
      const response = await deleteAddress(id);
      handleUpdateAddress();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateAddress = async () => {
    try {
      const response = await getAllAddress();
      setAllAddress(response.data);

    } catch (error) {
      console.log(error);
    } finally {
      setUpdate(update + 1);
    }
  };

  const handleAddressSelect = (selectedAddress) => {
    setAddressData(selectedAddress);
    setAddressId(selectedAddress._id);

    // Update localStorage with the selected address
    sessionStorage.setItem("address", JSON.stringify(selectedAddress));

    // Update allAddress state to mark the selected address as checked
    const updatedAllAddress = allAddress.map((item) => ({
      ...item,
      checked: item._id === selectedAddress._id,
    }));
    setAllAddress(updatedAllAddress);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData({ ...addressData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMsg = "";
    switch (name) {
      case "firstName":
      case "lastName":
        if (!/^[a-zA-Z\s]+$/.test(value)) {
          errorMsg = "Only letters and spaces are allowed.";
        }
        break;
      case "companyName":
        if (!/^[a-zA-Z0-9\s]+$/.test(value)) {
          errorMsg = "Only letters, numbers, and spaces are allowed.";
        }
        break;
      case "country":
        if (!/^[a-zA-Z\s]+$/.test(value)) {
          errorMsg = "Only letters and spaces are allowed.";
        }
        break;
      case "streetAddress.houseNoAndStreetName":
      case "streetAddress.apartment":
        if (!/^[a-zA-Z0-9\s]+$/.test(value)) {
          errorMsg = "Only letters, numbers, and spaces are allowed.";
        }
        break;
      case "townCity":
      case "stateCounty":
        if (!/^[a-zA-Z\s]+$/.test(value)) {
          errorMsg = "Only letters and spaces are allowed.";
        }
        break;
      case "postcodeZIP":
        if (!/^\d{5,6}$/.test(value)) {
          errorMsg = "Invalid postcode/ZIP format.";
        }
        break;
      case "phone":
        if (!/^\d{10}$/.test(value)) {
          errorMsg = "Invalid phone number format.";
        }
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errorMsg = "Invalid email format.";
        }
        break;
      case "orderNotes":
        if (!/^[a-zA-Z0-9\s]*$/.test(value)) {
          errorMsg = "Only letters, numbers, and spaces are allowed.";
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(addressData).forEach((key) => {
      const value = addressData[key];
      validateField(key, value);
    });
    setErrors(newErrors);
    return Object.keys(newErrors).every((key) => !newErrors[key]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await updateAddress(addressData, addressId);
      handleUpdateAddress();
    } catch (error) {
      console.log("Error updating address:", error);
    } finally {
      // Clear the form fields
      setAddressData({
        firstName: "",
        lastName: "",
        companyName: "",
        country: "",
        streetAddress: {
          houseNoAndStreetName: "",
          apartment: "",
        },
        townCity: "",
        stateCounty: "",
        postcodeZIP: "",
        phone: "",
        email: "",
        orderNotes: "",
        setAsDefault: false,
      });
    }
  };

  return (
    <div className={style.main}>
      <div>
        <h1>All Addresses</h1>
        <br />
        {allAddress.length === 0 && <p>There No address Added</p>}
        <div className={style.all_address}>
          {allAddress?.map((item) => (
            <div
              key={item._id}
              className={style.address_container}
              onClick={() => handleAddressSelect(item)}
            >
              <div>
                <div className={style.select_btn}>
                  <button onClick={() => handleDeleteAddress(item?._id)}>
                    Delete
                  </button>
                  <input
                    type="radio"
                    checked={item.checked}
                    onChange={() => handleAddressSelect(item)}
                  />
                </div>

                <div>
                  <strong>First Name:</strong>
                  <span>{item?.firstName}</span>
                </div>
                <div>
                  <strong>Last Name:</strong>
                  <span>{item?.lastName}</span>
                </div>
                <div>
                  <strong>Email:</strong>
                  <span>{item?.email}</span>
                </div>
                <div>
                  <strong>Phone:</strong>
                  <span>{item?.phone}</span>
                </div>
                <div>
                  <strong>Postcode/ZIP:</strong>
                  <span>{item?.postcodeZIP}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <h2>Edit Address</h2>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.input_box}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={addressData?.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className={style.error}>{errors.firstName}</p>}
        </div>
        <div className={style.input_box}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={addressData?.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className={style.error}>{errors.lastName}</p>}
        </div>
        <div className={style.input_box}>
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={addressData?.companyName}
            onChange={handleChange}
          />
          {errors.companyName && <p className={style.error}>{errors.companyName}</p>}
        </div>
        <div className={style.input_box}>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={addressData?.country}
            onChange={handleChange}
          />
          {errors.country && <p className={style.error}>{errors.country}</p>}
        </div>
        <div className={style.input_box}>
          <label htmlFor="streetAddress.houseNoAndStreetName">
            Street Address
          </label>
          <input
            type="text"
            id="streetAddress.houseNoAndStreetName"
            name="streetAddress.houseNoAndStreetName"
            value={addressData?.streetAddress?.houseNoAndStreetName}
            onChange={handleChange}
          />
          {errors["streetAddress.houseNoAndStreetName"] && (
            <p className={style.error}>
              {errors["streetAddress.houseNoAndStreetName"]}
            </p>
          )}
        </div>
        <div className={style.input_box}>
          <label htmlFor="streetAddress.apartment">Apartment</label>
          <input
            type="text"
            id="streetAddress.apartment"
            name="streetAddress.apartment"
            value={addressData?.streetAddress?.apartment}
            onChange={handleChange}
          />
          {errors["streetAddress.apartment"] && (
            <p className={style.error}>{errors["streetAddress.apartment"]}</p>
          )}
        </div>
        <div className={style.input_box}>
          <label htmlFor="townCity">Town/City</label>
          <input
            type="text"
            id="townCity"
            name="townCity"
            value={addressData?.townCity}
            onChange={handleChange}
          />
          {errors.townCity && <p className={style.error}>{errors.townCity}</p>}
        </div>
        <div className={style.input_box}>
          <label htmlFor="stateCounty">State/County</label>
          <input
            type="text"
            id="stateCounty"
            name="stateCounty"
            value={addressData?.stateCounty}
            onChange={handleChange}
          />
          {errors.stateCounty && <p className={style.error}>{errors.stateCounty}</p>}
        </div>
        <div className={style.input_box}>
          <label htmlFor="postcodeZIP">Postcode/ZIP</label>
          <input
            type="text"
            id="postcodeZIP"
            name="postcodeZIP"
            value={addressData?.postcodeZIP}
            onChange={handleChange}
          />
          {errors.postcodeZIP && <p className={style.error}>{errors.postcodeZIP}</p>}
        </div>
        <div className={style.input_box}>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={addressData?.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className={style.error}>{errors.phone}</p>}
        </div>
        <div className={style.input_box}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={addressData?.email}
            onChange={handleChange}
          />
          {errors.email && <p className={style.error}>{errors.email}</p>}
        </div>
        <div className={style.input_box}>
          <label htmlFor="orderNotes">Order Notes</label>
          <input
            type="text"
            id="orderNotes"
            name="orderNotes"
            value={addressData?.orderNotes}
            onChange={handleChange}
          />
          {errors.orderNotes && <p className={style.error}>{errors.orderNotes}</p>}
        </div>
        <button type="submit">Update Address →</button>
      </form>
    </div>
  );
}

export default UpdateAddressPageSection;
