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
      <span className={style.calculate_}>${cartData?.totalTax}</span>
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