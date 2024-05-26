import React, { useEffect, useState } from "react";
import style from "./CheckoutPageSectionSecond.module.css";
import { nanoid } from "nanoid";
import { useRecoilState } from "recoil";
import { updateCart } from "../../Recoil/Recoil";
import { addAddress,  getAllAddress, getCheckout, orderPlace } from "../../Apis/Apis";

function CheckoutPageSectionSecond() {
  const [showCouponField, setShowCouponField] = useState(true);
  const [update, setUpdate] = useRecoilState(updateCart);
  const [couponError, setCouponError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: {
      houseNoAndStreetName: "",
      apartment: "",
    },
    townCity: "", // Updated field
    stateCounty: "", // Updated field
    postcodeZIP: "", // Updated field
    phone: "",
    email: "",
    orderNotes: "",
    setAsDefault: false,
  });
  localStorage.setItem("checkoutStatus", JSON.stringify(false));
  const cartData = JSON.parse(localStorage.getItem("checkout")) || [];
  const selectedDataAddress = JSON.parse(localStorage.getItem("selectedAddress") || false)
    useEffect(() => {
    localStorage.setItem("checkoutStatus", JSON.stringify(false));
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOrder = async (e) => {
    e.preventDefault();
    try {
      const orderData = {
        promoCode: "",
        paymentMethod: {
          cod: formData?.paymentMethod === "cashOnDelivery", // Set payment method based on selection
          online: formData?.paymentMethod === "online", // Set payment method based on selection
        },
      };

      if (formData?.paymentMethod === "online") {
        orderData.paymentInfo = {
          id: "123456",
          status: "successful",
        };
      }

      // Send order data to server
      const response = await orderPlace(orderData);
    } catch (error) {
      // Handle unexpected errors
      console.error("An error occurred during form submission:", error);
      // Display an error message to the user
      // alert("An unexpected error occurred. Please try again later.");
    }
  };
  const afterAddresshandleOrder = async () => {

    try {
      const orderData = {
        promoCode: "",
        paymentMethod: {
          cod: formData?.paymentMethod === "cashOnDelivery", // Set payment method based on selection
          online: formData?.paymentMethod === "online", // Set payment method based on selection
        },
      };

      if (formData?.paymentMethod === "online") {
        orderData.paymentInfo = {
          id: "123456",
          status: "successful",
        };
      }

      // Send order data to server
      const response = await orderPlace(orderData);
    } catch (error) {
      // Handle unexpected errors
      console.error("An error occurred during form submission:", error);
      // Display an error message to the user
      // alert("An unexpected error occurred. Please try again later.");
    }
  };

  const handleSubmitAddress = async (e) => {
    e.preventDefault();
    try {
      const response = await addAddress(formData);
      console.log("Response from addAddress:", response.data); // Log the entire response object
    } catch (error) {
      // Handle unexpected errors
      console.error("An error occurred during form submission:", error);
      // Display an error message to the user
      // alert("An unexpected error occurred. Please try again later.");
      return;
    } finally {
      afterAddresshandleOrder()
    }
  };

  const handleShowCouponField = () => {
    setShowCouponField(!showCouponField);
  };

  const handleCouponCheck = async () => {
    try {
      const response = await getCheckout(formData?.coupon);
    } catch (error) {
      console.log(error);
    } finally {
      window.location.reload();
    }
  };

  const handleSelectAddress = (e) => {
    const { checked } = e.target;
    setIsChecked(checked);
  };

  const handleUpdateAddress = async () => {
    try {
      const response = await getAllAddress();
    } catch (error) {
      console.log(error);
    } finally {
      setUpdate(update + 1);
    }
  };

  useEffect(() => {
    handleUpdateAddress()
    if (isChecked) {
      const selectedAddress = JSON.parse(
        localStorage.getItem("selectedAddress")
      );
      setFormData(selectedAddress);
      localStorage.setItem("ad_id", JSON.stringify(true));
    } else {
      // Handle the case when the default address is unchecked
      // For example, you may want to clear the form data
      setFormData({
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
      localStorage.setItem("ad_id", JSON.stringify(false));
    }
  }, [isChecked]);

  return (
    <div className={style.main}>
      <form  className={style.form}>
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
          {couponError && <span style={{ color: "red" }}>{couponError}</span>}
          <div>
            <label htmlFor="coupon">
              If you have a coupon code, please apply it below.
            </label>
            <input
              type="text"
              id="coupon"
              name="coupon"
              value={formData?.coupon}
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
            {selectedDataAddress  &&
                       <div className={style.add_select}>
                       <label>Default Address</label>
                       <input
                         type="radio"
                         checked={isChecked}
                         onChange={handleSelectAddress}
                       />
                     </div>
            }
 
            <div className={style.form_group}>
              <label htmlFor="firstName">First name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData?.firstName}
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
                value={formData?.lastName}
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
                value={formData?.companyName}
                onChange={handleChange}
              />
            </div>
            <div className={style.form_group}>
              <label htmlFor="country">Country / Region *</label>
              <select
                id="country"
                name="country"
                value={formData?.country}
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
              <label htmlFor="streetAddress.houseNoAndStreetName">
                Street address *
              </label>
              <input
                type="text"
                id="streetAddress.houseNoAndStreetName"
                name="streetAddress.houseNoAndStreetName"
                value={formData?.streetAddress?.houseNoAndStreetName}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    streetAddress: {
                      ...prevData.streetAddress,
                      houseNoAndStreetName: e.target.value,
                    },
                  }))
                }
                required
              />
            </div>
            <div className={style.form_group}>
              <label htmlFor="streetAddress.apartment">
                Apartment, suite, unit, etc. (optional)
              </label>
              <input
                type="text"
                id="streetAddress.apartment"
                name="streetAddress.apartment"
                value={formData?.streetAddress?.apartment}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    streetAddress: {
                      ...prevData.streetAddress,
                      apartment: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div className={style.form_group}>
              <label htmlFor="city">Town / City *</label>
              <input
                type="text"
                id="city"
                name="townCity"
                value={formData?.townCity}
                onChange={handleChange}
                required
              />
            </div>
            <div className={style.form_group}>
              <label htmlFor="stateCounty">County (optional)</label>
              <input
                type="text"
                id="stateCounty"
                name="stateCounty"
                value={formData?.stateCounty}
                onChange={handleChange}
              />
            </div>
            <div className={style.form_group}>
              <label htmlFor="postcodeZIP">postcodeZIP *</label>
              <input
                type="text"
                id="postcodeZIP"
                name="postcodeZIP"
                value={formData?.postcodeZIP}
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
                value={formData?.phone}
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
                value={formData?.email}
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
                value={formData?.orderNotes}
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
              <div className={style.headers}>
                <span>PRODUCT</span>
                <span className={style.subtotal_box}>SUBTOTAL</span>
              </div>
            </div>

            {cartData.productsData.map((item, index) => (
              <div key={index} className={style.order_item}>
                <div className={style.product_item}>
                  <span>
                    {item?.Product_category} x{" "}
                    <strong>{item?.Product_quantity}</strong>
                  </span>
                  <span className={style.calculate_}>
                    ${item?.productTotal}
                  </span>
                </div>
              </div>
            ))}
            <div className={style.order_item}>
              <div className={style.product_item}>
                <span>SUBTOTAL</span>
                <span className={style.calculate_}>
                  ${cartData?.allProductTotal}
                </span>
              </div>
            </div>
            <div className={style.order_item}>
              <div className={style.product_item}>
                <span>
                  Delivery Fee Per Item $20(Delivery May take 2 to 4 days):
                </span>
                <span className={style.calculate_}>
                  ${cartData?.totalShipping}
                </span>
              </div>
            </div>
            <div className={style.order_item}>
              <div className={style.product_item}>
                <span>Tax ({cartData?.taxPercent}%):</span>
                <span className={style.calculate_}>${cartData?.totalTax}</span>
              </div>
            </div>
            {cartData?.promoDiscount && (
              <div className={style.order_item}>
                <div className={style.product_item}>
                  <span>
                    Coupon Discount({cartData?.couponDiscountPercent}%):
                  </span>
                  <span className={style.calculate_}>
                    ${cartData?.promoDiscount}
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
                  <span>${cartData?.totalPrice}</span>
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
        <br />
        {isChecked ?  <button onClick={handleOrder }>PLACE ORDER →</button> :  <button onClick={handleSubmitAddress}>PLACE ORDER →</button> }

      </form>
    </div>
  );
}

export default CheckoutPageSectionSecond;
