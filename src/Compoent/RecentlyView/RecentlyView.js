import React, { useEffect, useState } from "react";
import style from "./RecentlyView.module.css";
import { useParams } from "react-router-dom";

function RecentlyView() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    // Retrieve products from session storage
    const storedProducts =
      JSON.parse(sessionStorage.getItem("storedProducts")) || [];

    // Update state with retrieved products
    setProductData(storedProducts);

    // Set loading to false
    setLoading(false);
  }, []);

  const formatTitleForUrl = (title) => {
    return title.replace(/\s+/g, "-").replace(/:/g, "");
  };

  const handleNavigate = (title) => {
    window.location.href = `/Product/${formatTitleForUrl(title)}`;
  };

  const handleViewAll = () => {
    setShowAll(true);
  };

  const handleViewLess = () => {
    setShowAll(false);
  };

  return (
    <div className={style.main}>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>
          <div className={style.additional_box}>
            {(showAll ? productData : productData.slice(0, 4))?.map(
              (product, index) => (
                <div
                  key={index}
                  className={
                    index % 4 === 3
                      ? style.inner_container1
                      : style.inner_container
                  }
                  onClick={() => handleNavigate(product?.title)}
                >
                  {product?.offer && (
                    <span className={style.offer_box}>new</span>
                  )}
                  <div className={style.add_box_img}>
                    <img
                      src={product?.productImg[0]?.url}
                      alt={product?.title}
                      title={product?.title}
                      loading="lazy"
                      width="auto"
                      height="auto"
                    />
                  </div>
                  <span className={style.product_title}>{product?.title}</span>
                  <p>★★★★✰</p>
                  <span>
                    <strong>${product?.price}</strong>
                  </span>
                </div>
              )
            )}
          </div>
          <div className={style.button_container}>
            {!showAll && productData.length > 4 && (
              <button className={style.view_all_button} onClick={handleViewAll}>
                View All
              </button>
            )}
            {showAll && (
              <button
                className={style.view_all_button}
                onClick={handleViewLess}
              >
                View Less
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default RecentlyView;
