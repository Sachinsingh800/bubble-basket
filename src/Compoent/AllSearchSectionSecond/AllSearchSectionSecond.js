import React, { useEffect, useState } from "react";
import style from "./AllSearchSectionSecond.module.css";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getAllProduct } from "../Apis/Apis";

function AllSearchSectionSecond() {
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { search } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response = await getAllProduct();
        let data = response?.data;
        setProductData(data);
        filterProducts(data, search);
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search]);

  const filterProducts = (data, searchTerm) => {
    const searchLower = searchTerm.toLowerCase().replace(/-/g, " ");
    const filtered = data.filter((product) =>
      product?.productBlog?.intro?.toLowerCase().includes(searchLower)
    );
    setFilteredData(filtered);
  };

  const formatTitleForUrl = (title) => {
    return title.replace(/\s+/g, "-").replace(/:/g, "");
  };

  const handleNavigate = (title) => {
    window.location.href = `/Product/${formatTitleForUrl(title)}`;
  };

  const generateHelmet = (product) => (
    <Helmet key={product.id}>
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
        href={`https://www.luxurybubblebasket.com/${search}`}
      />
      <script type="application/ld+json">
        {`
        {
          "@context": "http://schema.org",
          "@type": "ItemList",
          "name": "Products in ${search}",
          "itemListElement": [
            ${filteredData
              .map(
                (product, index) => `
              {
                "@type": "Product",
                "position": ${index + 1},
                "url": "URL_TO_PRODUCT_PAGE",
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
            `
              )
              .join(",")}
          ]
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
          {filteredData.length === 0 ? (
            <div>No products found</div>
          ) : (
            filteredData.map((product, index) => (
              <React.Fragment key={product.id}>
                {generateHelmet(product)}
                <div
                  className={
                    index % 4 === 3
                      ? style.inner_container1
                      : style.inner_container
                  }
                  onClick={() => handleNavigate(product.title)}
                >
                  <div className={style.add_box_img}>
                    <img
                      src={product.productImg[0]?.url}
                      alt={product.title}
                      title={product.title}
                      loading="lazy"
                      width="auto"
                      height="auto"
                    />
                  </div>
                  <span className={style.product_title}>{product.title}</span>
                  <p>★★★★✰</p>
                  <span>
                    <strong>${product.price}</strong>
                  </span>
                </div>
              </React.Fragment>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default AllSearchSectionSecond;
