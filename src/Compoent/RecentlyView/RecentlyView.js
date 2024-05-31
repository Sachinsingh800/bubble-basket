import React, { useEffect, useState } from "react";
import style from "./RecentlyView.module.css";
import { useParams } from "react-router-dom";

function RecentlyView() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    // Retrieve products from session storage
    const storedProducts = JSON.parse(sessionStorage.getItem("storedProducts")) || [];

    // Update state with retrieved products
    setProductData(storedProducts);

    // Set loading to false
    setLoading(false);
  }, []);

  const handleNavigate = (id) => {
    window.location.href = `/Product/${id}`;
  };

  return (
    <div className={style.main}>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className={style.additional_box}>
          {productData?.map((product, index) => (
            <div
              key={index}
              className={
                index % 4 === 3 ? style.inner_container1 : style.inner_container
              }
              onClick={() => handleNavigate(product._id)}
            >
              {product?.offer && <span className={style.offer_box}>new</span>}
              <div className={style.add_box_img}>
                <img src={product?.productImg[0]?.url} alt="product" />
              </div>
              <span className={style.product_title}>{product?.title}</span>
              <p>★★★★✰</p>
              <span>
                <strong>${product?.price}</strong>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentlyView;
