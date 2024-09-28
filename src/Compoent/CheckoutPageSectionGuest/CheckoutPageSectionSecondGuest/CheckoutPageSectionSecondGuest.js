import React, { useEffect, useState } from "react";
import style from "./CheckoutPageSectionSecondGuest.module.css";
import { getCheckoutCoupon } from "../../Apis/Apis";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import BillingAddressFormGuest from "../../LoginPageSection/LoginPageSectionSecond/BillingAddressFormGuest/BillingAddressFormGuest";
import ShippingAddressFormGuest from "../../LoginPageSection/LoginPageSectionSecond/ShippingAddressFormGuest/ShippingAddressFormGuest";


function CheckoutPageSectionSecondGuest() {
  const [showCouponField, setShowCouponField] = useState(false); // Initially hidden
  const [couponError, setCouponError] = useState(""); // State for coupon error message
  const [coupon, setCoupon] = useState(""); // State for coupon input
  const [shippingDetails, setShippingDetails] = useState([]); // State for shipping addresses
  const [selectedAddressId, setSelectedAddressId] = useState(""); // State for selected address
  const [isProceedEnabled, setIsProceedEnabled] = useState(false); // State for proceed button
  const cartData = JSON.parse(sessionStorage.getItem("cartData")) || [];
  const navigate = useNavigate();

  // Fetch shipping details on component mount
  useEffect(() => {
    fetchShippingDetails();
  }, []);

  useEffect(() => {
    sessionStorage.setItem("checkoutStatus", JSON.stringify(false));
  }, []);

  // Fetch shipping details from the API
  const fetchShippingDetails = async () => {
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
        setShippingDetails(response.data.data);
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

  // Check if an address is selected and is set as default
  useEffect(() => {
    const isAddressValid = shippingDetails.some(
      (address) => address.setAsDefault
    );
    setIsProceedEnabled(isAddressValid);
  }, [shippingDetails]);

  // Toggle the coupon field visibility
  const handleShowCouponField = () => {
    setShowCouponField(!showCouponField);
  };

  // Handle coupon validation and API call
  const handleCouponCheck = async (e) => {
    e.preventDefault(); // Prevent the page from reloading
    try {
      const response = await getCheckoutCoupon(coupon); // API call
      if (!response.status) {
        setCouponError("Invalid coupon code."); // Set an error if the coupon is invalid
      } else {
        setCouponError(""); // Clear any previous errors
      }
    } catch (error) {
      console.log(error);
      setCouponError("Invalid coupon code."); // Handle unexpected errors
    }
  };

  const handleProceedToPayment = () => {
  const shippingData= JSON.parse( sessionStorage.getItem("shippingDetails"))  || []
    if(shippingData.length > 0){
      navigate("/payment-guest");
    }else{
      alert("please add shipping address")
    }

  };

  // Calculate totals
  const subtotal = cartData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const taxPercent = cartData?.taxPercent || 0;
  const totalTax = (subtotal * taxPercent) / 100;
  const promoDiscount = cartData?.promoDiscount || 0;
  const totalPrice = subtotal + totalTax - promoDiscount;

  return (
    <div className={style.main}>
      <form className={style.form} onSubmit={handleCouponCheck}>
        <div className={style.coupon_box}>
          <span>Have a coupon? </span>
          <span onClick={handleShowCouponField}>
            Click here to enter your code
          </span>
        </div>

        <div
          className={style.coupon_field}
          style={{
            height: showCouponField ? "200px" : "0", // Change the height based on whether it's hidden or not
            overflow: "hidden",
            transition: "height 0.3s ease",
            marginTop: "20px",
          }}
        >
          {couponError && <span style={{ color: "red" }}>{couponError}</span>}
          <div>
            <label htmlFor="coupon">
              If you have a coupon code, please apply it below.
            </label>
            <input
              style={{ fontSize: "16px" }}
              type="text"
              id="coupon"
              name="coupon"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Coupon Code"
            />
          </div>
          <button type="submit">APPLY COUPON →</button>
        </div>

        <br />
        <div className={style.grid_container}>
          <BillingAddressFormGuest  />
          <ShippingAddressFormGuest />
        </div>
        <br/>
        <div className={style.order_notes}>
          <label htmlFor="orderNotes">Order Notes (optional)</label>
          <textarea
            id="orderNotes"
            name="orderNotes"
            rows="4"
            placeholder="Any special requests or notes for your order."
            style={{padding:"10px"}}
          />
        </div>
        <br />
        <div className={style.order_summary}>
          <h4>YOUR ORDER</h4>
          <div>
            <div className={style.order_item}>
              <div className={style.headers}>
                <span>PRODUCT</span>
                <span className={style.subtotal_box}>SUBTOTAL</span>
              </div>
            </div>

            {cartData.map((item, index) => (
              <div key={index} className={style.order_item}>
                <div className={style.product_item}>
                  <span>
                    {item?.title} x <strong>{item?.quantity}</strong>
                  </span>
                  <span className={style.calculate_}>
                    ${item?.price * item?.quantity}
                  </span>
                </div>
              </div>
            ))}

            <div className={style.order_item}>
              <div className={style.product_item}>
                <span>SUBTOTAL</span>
                <span className={style.calculate_}>${subtotal}</span>
              </div>
            </div>

            <div className={style.order_item}>
              <div className={style.product_item}>
                <span>Tax ({taxPercent}%):</span>
                <span className={style.calculate_}>${totalTax}</span>
              </div>
            </div>

            {promoDiscount > 0 && (
              <div className={style.order_item}>
                <div className={style.product_item}>
                  <span>
                    Coupon Discount({cartData?.couponDiscountPercent}%):
                  </span>
                  <span className={style.calculate_}>
                    -${promoDiscount}
                  </span>
                </div>
              </div>
            )}

            <div className={style.order_item}>
              <div className={style.product_item}>
                <strong>
                  <span>TOTAL</span>
                </strong>
                <strong className={style.calculate_}>
                  <span>${totalPrice.toFixed(2)}</span>
                </strong>
              </div>
            </div>
          </div>
          <br />
        </div>
        <br />
        <div className={style.payment_box}>
          <label>Online Payment</label>
          <button
            type="button"
            onClick={handleProceedToPayment}
            className={ style.enabledButton }
          >
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutPageSectionSecondGuest;
