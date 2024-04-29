import React, { useEffect, useState } from "react";
import style from "./CartPageSectionSecond.module.css";
import { updateCart } from "../../Recoil/Recoil";
import { useRecoilState } from "recoil";
import { AddtoCart, getCheckout } from "../../Apis/Apis";

function CartPageSectionSecond() {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useRecoilState(updateCart);
  const loginStatus = JSON.parse(localStorage.getItem("isLoggedIn") || false);
  const [totalPrice, setTotalPrice] = useState(0); // State to store the total price

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    if (cartData) {
      setData(cartData);
      calculateTotalPrice(cartData); // Calculate total price when cart data changes
    }
  }, [update]);

  const handleQuantityChange = (index, quantity) => {
    const updatedData = [...data];
    updatedData[index] = { ...updatedData[index], quantity: quantity };
    setData(updatedData);
    localStorage.setItem("cartData", JSON.stringify(updatedData));
    setUpdate(update + 1);
    calculateTotalPrice(updatedData); // Recalculate total price
  };

  const handleRemoveProduct = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
    localStorage.setItem("cartData", JSON.stringify(updatedData));
    setUpdate(update + 1);
    calculateTotalPrice(updatedData); // Recalculate total price
  };

  const calculateSubtotal = () => {
    return data
      .reduce((total, item) => {
        return total + parseFloat(item.price) * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const calculateTotal = () => {
    return totalPrice.toFixed(2);
  };

  const calculateTotalPrice = (cartData) => {
    const total = cartData.reduce((total, item) => {
      return total + parseFloat(item.price) * item.quantity;
    }, 0);
    setTotalPrice(total); // Update total price state
    localStorage.setItem("totalPrice", total.toFixed(2)); // Store total price in localStorage
  };


  
  const handleCheckoutOrder =async()=>{
    try{
     const response= await getCheckout()
    }catch(error){
      console.log(error)
    }
   }

  const handleFilterCheckoutData = () => {
    localStorage.setItem("cartData", JSON.stringify(data));
    setUpdate(update + 1);
    if (loginStatus) {
      handleCheckoutOrder()
    } else {
      localStorage.setItem("checkout", JSON.stringify(true));
      window.location.href = "/Login";
    }
  };

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
          <div key={item._id} className={style.container}>
            <div className={style.first_box}>
              <span
                className={style.del_button}
                onClick={() => handleRemoveProduct(index)}
              >
                x
              </span>
              <div className={style.img_box}>
                <img src={item.productImg[0].url} alt={item.title} />
              </div>
              {item.title}
            </div>

            <div className={style.para}>$ {item.price}</div>

            <div>
              <input
                className={style.quantity_box}
                value={item.quantity}
                type="number"
                min="1"
                onChange={(e) =>
                  handleQuantityChange(index, parseInt(e.target.value))
                }
              />
            </div>

            <div className={style.para}>
              $ {(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))
      )}
      {data.length > 0 && (
        <>
          <div className={style.buttons_box}>
            <div>
              <input placeholder="Coupon Code" />
              <button>APPLY COUPON → </button>
            </div>
            <button className={style.updatebtn}>UPDATE CART → </button>
          </div>
          <div className={style.cart_container}>
            <h6>CART TOTALS</h6>
            <div className={style.cart_box}>
              <div className={style.first_box}>SUBTOTAL</div>
              <div>$ {calculateSubtotal()}</div>
            </div>
            <div className={style.cart_box}>
              <div className={style.first_box}>TOTAL</div>
              <div className={style.total_price}>$ {calculateTotal()}</div>
            </div>
          </div>
          <br />
          <div className={style.buttons_box2}>
            <button onClick={handleFilterCheckoutData}>
              PROCEED TO CHECKOUT →{" "}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPageSectionSecond;
