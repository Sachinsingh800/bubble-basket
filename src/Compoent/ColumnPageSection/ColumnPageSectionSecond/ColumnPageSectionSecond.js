import React, { useEffect, useState } from "react";
import style from "./ColumnPageSectionSecond.module.css"; // keep your module CSS for non-media query styles
import { useParams } from "react-router-dom";
import { getAllProduct } from "../../Apis/Apis";

function ColumnPageSectionSecond({ singleProductData }) {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await getAllProduct(category);
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

  const handleNavigate = (id) => {
    window.location.href = `/Product/${id}`;
  };

  const isMobile = window.innerWidth <= 600;

  const containerStyle = {
    height: "max-content",
    width: "100%",
    border: "1px #7b0128 solid",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "4rem",
    padding: "3rem 2rem",
  };

  const additionalBoxStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr 1fr",
    gap: isMobile ? "1rem" : "3rem",
  };

  const innerContainerStyle = {
    width: isMobile ? "28rem" : "13rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: isMobile ? "0" : "2rem 3rem 2rem 0rem",
    border: isMobile ? "1px #7b0128 solid" : "none",
    cursor: "pointer",
    height: isMobile ? "500px" : "auto",
    overflow: "hidden",
  };

  const addBoxImgStyle = {
    height: isMobile ? "320px" : "12rem",
    width: isMobile ? "230px" : "100%",
  };

  const imgStyle = {
    height: isMobile ? "320px" : "100%",
    width: isMobile ? "230px" : "100%",
  };

  const productTitleStyle = {
    height: "4.8rem",
    textAlign: "center",
    overflow: "hidden",
    fontSize: isMobile ? "1.4rem" : "inherit",
    width: isMobile ? "90%" : "inherit",
  };

  const offerBoxStyle = {
    position: "absolute",
    borderRadius: "50%",
    backgroundColor: "#7b0128",
    color: "white",
    marginTop: isMobile ? "-1.5rem" : "-2rem",
    marginRight: isMobile ? "-24rem" : "-10rem",
    height: "2rem",
    width: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Allura, cursive",
  };

  return (
    <div style={containerStyle}>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div style={additionalBoxStyle}>
          {productData?.map((product, index) => (
            <div
              key={index}
              style={innerContainerStyle}
              onClick={() => handleNavigate(product._id)}
            >
              {product?.offer && <span style={offerBoxStyle}>new</span>}
              <div style={addBoxImgStyle}>
                <img src={product?.productImg[0]?.url} alt="product" style={imgStyle} />
              </div>
              <span style={productTitleStyle}>{product?.title}</span>
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
