import React, { useState } from "react";
import style from "./CartPageSectionSecond.module.css";
import { cartData } from "../../Recoil/Recoil";
import { useRecoilState } from "recoil";



function CartPageSectionSecond() {
  const [data, setData] = useRecoilState(cartData);

  console.log(data)

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

  const calculateTotal = () => {
    let total = 0;
    data.forEach((item) => {
      total += item.subTotal; // Assuming subTotal is already a number
    });
    return total.toFixed(2);
  };

  return (
    <div className={style.main}>
      {data.length > 0  &&
           <div className={style.header}>
           <p className={style.product}>PRODUCT</p>
           <p>PRICE</p>
           <p>QUANTITY</p>
           <p>SUBTOTAL</p>
         </div>
      }
 
      {data.length === 0 ? (
        <div className={style.empty_cart}>
           <p>YOUR CART IS CURRENTLY EMPTY.</p>
           <a href="/"><button>RETURN TO SHOP →</button></a>
        </div>
       
      ) : (
        data.map((item, index) => (
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
        ))
      )}
      {data.length > 0 && (
        <>
          <div className={style.buttons_box}>
            <div>
              <button>Coupon Code</button>
              <button>APPLY COUPON → </button>
            </div>
            <button className={style.updatebtn}>UPDATE CART → </button>
          </div>
          <div className={style.cart_container}>
            <h6>CART TOTALS</h6>
            <div className={style.cart_box}>
              <div className={style.first_box}>SUBTOTAL</div>
              <div>$ {calculateTotal()}</div>
            </div>
            <div className={style.cart_box}>
              <div className={style.first_box}>TOTAL</div>
              <div className={style.total_price}>$ {calculateTotal()}</div>
            </div>
          </div>
          <br />
          <div className={style.buttons_box2}>
            <button>PROCEED TO CHECKOUT → </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPageSectionSecond;
