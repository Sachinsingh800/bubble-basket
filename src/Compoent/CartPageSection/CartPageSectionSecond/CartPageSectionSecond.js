import React, { useState } from "react";
import style from "./CartPageSectionSecond.module.css";
import productImage from "../../Images/Moet & Chandon Imperial Brut Champagne With 8pc 1.png";

function CartPageSectionSecond() {
  const [data, setData] = useState([
    {
      productImg: productImage,
      productName: "Cloudy Bay",
      price: "$ 79.00",
      quantity: 1,
      subTotal: "$ 79.00",
    },
    {
      productImg: productImage,
      productName: "Cakebread Cellars",
      price: "$ 199.00",
      quantity: 1,
      subTotal: "$ 199.00",
    },
    {
      productImg: productImage,
      productName: "Chimney Rock Stags Leap",
      price: "$ 99.00",
      quantity: 1,
      subTotal: "$ 99.00",
    },
  ]);

  const handleQuantityChange = (index, quantity) => {
    const updatedData = [...data];
    updatedData[index].quantity = quantity;
    updatedData[index].subTotal = `$ ${(
      parseFloat(updatedData[index].price.slice(2)) * quantity
    ).toFixed(2)}`;
    setData(updatedData);
  };

  const handleRemoveProduct = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  return (
    <div className={style.main}>
      <div className={style.header}>
        <p className={style.product}>PRODUCT</p>
        <p>PRICE</p>
        <p>QUANTITY</p>
        <p>SUBTOTAL</p>
      </div>
      {data.map((item, index) => (
        <div key={index} className={style.container}>
          <div className={style.first_box}>
            <span
              className={style.del_button}
              onClick={() => handleRemoveProduct(index)}
            >
              x
            </span>
            <div className={style.img_box}>
              <img src={item.productImg} alt={item.productName} />
            </div>
            {item.productName}
          </div>

          <div className={style.para}>{item.price}</div>

          <div>
            <input
              className={style.quantity_box}
              value={item.quantity}
              type="number"
              onChange={(e) =>
                handleQuantityChange(index, parseInt(e.target.value))
              }
            />
          </div>

          <div className={style.para}>{item.subTotal}</div>
        </div>
      ))}
      <div className={style.buttons_box}>
        <div>
          <button>Coupon Code</button>
          <button>APPLY COUPON → </button>
        </div>
        <button>UPDATE CART → </button>
      </div>
    </div>
  );
}

export default CartPageSectionSecond;
