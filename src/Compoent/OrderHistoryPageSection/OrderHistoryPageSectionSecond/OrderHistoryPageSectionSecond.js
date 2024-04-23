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
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Subtotal</th>
            <th>View All </th>
          </tr>
        </thead>
        <tbody>
          {orderHistory.map((order, index) => (
            <tr key={index}>
              <td>{order.date}</td>
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
              <td>${order.orderDetails[0].subTotal}</td>
              <td><a href={`/OrderDetail/${order.orderId}`}>view</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderHistoryPageSectionSecond;
