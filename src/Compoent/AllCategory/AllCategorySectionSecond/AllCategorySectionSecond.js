import React, { useEffect, useState } from "react";
import style from "./AllCategorySectionSecond.module.css";
import { useParams } from "react-router-dom";
import { getAllProduct } from "../../Apis/Apis";
import { Helmet } from "react-helmet";

function AllCategorySectionSecond() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();

  function replaceHyphensWithSpaces(str) {
    return str.replace(/-/g, " ");
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response = await getAllProduct(replaceHyphensWithSpaces(category));
        let data = response?.data;
        setProductData(data);
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
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>
        Wine Gift Baskets And Gift Sets with Rapid Delivery - Buy Online
      </title>
      <meta
        name="description"
        content="Our Wine Gift Baskets And Gift Sets, fit for all budgets & preferences of wine lovers. Order online & deliver wine baskets to your loved ones' doors today!"
      />
      <meta
        name="head title"
        content="Wine Gift Baskets And Gift Sets with Rapid Delivery - Buy Online"
      />
      <link
        rel="canonical"
        href={`https://www.luxurybubblebasket.com/${category}`}
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

export default AllCategorySectionSecond;
