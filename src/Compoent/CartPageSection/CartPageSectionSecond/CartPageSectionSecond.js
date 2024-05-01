import React, { useEffect, useState } from "react";
import style from "./CartPageSectionSecond.module.css";
import { updateCart } from "../../Recoil/Recoil";
import { useRecoilState } from "recoil";
import { getCheckout, removeFromCart } from "../../Apis/Apis"; // Removed unnecessary import of AddtoCart
// Removed unused import of getCheckout from Recoil
// Removed unused import of updateCart from Recoil

function CartPageSectionSecond() {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useRecoilState(updateCart); // Removed unnecessary use of Recoil
  const loginStatus = JSON.parse(localStorage.getItem("isLoggedIn") || false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [coupon, setCoupon] = useState("");
  const cartData = JSON.parse(localStorage.getItem("checkout")) || [];

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    if (cartData) {
      setData(cartData);
      calculateTotalPrice(cartData);
    }
  }, [update]);

  const handleQuantityChange = (index, quantity) => {
    const updatedData = [...data];
    updatedData[index] = { ...updatedData[index], quantity: quantity };
    setData(updatedData);
    localStorage.setItem("cartData", JSON.stringify(updatedData));
    setUpdate(update + 1);
    calculateTotalPrice(updatedData);
  };

  const handleRemoveProduct = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
    localStorage.setItem("cartData", JSON.stringify(updatedData));
    setUpdate(update + 1);
    calculateTotalPrice(updatedData);
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

useEffect(()=>{
  handleCheckoutOrder()
},[])

  const calculateTotalPrice = (cartData) => {
    const total = cartData.reduce((total, item) => {
      return total + parseFloat(item.price) * item.quantity;
    }, 0);
    setTotalPrice(total);
    localStorage.setItem("totalPrice", total.toFixed(2));
  };

  const handleCheckoutOrder = async () => {
    try {
      const response = await getCheckout();
    } catch (error) {
      console.log(error);
    }finally{
      setUpdate(update + 1);
    }
  };



  const handleCouponCheck = async () => {
  
    try {
      const response = await getCheckout(coupon);
    } catch (error) {
      console.log(error);
    }finally{
      setUpdate(update + 1);
    }
  };

  const removeItemFromtheCart = async (id) => {
    try {
      const response = await removeFromCart(id);
    } catch (error) {
      console.log(error);
    } finally {
      const updatedData = data.filter((item) => item._id !== id);
      setData(updatedData);
      localStorage.setItem("cartData", JSON.stringify(updatedData));
      setUpdate(update + 1);
      calculateTotalPrice(updatedData);
      handleCheckoutOrder();
    }
  };

  const handleFilterCheckoutData = () => {
    localStorage.setItem("cartData", JSON.stringify(data));
    localStorage.setItem("checkoutStatus", JSON.stringify(true));
    setUpdate(update + 1);
    if (loginStatus) {
      handleCheckoutOrder();
    } else {
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
              {loginStatus ? (
                <span
                  className={style.del_button}
                  onClick={() => removeItemFromtheCart(item._id)}
                >
                  x
                </span>
              ) : (
                <span
                  className={style.del_button}
                  onClick={() => handleRemoveProduct(index)}
                >
                  x
                </span>
              )}

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
              <input
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Coupon Code"
              />
              <button onClick={handleCouponCheck}>APPLY COUPON → </button>
            </div>
            <button className={style.updatebtn}>UPDATE CART → </button>
          </div>
          {loginStatus ? (
            <div className={style.order_summary}>
              <h4>YOUR ORDER</h4>
              <div>
                <div className={style.order_item}>
                  <div className={style.header}>
                    <span>PRODUCT</span>
                    <span>SUBTOTAL</span>
                  </div>
                </div>

                {cartData.productsData.map((item, index) => (
                  <div key={index} className={style.order_item}>
                    <div className={style.product_item}>
                      <span>
                        {item?.Product_category} x{" "}
                        <strong>{item?.Product_quantity}</strong>
                      </span>
                      <span className={style.calculate_}>
                        ${item?.productTotal}
                      </span>
                    </div>
                  </div>
                ))}
                <div className={style.order_item}>
                  <div className={style.product_item}>
                    <span>SUBTOTAL</span>
                    <span className={style.calculate_}>
                      ${cartData?.allProductTotal}
                    </span>
                  </div>
                </div>
                <div className={style.order_item}>
                  <div className={style.product_item}>
                    <span>
                      Delivery Fee Per Item $20(Delivery May take 2 to 4 days):
                    </span>
                    <span className={style.calculate_}>
                      ${cartData?.totalShipping}
                    </span>
                  </div>
                </div>
                <div className={style.order_item}>
                  <div className={style.product_item}>
                    <span>Tax ({cartData?.taxPercent}%):</span>
                    <span className={style.calculate_}>
                      ${cartData?.totalTax}
                    </span>
                  </div>
                </div>
                {cartData?.promoDiscount && (
                  <div className={style.order_item}>
                    <div className={style.product_item}>
                      <span>
                        Coupon Discount({cartData?.couponDiscountPercent}%):
                      </span>
                      <span className={style.calculate_}>
                        ${cartData?.promoDiscount}
                      </span>
                    </div>
                  </div>
                )}
                <div className={style.order_item}>
                  <div className={style.product_item}>
                    <strong>
                      <span>TOTAL</span>
                    </strong>
                    <strong className={style.calculate_}>
                      <span>${cartData?.totalPrice}</span>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          ) : (
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
          )}
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
