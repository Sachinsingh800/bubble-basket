import React, { useEffect, useState } from "react";
import style from "./UpdateAddressPageSection.module.css";
import { deleteAddress, getAddress, updateAddress } from "../../Apis/Apis";

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

  useEffect(() => {
    const address = JSON.parse(localStorage.getItem("allAdress") || []);
    setAllAddress(address);
    if (address.length > 0) {
      setAddressData(address[0]);
      setAddressId(address[0]._id);
      localStorage.setItem("selectedAddress", JSON.stringify(address[0]));
    }
  }, [update]);

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
      const response = await getAddress();
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
    localStorage.setItem("selectedAddress", JSON.stringify(selectedAddress));
  
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateAddress(addressData, addressId);
      handleUpdateAddress();
      console.log("Address updated successfully:", response);
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
      });
    }
  };

  return (
    <div className={style.main}>
      <div>
        <h1>All Addresses</h1>
        <br />
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
        </div>
        <div className={style.input_box}>
          <label htmlFor="setAsDefault">Set as Default</label>
          <input
            type="checkbox"
            id="setAsDefault"
            name="setAsDefault"
            checked={addressData?.setAsDefault}
            onChange={(e) =>
              setAddressData({ ...addressData, setAsDefault: e.target.checked })
            }
          />
        </div>
        <button type="submit">Update Address →</button>
      </form>
    </div>
  );
}

export default UpdateAddressPageSection;
