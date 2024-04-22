import React, { useEffect } from "react";
import style from "./CartPageSectionSecond.module.css";
import { useRecoilState } from "recoil"; // Import useRecoilState to update the Recoil atom
import { cartData } from "../../Recoil/Recoil";

function CartPageSectionSecond() {
  const [data, setData] = useRecoilState(cartData);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    if (cartData) {
      setData(cartData.map(item => ({
        ...item,
        subTotal: (parseFloat(item.price) * item.quantity).toFixed(2)
      })));
    }
  }, []);

  const handleQuantityChange = (index, quantity) => {
    const updatedData = [...data];
    updatedData[index] = { ...updatedData[index], quantity: quantity }; // Update the quantity property
    updatedData[index].subTotal = (
      parseFloat(updatedData[index].price) * quantity // Calculate subTotal without "$"
    ).toFixed(2);
    setData(updatedData); // Update the Recoil atom with the new data
  };

  const handleRemoveProduct = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData); // Update the Recoil atom with the new data
  };

  const calculateTotal = () => {
    let total = 0;
    data.forEach((item) => {
      total += parseFloat(item.subTotal); // Parse subTotal as float
    });
    return total.toFixed(2);
  };

  const handleFilterCheckoutData=()=>{
    localStorage.setItem("cartData", JSON.stringify(data));
    window.location.href="/CheckoutPage"
  }

  return (
    <div className={style.main}>
      {data.length > 0 && (
        <div className={style.header}>
          <p className={style.product}>PRODUCT</p>
          <p>PRICE</p>
          <p>QUANTITY</p>
          <p>SUBTOTAL</p>
        </div>
      )}

      {data.length === 0 ? (
        <div className={style.empty_cart}>
          <p>YOUR CART IS CURRENTLY EMPTY.</p>
          <a href="/">
            <button>RETURN TO SHOP →</button>
          </a>
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
                min="1" // Set a minimum value for quantity
                onChange={(e) =>
                  handleQuantityChange(index, parseInt(e.target.value))
                }
              />
            </div>

            <div className={style.para}>$ {item.subTotal}</div>
          </div>
        ))
      )}
      {data.length > 0 && (
        <>
          <div className={style.buttons_box}>
            <div>
              <input  placeholder="Coupon Code" />
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
      
              <button onClick={handleFilterCheckoutData}>PROCEED TO CHECKOUT → </button>

          </div>
        </>
      )}
    </div>
  );
}

export default CartPageSectionSecond;
