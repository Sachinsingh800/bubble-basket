import React, { useEffect, useState } from "react";
import style from "./CheckoutPageSectionSecond.module.css";
import { nanoid } from "nanoid";
import { useRecoilState } from "recoil";
import { updateCart } from "../../Recoil/Recoil";
import {
  addAddress,
  getAllAddress,
  getCheckout,
  getCheckoutCoupon,
  orderPlace,
} from "../../Apis/Apis";
import { Helmet } from "react-helmet";
import ShippingAddressForm from "../../LoginPageSection/LoginPageSectionSecond/ShippingAddressForm";

function CheckoutPageSectionSecond() {
  const [showCouponField, setShowCouponField] = useState(true);
  const [update, setUpdate] = useRecoilState(updateCart);
  const [onlinepayment, setOnlinePayment] = useState(false);
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
  const [isLoading, setIsLoading] = useState(false);
  sessionStorage.setItem("checkoutStatus", JSON.stringify(false));
  const cartData = JSON.parse(sessionStorage.getItem("checkout")) || [];
  useEffect(() => {
    if (cartData.productsData.length === 0) {
      window.location.href = "/cart";
    }
    sessionStorage.setItem("checkoutStatus", JSON.stringify(false));
  }, []);

  const handleSubmitAddress = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setIsLoading(true);
      if (isChecked) {
        window.location.href = "/Payment";
      } else {
        const response = await addAddress(formData);
        setIsLoading(false);
        if (response.status) {
          window.location.href = "/Payment";
        }
      }
    } catch (error) {
      setIsLoading(false);
      // Handle unexpected errors
      console.error("An error occurred during form submission:", error);
      // Display an error message to the user
    }
  };

  const handleShowCouponField = () => {
    setShowCouponField(!showCouponField);
  };
  const handleUpdateAddress = async () => {
    try {
      const response = await getAllAddress();
      sessionStorage.setItem("address", JSON.stringify(response.data[0]));
    } catch (error) {
      console.log(error);
    } finally {
      setUpdate(update + 1);
    }
  };

  useEffect(() => {
    handleUpdateAddress();
    if (isChecked) {
      const selectedAddress = JSON.parse(sessionStorage.getItem("address"));
      setFormData(selectedAddress);
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

  const handleOnlinePayment = () => {
    setOnlinePayment(true);
  };

  const handleCouponCheck = async () => {
    try {
      await getCheckoutCoupon(formData?.coupon);
    } catch (error) {
      console.log(error);
    } finally {
      setUpdate(update + 1);
    }
  };

  return (
    <div className={style.main}>
      <Helmet>
        <script type="text/javascript">
          {`
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:5146008,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
        </script>
      </Helmet>

      <form className={style.form}>
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
              style={{ fontSize: "16px" }}
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
        <ShippingAddressForm />
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
                    {item?.Product_title} x{" "}
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
          <br />
        </div>
        <br />
        <div className={style.payment_box}>
          <label>Online Payment</label>
        </div>
        <br />
        <button onClick={handleSubmitAddress} disabled={isLoading}>
          {isLoading ? "Loading..." : "PLACE ORDER →"}
        </button>
      </form>
    </div>
  );
}

export default CheckoutPageSectionSecond;
