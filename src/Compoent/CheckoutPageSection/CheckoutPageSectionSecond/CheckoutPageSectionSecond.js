import React, { useState } from "react";
import style from "./CheckoutPageSectionSecond.module.css";

function CheckoutPageSectionSecond() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    apartment: "",
    city: "",
    county: "",
    postcode: "",
    phone: "",
    email: "",
  });
  const cartData = JSON.parse(localStorage.getItem("cartData"));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, such as sending the data to the server
    console.log(formData);
  };

  const calculateTotal = () => {
    let total = 0;
    cartData.forEach((item) => {
      total += parseFloat(item.subTotal);
    });
    return total.toFixed(2);
  };

  return (
    <div className={style.main}>
      <form onSubmit={handleSubmit}>
        <div className={style.billing_details}>
          <h2>BILLING DETAILS</h2>
          <div className={style.form_group}>
            <label htmlFor="firstName">First name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.form_group}>
            <label htmlFor="lastName">Last name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.form_group}>
            <label htmlFor="companyName">Company name (optional)</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div className={style.form_group}>
            <label htmlFor="country">Country / Region *</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.form_group}>
            <label htmlFor="streetAddress">Street address *</label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.form_group}>
            <label htmlFor="apartment">
              Apartment, suite, unit, etc. (optional)
            </label>
            <input
              type="text"
              id="apartment"
              name="apartment"
              value={formData.apartment}
              onChange={handleChange}
            />
          </div>
          <div className={style.form_group}>
            <label htmlFor="city">Town / City *</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.form_group}>
            <label htmlFor="county">County (optional)</label>
            <input
              type="text"
              id="county"
              name="county"
              value={formData.county}
              onChange={handleChange}
            />
          </div>
          <div className={style.form_group}>
            <label htmlFor="postcode">Postcode *</label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.form_group}>
            <label htmlFor="phone">Phone *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.form_group}>
            <label htmlFor="email">Email address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <br />
        <div className={style.order_summary}>
          <h2>YOUR ORDER</h2>
          <div className={style.order_items}>
            <div className={style.header}>
              <p>PRODUCT</p>
              <p>SUBTOTAL</p>
            </div>
            {cartData.map((item, index) => (
              <div key={index} className={style.order_item}>
                <div className={style.product_item}>
                  <span>
                    {item.productName} x <strong>{item.quantity}</strong>
                  </span>
                  <span>${item.subTotal}</span>
                </div>
              </div>
            ))}
            <div className={style.order_item}>
              <p>SUBTOTAL</p>
              <p>${calculateTotal()}</p>
            </div>
            <div className={style.order_item}>
              <strong>
                <p>TOTAL</p>
              </strong>
              <strong>
                <p>${calculateTotal()}</p>
              </strong>
            </div>
          </div>
          <br />
          <p>
            Sorry, it seems that there are no available payment methods for your
            state. Please contact us if you require assistance or wish to make
            alternate arrangements. Your personal data will be used to process
            your order, support your experience throughout this website, and for
            other purposes described in our privacy policy.
          </p>
          <br />
          <button type="submit">PLACE ORDER</button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutPageSectionSecond;
