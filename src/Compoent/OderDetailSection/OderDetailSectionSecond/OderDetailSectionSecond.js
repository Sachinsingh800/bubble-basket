import React from "react";
import style from "./OderDetailSectionSecond.module.css";
import { useParams } from "react-router-dom";

function OderDetailSectionSecond() {
  const { id } = useParams();
  const orderData = JSON.parse(localStorage.getItem("orderhistory"));

  const selectedOrder = orderData.find((item) => item.orderId.toString() === id);
  return (
    <div className={style.main}>
      <h2>Order Detail</h2>
      <div className={style.billing_info_box}>
      <div className={style.order_info}>
        <h3>Order Information</h3>
        <p><strong>Order ID:</strong> {selectedOrder.orderId}</p>
        <p><strong>Order Date:</strong> {selectedOrder.date}</p>
        <p><strong>Customer Name:</strong> {selectedOrder.formData.firstName} {selectedOrder.formData.lastName}</p>
        <p><strong>Email:</strong> {selectedOrder.formData.email}</p>
        <p><strong>Phone:</strong> {selectedOrder.formData.phone}</p>
        <p><strong>Payment Method:</strong> {selectedOrder.formData.paymentMethod}</p>
      </div>
      <div className={style.billing_info}>
        <h3>Billing Information</h3>
        <p><strong>Street Address:</strong> {selectedOrder.formData.streetAddress}</p>
        <p><strong>Apartment:</strong> {selectedOrder.formData.apartment}</p>
        <p><strong>City:</strong> {selectedOrder.formData.city}</p>
        <p><strong>County:</strong> {selectedOrder.formData.county}</p>
        <p><strong>Postcode:</strong> {selectedOrder.formData.postcode}</p>
        <p><strong>Country:</strong> {selectedOrder.formData.country}</p>
      </div>
      </div>


      <h3>Product Information</h3>
      <div className={style.product_info}>
  
        {selectedOrder.orderDetails.map((item, index) => (
          <div key={index} className={style.product_item}>
            <div className={style.img_box}>
              <img src={item.productImg} alt={item.productName} />
            </div>
            <div className={style.details}>
              <p><strong>Product Name:</strong> {item.productName}</p>
              <p><strong>Description:</strong> {item.productDescription}</p>
              <p><strong>Price:</strong> ${item.price}</p>
              <p><strong>Quantity:</strong> {item.quantity}</p>
              <p><strong>Subtotal:</strong> ${item.subTotal}</p>
            </div>
          </div>
        ))}
      </div>
      <h3>Additional Notes</h3>
      <div className={style.additional_notes}>
        <p>{selectedOrder.formData.orderNotes}</p>
      </div>
    </div>
  );
}

export default OderDetailSectionSecond;
