import React, { useEffect, useState } from "react";
import style from "./CheckoutPageSectionSecond.module.css";
import { getCheckoutCoupon } from "../../Apis/Apis";
import { Helmet } from "react-helmet";
import ShippingAddressForm from "../../LoginPageSection/LoginPageSectionSecond/ShippingAddressForm";
import BillingAddressForm from "../../LoginPageSection/LoginPageSectionSecond/BillingAddressForm";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function CheckoutPageSectionSecond() {
  const [showCouponField, setShowCouponField] = useState(false);
  const [couponError, setCouponError] = useState("");
  const [coupon, setCoupon] = useState("");
  const [cartData, setCartData] = useState(null);
  const [orderNotes, setOrderNotes] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem("checkoutStatus", JSON.stringify(false));
    const storedPromoCode = JSON.parse(sessionStorage.getItem("promocode"));
    setPromoCode(storedPromoCode || "");  // Set promo code if it exists
    fetchCartData(storedPromoCode);  // Pass promo code to the fetch function
  }, []);

  const fetchCartData = async (promoCode) => {
    try {
      const token = Cookies.get("token");
      const headers = {
        "x-auth-token": token,
        "Content-Type": "application/json",
      };

      // Conditionally build the URL based on promoCode
      const url = promoCode
        ? `https://modifiedllb.onrender.com/user/cart/checkout?promoCode=${promoCode}`
        : `https://modifiedllb.onrender.com/user/cart/checkout`;

      const response = await axios.get(url, { headers });

      if (response.status === 200) {
        const cart = response.data.data;
        if (cart.productsData.length === 0) {
          navigate("/cart");
        } else {
          setCartData(cart);
        }
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  const handleShowCouponField = () => {
    setShowCouponField(!showCouponField);
  };

  const handleCouponCheck = async (e) => {
    e.preventDefault();
    try {
      const response = await getCheckoutCoupon(coupon);
      if (!response.status) {
        setCouponError("Invalid coupon code.");
      } else {
        setCouponError("");
        setPromoCode(coupon);
        sessionStorage.setItem("promocode", JSON.stringify(coupon)); // Store promo code in sessionStorage
        fetchCartData(coupon);  // Update the cart after successful coupon application
      }
    } catch (error) {
      console.log(error);
      setCouponError("Invalid coupon code.");
    }
  };

  const handleProceedToPayment = () => {
    sessionStorage.setItem("orderNotes",JSON.stringify(orderNotes) );  // Store order notes in sessionStorage
    fetchShippingDetails();
  };

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
        navigate("/Payment");
      }
    } catch (error) {
      console.error("Error fetching shipping details:", error);
      alert("please add shipping address");
    }
  };

  return (
    <div className={style.main}>
      <Helmet>
        <script type="text/javascript">
          {`
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:5146008,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
        </script>
      </Helmet>

      <form className={style.form} onSubmit={handleCouponCheck}>
        <div className={style.coupon_box}>
          <span>Have a coupon? </span>
          <span onClick={handleShowCouponField}>
            Click here to enter your code
          </span>
        </div>

        {showCouponField && (
          <div className={style.coupon_field}>
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
        )}

        <br />
        <div className={style.grid_container}>
          <BillingAddressForm />
          <ShippingAddressForm />
        </div>

        <br />
        <div className={style.order_notes}>
          <label htmlFor="orderNotes">Order Notes (optional)</label>
          <textarea
            id="orderNotes"
            name="orderNotes"
            rows="4"
            placeholder="Any special requests or notes for your order."
            value={orderNotes}
            style={{padding:"10px"}}
            onChange={(e) => setOrderNotes(e.target.value)}
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

            {cartData?.productsData?.length ? (
              cartData.productsData.map((item, index) => (
                <div key={index} className={style.order_item}>
                  <div className={style.product_item}>
                    <span>
                      {item.Product_title} x{" "}
                      <strong>{item.Product_quantity}</strong>
                    </span>
                    <span className={style.calculate_}>
                      ${item.productTotal}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div>No products in the cart</div>
            )}

            <div className={style.order_item}>
              <div className={style.product_item}>
                <span>SUBTOTAL</span>
                <span className={style.calculate_}>
                  ${cartData?.allProductTotal || 0}
                </span>
              </div>
            </div>

            <div className={style.order_item}>
              <div className={style.product_item}>
                <span>Tax ({cartData?.taxPercent || 0}%):</span>
                <span className={style.calculate_}>
                  ${cartData?.totalTax || 0}
                </span>
              </div>
            </div>
            {cartData?.promoDiscount && (
              <div className={style.order_item}>
                <div className={style.product_item}>
                  <span>
                    Coupon Discount({cartData?.couponDiscountPercent}
                    %):
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
                  <span>${cartData?.totalPrice || 0}</span>
                </strong>
              </div>
            </div>
          </div>
        </div>

        <br />
        <div className={style.payment_box}>
          <label>Online Payment</label>
          <button type="button" onClick={handleProceedToPayment}>
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutPageSectionSecond;
