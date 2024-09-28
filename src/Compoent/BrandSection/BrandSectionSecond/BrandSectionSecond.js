import React, { useEffect, useState } from "react";
import style from "./BrandSectionSecond.module.css";
import { useParams } from "react-router-dom";
import { getAllBrandProduct } from "../../Apis/Apis";
import { Helmet } from "react-helmet";

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
        const response = await getAllBrandProduct(
          replaceHyphensWithSpaces(category)
        );
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
    return title.replace(/\s+/g, "-").replace(/:/g, "");
  };

  const handleNavigate = (title) => {
    window.location.href = `/Product/${formatTitleForUrl(title)}`;
  };

  const generateHelmet = (product) => (
    <Helmet key={product.title}>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>{product.title}</title>
      <meta
        name="description"
        content={`Buy ${product.title} for only $${product.price}`}
      />
      <link
        rel="canonical"
        href={`https://www.luxurybubblebasket.com/brand/${formatTitleForUrl(
          product.title
        )}`}
      />
    </Helmet>
  );

  return (
    <div className={style.main}>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className={style.additional_box}>
          {productData?.map((product, index) => (
            <React.Fragment key={index}>
              {generateHelmet(product)}
              <div
                className={
                  index % 4 === 3
                    ? style.inner_container1
                    : style.inner_container
                }
                onClick={() => handleNavigate(product?.title)}
              >
                {product?.productStatus !== "Available" && (
                  <span className={style.out_of_stock}>Out of Stock</span>
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
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

export default BrandSectionSecond;
