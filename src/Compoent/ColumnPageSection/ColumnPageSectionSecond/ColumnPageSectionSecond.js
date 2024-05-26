import React, { useEffect, useState } from "react";
import style from "./ColumnPageSectionSecond.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getAllProduct } from "../../Apis/Apis";

function ColumnPageSectionSecond() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllProduct(category);

        setProductData(response.data);
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

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

export default ColumnPageSectionSecond;
