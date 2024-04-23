import React from "react";
import style from "./OrderHistoryPageSectionSecond.module.css";

function OrderHistoryPageSectionSecond() {
  const orderHistory = JSON.parse(localStorage.getItem("orderhistory")) || [];

  return (
    <div className={style.main}>
      <h2>Order History</h2>
      <table className={style.order_table}>
        <thead>
          <tr>
            <th>Order Date</th>
            <th>Order ID</th>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {orderHistory.map((order, index) => (
            <tr key={index}>
              <td>{order.date}</td>
              <td>{order.orderId}</td>
              <td>
                <div className={style.img_box}>
                  <img
                    src={order.orderDetails[0].productImg}
                    alt={order.orderDetails[0].productName}
                  />
                </div>
              </td>
              <td>{order.orderDetails[0].productName}</td>
              <td>${order.orderDetails[0].price}</td>
              <td>{order.orderDetails[0].quantity}</td>
              <td>${order.orderDetails[0].subTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderHistoryPageSectionSecond;
