import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./OderDetailSectionSecond.module.css";
import { getAllOrdersHistory } from "../../Apis/Apis";

function OderDetailSectionSecond() {
  const { id } = useParams();
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    handleAllOrders();
  }, []);

  const handleAllOrders = async () => {
    try {
      const response = await getAllOrdersHistory();
      const selectedOrder = response.data.find((item) => item._id === id);
      setOrderData(selectedOrder);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  if (!orderData) {
    return <div className={style.main}>Loading...</div>;
  }

  function renderHTML(htmlString) {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  }
  return (
    <div className={style.main}>
      <h2>Order Detail</h2>
      <div className={style.billing_info_box}>
        <div className={style.order_info}>
          <h3>Order Information</h3>
          <p><strong>Order ID:</strong> {orderData?.orderId}</p>
          <p><strong>Order Date:</strong> {new Date(orderData?.orderDate).toLocaleDateString()}</p>
          <p><strong>Customer Name:</strong> {orderData?.shippingInfo?.firstName} {orderData?.shippingInfo?.lastName}</p>
          <p><strong>Email:</strong> {orderData?.shippingInfo?.email}</p>
          <p><strong>Phone:</strong> {orderData?.shippingInfo?.phone}</p>
          <p><strong>Payment Method:</strong> {orderData?.paymentMethod?.cod ? 'Cash on Delivery' : 'Online Payment'}</p>
        </div>
        <div className={style.billing_info}>
          <h3>Billing Information</h3>
          <p><strong>Street Address:</strong> {orderData?.shippingInfo?.streetAddress?.houseNoAndStreetName}</p>
          <p><strong>Apartment:</strong> {orderData?.shippingInfo?.streetAddress?.apartment}</p>
          <p><strong>City:</strong> {orderData?.shippingInfo?.townCity}</p>
          <p><strong>State/County:</strong> {orderData?.shippingInfo?.stateCounty}</p>
          <p><strong>Postcode:</strong> {orderData?.shippingInfo?.postcodeZIP}</p>
          <p><strong>Country:</strong> {orderData?.shippingInfo?.country}</p>
        </div>
      </div>

      <h3>Product Information</h3>
      {orderData.items.map((item) => (
        <div key={item?._id} className={style.product_info}>
          <div className={style.product_item}>
            <div className={style.img_box}>
              <img src={item?.ProductImg} alt="Product" />
            </div>
            <div className={style.details}>
              <p><strong>Product Title:</strong> {item?.Product_title}</p>
              <p><strong>Description:</strong> {renderHTML(item?.Product_description)}</p>
              <p><strong>Category:</strong> {item?.Product_category}</p>
              <p><strong>Price:</strong> ${item?.Product_price}</p>
              <p><strong>Quantity:</strong> {item?.Product_quantity}</p>
              <p><strong>Total Price:</strong> ${item?.Product_totalPrice}</p>
            </div>
          </div>
        </div>
      ))}
      <h3>Additional Notes</h3>
      <div className={style.additional_notes}>
        <p>{orderData?.shippingInfo?.orderNotes || 'No additional notes provided.'}</p>
      </div>
    </div>
  );
}

export default OderDetailSectionSecond;
