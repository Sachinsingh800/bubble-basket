import React, { useEffect, useState } from "react";
import style from "./OrderHistoryPageSectionSecond.module.css";
import { getAllOrdersHistory } from "../../Apis/Apis";

function OrderHistoryPageSectionSecond() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    handleAllOrders();
  }, []);

  const handleAllOrders = async () => {
    try {
      const response = await getAllOrdersHistory();
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  return (
    <div className={style.main}>
      <h2>Order History</h2>
      <table className={style.order_table}>
        <thead>
          <tr>
            <th>Order Date</th>
            <th>Product Image</th>
            <th>Price</th>
            <th>Total Items</th>
            <th>Total Price</th>
            <th>View All</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order?._id}>
              <td>{new Date(order?.orderDate).toLocaleDateString()}</td>
              <td>
                <div className={style.img_box}>
                  <img
                    src={order?.items[0]?.ProductImg} // Assuming the first item represents the order image
                    alt="Product"
                  />
                </div>
              </td>
              <td>${order?.totalPrice.toFixed(2)}</td>
              <td>{order?.totalItems}</td>
              <td>${order?.totalPrice.toFixed(2)}</td>
              <td>
                <a href={`/Order-Detail/${order?._id}`}>view</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderHistoryPageSectionSecond;
