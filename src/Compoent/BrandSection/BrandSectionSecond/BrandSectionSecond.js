import React, { useEffect, useState } from "react";
import style from "./BrandSectionSecond.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getAllBrandProduct} from "../../Apis/Apis";

function BrandSectionSecond() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();

  function replaceHyphensWithSpaces(str) {
    return str.replace(/-/g, " ");
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllBrandProduct(replaceHyphensWithSpaces(category));

        setProductData(response.data);
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  const formatTitleForUrl = (title) => {
    return title.replace(/\s+/g, '-').replace(/:/g, '');
  };

  const handleNavigate = (title) => {
    window.location.href = `/Product/${formatTitleForUrl(title)}`;
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
              onClick={() => handleNavigate(product?.title)}
            >
              {product?.offer && <span className={style.offer_box}>new</span>}
              <div className={style.add_box_img}>
                <img src={product?.productImg[0]?.url} alt={product?.title}   title={product?.title} loading="lazy"  width="auto" height="auto"   />
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

export default BrandSectionSecond;
