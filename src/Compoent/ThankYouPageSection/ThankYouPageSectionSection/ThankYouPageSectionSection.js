import React from "react";
import style from "./ThankYouPageSectionSection.module.css";

function ThankYouPageSectionSection() {
  // Sample data (Replace this with your actual data)
  const orderData = JSON.parse(localStorage.getItem("checkoutFormData"));

  const { formData, orderDetails, date, orderId } = orderData;

  const calculateTotal = () => {
    let total = 0;
    orderDetails.forEach((item) => {
      total += parseFloat(item.subTotal);
    });
    return total.toFixed(2);
  };

  return (
    <div className={style.main}>
      <div className={style.thank_you}>
        <h2>Checkout</h2>
        <p>Thank you. Your order has been received.</p>
        <div>
          <strong>ORDER NUMBER:</strong>{orderId}
        </div>
        <div>
          <strong>DATE:</strong> {date}
        </div>
        <div>
          <strong>TOTAL:</strong> £{calculateTotal()}
        </div>
        <div>
          <strong>PAYMENT METHOD:</strong> {formData.paymentMethod}
        </div>
        <p>Pay with cash upon delivery.</p>
      </div>
      <div className={style.order_details}>
        <h3>Order details</h3>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.map((item, index) => (
              <tr key={index}>
                <td>
                  {item.productName} × {item.quantity}
                </td>
                <td>£{item.subTotal}</td>
              </tr>
            ))}
            <tr>
              <td>Subtotal:</td>
              <td>£{calculateTotal()}</td>
            </tr>
            <tr>
              <td>Payment method:</td>
              <td>{formData.paymentMethod}</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>£{calculateTotal()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ThankYouPageSectionSection;
