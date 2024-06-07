import React, { useEffect, useState } from "react";
import style from "./ColumnPageSectionSecond.module.css";
import { useParams } from "react-router-dom";
import { getAllProduct } from "../../Apis/Apis";
import { Helmet } from "react-helmet";

function ColumnPageSectionSecond({ singleProductData }) {
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
        let response;
        if (category) {
          response = await getAllProduct(replaceHyphensWithSpaces(category));
        } else {
          response = await getAllProduct();
        }
        let data = response?.data;
        // Filter data by brand if brand is provided
        if (singleProductData?.brand) {
          const brandFilteredData = data?.filter(
            (product) => product?.brand === singleProductData?.brand
          );

          // If only one product is found, filter by price from all products
          if (brandFilteredData?.length === 1) {
            data = data?.filter(
              (product) => product?.price === singleProductData?.price
            );
          } else {
            data = brandFilteredData;
          }
        }

        setProductData(data);
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, singleProductData]);

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
      <title>{product.title}</title>
      <meta name="description" content={`Buy ${product.title} for only $${product.price}`} />
      <link
        rel="canonical"
        href={`https://www.luxurybubblebasket.com/Product/${formatTitleForUrl(product.title)}`}
      />
       <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "${product.title}",
            "image": "${product.productImg[0]?.url}",
            "description": "${product.description}",
            "offers": {
              "@type": "Offer",
              "price": "${product.price}",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          }
        `}
      </script>
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
                  index % 4 === 3 ? style.inner_container1 : style.inner_container
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

export default ColumnPageSectionSecond;
