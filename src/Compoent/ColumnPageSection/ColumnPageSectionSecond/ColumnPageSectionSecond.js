import React, { useEffect, useState } from "react";
import style from "./ColumnPageSectionSecond.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function ColumnPageSectionSecond() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();

  console.log(category,"category")

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "https://wine-rnlq.onrender.com/admin/product/getAll";
        if (category) {
          url += `?category=${category}`;
        }
        const response = await axios.get(url);
        const { status, message, data } = response.data;
        if (status) {
          setProductData(data.slice(0, 8));
        } else {
          setError(message);
        }
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  const handleNavigate = (id) => {
    window.location.href = `/ProductPage/${id}`;
  };

  return (
    <div className={style.main}>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className={style.additional_box}>
          {productData.map((product, index) => (
            <div
              key={index}
              className={index === 3 ? style.inner_container1 : style.inner_container}
              onClick={() => handleNavigate(product._id)}
            >
              {product.offer && <span className={style.offer_box}>new</span>}
              <div className={style.add_box_img}>
                <img src={product.productImg[0]?.url} alt="product" />
              </div>
              <span>{product.category}</span>
              <span className={style.product}>{product.title}</span>
              <p>★★★★✰</p>
              <span>
                <strong>${product.price}</strong>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ColumnPageSectionSecond;
