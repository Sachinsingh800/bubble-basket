import React from "react";
import style from "./ThankYouPageSectionSection.module.css";

function ThankYouPageSectionSection() {
  // Sample data (Replace this with your actual data)
  const orderDetail = JSON.parse(localStorage.getItem("orderData"));
  const cartData = JSON.parse(localStorage.getItem("checkout"));


  const handleReturnHome=()=>{
    localStorage.removeItem("orderData")
    localStorage.removeItem("address")
    localStorage.removeItem("checkout")
    localStorage.removeItem("totalPrice")
  }


  return (
    <div className={style.main}>
      <div className={style.thank_you}>
        <h2>Checkout</h2>
        <p>Thank you. Your order has been received.</p>
        <div>
          <strong>ORDER NUMBER:</strong> {orderDetail.orderId}
        </div>
        <div>
          <strong>DATE:</strong> {new Date(orderDetail.orderDate).toLocaleDateString()}
        </div>
        <div>
          <strong>TOTAL:</strong> $ {orderDetail?.totalPrice}
        </div>
        <div>
          <strong>PAYMENT METHOD:</strong> {orderDetail.paymentMethod.cod ? "Cash on Delivery" : "Online Payment"}
        </div>
        <p>Pay with cash upon delivery.</p>
      </div>
      <br/>
      <br/>
      <div className={style.order_summary}>
          <h4>YOUR ORDER</h4>
          <div>
            <div className={style.order_item}>
              <div className={style.header}>
                <span>PRODUCT</span>
                <span>SUBTOTAL</span>
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
        </div>
      <br />
      <a href="/" className={style.link}>
        <button className={style.btn_} onClick={handleReturnHome}>RETURN TO HOME →</button>
      </a>
    </div>
  );
}

export default ThankYouPageSectionSection;
