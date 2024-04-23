import React from "react";
import style from "./ThankYouPageSectionSection.module.css";

function ThankYouPageSectionSection() {
  // Sample data (Replace this with your actual data)
  const orderData = {
    formData: {
      firstName: "sachin",
      lastName: "singh",
      companyName: "sas",
      country: "UK",
      streetAddress: "sasa",
      apartment: "asdad",
      city: "asdsa",
      county: "asdsa",
      postcode: "10001",
      phone: "8363434262",
      email: "admin@akszuluresh.com",
      coupon: "",
      orderNotes: "asdasds",
      paymentMethod: "online",
    },
    orderDetails: [
      {
        id: "0JVY6t38_KSampUP2uzaq",
        productImg: "/static/media/dom perignon lady gaga rose.1d973e459369d052011e.png",
        productCategory: "WINE",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        productName: "Cloudy Bay",
        productRating: 4,
        price: 79,
        quantity: 1,
        subTotal: "79.00",
      },
      {
        id: "FhkeuYFFpxOjMcZSKeLXd",
        productImg: "/static/media/dom perignon lady gaga rose.1d973e459369d052011e.png",
        productCategory: "WINE",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        productName: "Cakebread Cellars",
        productRating: 4,
        price: 199,
        quantity: 1,
        subTotal: "199.00",
      },
      {
        id: "ukGTxiHu1gf2LhdzZbRng",
        productImg: "/static/media/dom perignon lady gaga rose.1d973e459369d052011e.png",
        productCategory: "WINE",
        productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        productName: "Chimney Rock Stags Leap",
        productRating: 4,
        price: 99,
        quantity: 1,
        subTotal: "99.00",
      },
      {
        id: "b6oKzIM3ExgngDpIJn9Dh",
        productCategory: "HAND - PAINTED",
        productName: "HAND - PAINTED",
        productDescription: "BOTTLES",
        productImg: "/static/media/dom perignon lady gaga rose.1d973e459369d052011e.png",
        productRating: 4,
        price: 79,
        quantity: 3,
        subTotal: "237.00",
      },
    ],
  };

  const { formData, orderDetails } = orderData;

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
          <strong>ORDER NUMBER:</strong> 7398
        </div>
        <div>
          <strong>DATE:</strong> April 22, 2024
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
