import React, { useState } from "react";
import style from "./CheckoutPageSectionSecond.module.css";
import { nanoid } from "nanoid";

function CheckoutPageSectionSecond() {
  const [showCouponField, setShowCouponField] = useState(true);
  const [couponError,setCouponError] = useState("")
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
    coupon: "",
    orderNotes: "",
    paymentMethod: "cashOnDelivery", // Default payment method
  });
  const cartData = JSON.parse(localStorage.getItem("cartData"));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate order ID
    const orderId = nanoid(); // Function to generate order ID
    // Get current date
    const currentDate = new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    // Store form data, order details, order ID, and current date in localStorage
    const orderData = {
      formData: formData,
      orderDetails: cartData,
      orderId: orderId,
      date: currentDate
    };
    localStorage.setItem("checkoutFormData", JSON.stringify(orderData));
    // You can handle form submission here, such as sending the data to the server
    console.log(formData);
    alert("Order placed successfully!");
    window.location.href = "/ThankYouPage";
  };


  const calculateTotal = () => {
    let total = 0;
    cartData.forEach((item) => {
      total += parseFloat(item.subTotal);
    });
    return total.toFixed(2);
  };

  const handleShowCouponField = () => {
    setShowCouponField(!showCouponField);
  };

const handleCouponCheck=(e)=>{
  e.preventDefault();
  if (formData.coupon !== "yes") {
    setCouponError(`Coupon ${formData.coupon} does not exist`)
  }else{
    setCouponError(`Coupon ${formData.coupon} apply successfully`)
  }
}


  return (
    <div className={style.main}>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.coupon_box}>
          <span>Have a coupon? </span>
          <span onClick={handleShowCouponField}>
            Click here to enter your code
          </span>
        </div>

        <div
          className={style.coupon_field}
          style={{
            height: showCouponField ? "0" : "200px", // Change the height based on whether it's hidden or not
            overflow: "hidden",
            transition: "height 0.3s ease",
            marginTop: "20px",
          }}
        >
          {couponError && <span style={{color:"red"}}>{couponError}</span>}
          <div>
            <label htmlFor="coupon">
              If you have a coupon code, please apply it below.
            </label>
            <input
              type="text"
              id="coupon"
              name="coupon"
              value={formData.coupon}
              onChange={handleChange}
              placeholder="Coupon Code"
            />
          </div>
          <button onClick={handleCouponCheck}>APPLY COUPON →</button>
        </div>

        <br />
        <br />
        <div className={style.user_detail_container}>
          <div className={style.billing_details}>
            <h4>BILLING DETAILS</h4>
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
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="">Select Country / Region</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                {/* Add more options as needed */}
              </select>
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
          <div className={style.additional_info_box}>
            <h4>ADDITIONAL INFORMATION</h4>
            <div>
              <label htmlFor="orderNotes">Order notes (optional)</label>
              <textarea
                id="orderNotes"
                name="orderNotes"
                value={formData.orderNotes}
                onChange={handleChange}
                placeholder="Notes about your order, e.g. special notes for delivery."
              />
            </div>
          </div>
        </div>
        <br />
        <div className={style.order_summary}>
        <h4>YOUR ORDER</h4>
        <div>
          <div className={style.order_item}>
            <div className={style.header}>
              <span>PRODUCT</span>
              <span>SUBTOTAL</span>
            </div>
          </div>

          {cartData.map((item, index) => (
            <div key={index} className={style.order_item}>
              <div className={style.product_item}>
                <span>
                  {item.productName} x <strong>{item.quantity}</strong>
                </span>
                <span className={style.calculate_}>${item.subTotal}</span>
              </div>
            </div>
          ))}
          <div className={style.order_item}>
            <div className={style.product_item}>
              <span>SUBTOTAL</span>
              <span className={style.calculate_}>${calculateTotal()}</span>
            </div>
          </div>
          <div className={style.order_item}>
            <div className={style.product_item}>
              <strong>
                <span>TOTAL</span>
              </strong>
              <strong className={style.calculate_}>
                <span>${calculateTotal()}</span>
              </strong>
            </div>
          </div>
        </div>
        <br />
        <p className={style.info_box}>
          Sorry, it seems that there are no available payment methods for your
          state. Please contact us if you require assistance or wish to make
          alternate arrangements.
        </p>
        <br />
        <p>
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
      </div>
        <br />
        <div className={style.payment_box}>
          {/* Payment method */}
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="cashOnDelivery"
              checked={formData.paymentMethod === "cashOnDelivery"}
              onChange={handleChange}
            />
            Cash on Delivery
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="online"
              checked={formData.paymentMethod === "online"}
              onChange={handleChange}
            />
            Online Payment
          </label>
        </div>
        <br/>
        <button type="submit">PLACE ORDER →</button>
      </form>
    </div>
  );
}

export default CheckoutPageSectionSecond;
