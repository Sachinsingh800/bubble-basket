import React, { useEffect, useState } from "react";
import style from "./OderDetailSectionSecond.module.css";
import { useParams } from "react-router-dom";
import { getAllOrdersHistory } from "../../Apis/Apis";

function OderDetailSectionSecond() {
  const { id } = useParams();
  const [orderData, setOrders] = useState([]);

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

  const selectedOrder = orderData.find((item) => item._id === id);
  
  if (!selectedOrder) {
    return <div className={style.main}>Loading...</div>;
  }

  return (
    <div className={style.main}>
      <h2>Order Detail</h2>
      <div className={style.billing_info_box}>
        <div className={style.order_info}>
          <h3>Order Information</h3>
          <p><strong>Order ID:</strong> {selectedOrder.orderId}</p>
          <p><strong>Order Date:</strong> {new Date(selectedOrder.orderDate).toLocaleDateString()}</p>
          <p><strong>Customer Name:</strong> {selectedOrder.shippingInfo.firstName} {selectedOrder.shippingInfo.lastName}</p>
          <p><strong>Email:</strong> {selectedOrder.shippingInfo.email}</p>
          <p><strong>Phone:</strong> {selectedOrder.shippingInfo.phone}</p>
          <p><strong>Payment Method:</strong> {selectedOrder.paymentMethod.cod ? 'Cash on Delivery' : 'Online Payment'}</p>
        </div>
        <div className={style.billing_info}>
          <h3>Billing Information</h3>
          <p><strong>Street Address:</strong> {selectedOrder.shippingInfo.streetAddress.houseNoAndStreetName}</p>
          <p><strong>Apartment:</strong> {selectedOrder.shippingInfo.streetAddress.apartment}</p>
          <p><strong>City:</strong> {selectedOrder.shippingInfo.townCity}</p>
          <p><strong>State/County:</strong> {selectedOrder.shippingInfo.stateCounty}</p>
          <p><strong>Postcode:</strong> {selectedOrder.shippingInfo.postcodeZIP}</p>
          <p><strong>Country:</strong> {selectedOrder.shippingInfo.country}</p>
        </div>
      </div>

      <h3>Product Information</h3>
      <div className={style.product_info}>
        <div className={style.product_item}>
          <div className={style.img_box}>
            <img src={selectedOrder.productImg.url} alt="Product" />
          </div>
          <div className={style.details}>
            <p><strong>Price:</strong> ${selectedOrder.totalPrice}</p>
            <p><strong>Total Items:</strong> {selectedOrder.totalItems}</p>
          </div>
        </div>
      </div>
      
      <h3>Additional Notes</h3>
      <div className={style.additional_notes}>
        <p>{selectedOrder.shippingInfo.orderNotes || 'No additional notes provided.'}</p>
      </div>
    </div>
  );
}

export default OderDetailSectionSecond;
