import React, { useEffect, useState } from "react";
import style from "./CartPageSectionSecond.module.css";
import { useRecoilState } from "recoil";
import {
  getCheckout,
  removeFromCart,
  updateItemQuantity,
} from "../../Apis/Apis";
import { addItemCart, updateCart } from "../../Recoil/Recoil";

function CartPageSectionSecond() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useRecoilState(updateCart);
  const loginStatus = JSON.parse(localStorage.getItem("isLoggedIn") || false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [coupon, setCoupon] = useState("");
  const cartData = JSON.parse(sessionStorage.getItem("checkout")) || [];
  const [productId, setProductId] = useState(null);
  const [productQuantity, setProductQuantity] = useState(0);
  const [updatesideCart, setupdatesideCart] = useRecoilState(addItemCart);

  useEffect(() => {
    const cartData = JSON.parse(sessionStorage.getItem("cartData"));
    if (cartData) {
      setData(cartData);
      calculateTotalPrice(cartData);
    }
  }, [update]);

  const handleQuantityChange = (index, quantity) => {
    setProductQuantity(quantity);
    if (quantity < 1) return;

    const updatedData = [...data];
    updatedData[index] = { ...updatedData[index], quantity: quantity };
    setData(updatedData);
    sessionStorage.setItem("cartData", JSON.stringify(updatedData));
    setUpdate(update + 1);
    calculateTotalPrice(updatedData);
  };

  const handleRemoveProduct = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
    sessionStorage.setItem("cartData", JSON.stringify(updatedData));
    setUpdate(update + 1);
    setupdatesideCart(updatesideCart + 7);
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

  useEffect(() => {
    handleCheckoutOrder();
  }, [loginStatus]);

  const calculateTotalPrice = (cartData) => {
    const total = cartData.reduce((total, item) => {
      return total + parseFloat(item.price) * item.quantity;
    }, 0);
    setTotalPrice(total);
    localStorage.setItem("totalPrice", total.toFixed(2) || null);
  };

  const handleCheckoutOrder = async () => {
    setLoading(true);
    try {
      await getCheckout();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setUpdate(update + 1);
    }
  };

  const handleCouponCheck = async () => {
    setLoading(true);
    try {
      await getCheckout(coupon);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setUpdate(update + 1);
    }
  };

  const removeItemFromtheCart = async (id) => {
    setLoading(true);
    try {
      await removeFromCart(id);
    } catch (error) {
      console.log(error);
    } finally {
      const updatedData = data.filter((item) => item._id !== id);
      setData(updatedData);
      sessionStorage.setItem("cartData", JSON.stringify(updatedData));
      setLoading(false);
      calculateTotalPrice(updatedData);
      handleCheckoutOrder();
      setUpdate(update + 5);
      setupdatesideCart(updatesideCart + 7);
    }
  };

  const handleQuantityOfproduct = async () => {
    setLoading(true);
    try {
      await updateItemQuantity(productId, productQuantity);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      handleCheckoutOrder();
    }
  };

  const handleFilterCheckoutData = (e) => {
    e.preventDefault();
    sessionStorage.setItem("cartData", JSON.stringify(data));
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
      {loading && <p key="">Loading...</p>}
      {!loading && (
        <>
     

          {data?.length === 0 ? (
            <div className={style.empty_cart}>
              <p>YOUR CART IS CURRENTLY EMPTY.</p>
              <a href="/">
                <button>RETURN TO SHOP →</button>
              </a>
            </div>
          ) : (
            <div className={style.cartTable}>
                    <table >
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => (
                  <tr key={item?.Product_id || index} className={style.container}>
                    <td className={style.first_box}>
                      <span
                        className={style.del_button}
                        onClick={() =>
                          removeItemFromtheCart(
                            item?.Product_id ? item?.Product_id : index
                          )
                        }
                      >
                        x
                      </span>
                      <div className={style.img_box}>
                        <img
                          src={
                            item?.Product_image
                              ? item?.Product_image
                              : item?.productImg[0]?.url
                          }
                          alt={
                            item?.Product_title ? item?.Product_title : item?.title
                          }
                        />
                      </div>
                      {item?.Product_title ? item?.Product_title : item?.title}
                    </td>
                    <td className={style.para}>
                      $ {item?.Product_price ? item?.Product_price : item?.price}
                    </td>
                    <td onMouseEnter={() => setProductId(item?.Product_id)}>
                      <input
                        className={style.quantity_box}
                        value={
                          item?.quantity ? item?.quantity : item?.Product_quantity
                        }
                        type="number"
                        min="1"
                        onChange={(e) =>
                          handleQuantityChange(index, parseInt(e.target.value))
                        }
                      />
                    </td>
                    <td className={style.para}>
                      ${" "}
                      {item?.productTotal
                        ? item?.productTotal
                        : (item?.price * item?.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
      
          )}

          {data?.length > 0 && (
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
                <button
                  className={style.updatebtn}
                  onClick={handleQuantityOfproduct}
                >
                  UPDATE CART →
                </button>
              </div>
              {loginStatus ? (
                <div className={style.order_summary}>
                  <h4>YOUR ORDER</h4>
                  <div>
                    <div className={style.order_item}>
                      <div className={style.headers}>
                        <span>PRODUCT</span>
                        <span className={style.subtotal_box}>SUBTOTAL</span>
                      </div>
                    </div>

                    {cartData?.productsData?.map((item, index) => (
                      <div
                        key={item.Product_id || index}
                        className={style.order_item}
                      >
                        <div className={style.product_item}>
                          <span>
                            {item?.Product_title} x{" "}
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
                          Delivery Fee Per Item $20(Delivery May take 2 to 4
                          days):
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
                    <div className={style.total_price}>
                      $ {calculateTotal()}
                    </div>
                  </div>
                </div>
              )}
              <br />
              <div className={style.buttons_box2}>
                <button onClick={(e) => handleFilterCheckoutData(e)}>
                  PROCEED TO CHECKOUT →
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default CartPageSectionSecond;
