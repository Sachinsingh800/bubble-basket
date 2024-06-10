import React from "react";
import style from "./ThankYouPageSectionSection.module.css";

function ThankYouPageSectionSection() {
  // Get the order data from local storage
  const checkPayment = JSON.parse(sessionStorage.getItem("orderData"));
  // Check if payment method is online or cash on delivery and set order detail accordingly
  const orderDetail = checkPayment?.status ? checkPayment.data : checkPayment;

  // Function to handle returning to home and clearing local storage
  const handleReturnHome = () => {
    sessionStorage.removeItem("orderData");
    sessionStorage.removeItem("address");
    sessionStorage.removeItem("checkout");
  };

  return (
    <div className={style.main}>
      <div className={style.thank_you}>
        <h2>Checkout</h2>
        <p>Thank you. Your order has been received.</p>
        <div>
          <strong>ORDER NUMBER:</strong> {orderDetail.orderId}
        </div>
        <div>
          <strong>DATE:</strong>{" "}
          {new Date(orderDetail.orderDate).toLocaleDateString()}
        </div>
        <div>
          <strong>TOTAL:</strong> $ {orderDetail?.totalPrice}
        </div>
        <div>
          <strong>PAYMENT METHOD:</strong>{" "}
          {orderDetail.paymentMethod && "Online Payment" }
        </div>
      </div>
      <br />
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

          {orderDetail.items &&
            orderDetail.items.map((item, index) => (
              <div key={index} className={style.order_item}>
                <div className={style.product_item}>
                  <span>
                    {item?.Product_title} x{" "}
                    <strong>{item?.Product_quantity}</strong>
                  </span>
                  <span className={style.calculate_}>
                    ${item?.Product_totalPrice}
                  </span>
                </div>
              </div>
            ))}
          <div className={style.order_item}>
            <div className={style.product_item}>
              <span>Tax ({orderDetail?.totalTax}%):</span>
              <span className={style.calculate_}>${orderDetail?.totalTax}</span>
            </div>
          </div>
          <div className={style.order_item}>
            <div className={style.product_item}>
              <span>SUBTOTAL</span>
              <span className={style.calculate_}>
                ${orderDetail?.totalPrice}
              </span>
            </div>
          </div>

          {orderDetail?.promoDiscount && (
              <div className={style.order_item}>
                <div className={style.product_item}>
                  <span>
                    Coupon Discount
                  </span>
                  <span className={style.calculate_}>
                    ${orderDetail?.promoDiscount}
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
                <span>${orderDetail?.totalPrice}</span>
              </strong>
            </div>
          </div>
        </div>
        <br />
      </div>
      <br />
      <a href="/" className={style.link}>
        <button className={style.btn_} onClick={handleReturnHome}>
          RETURN TO HOME →
        </button>
      </a>
    </div>
  );
}

export default ThankYouPageSectionSection;
