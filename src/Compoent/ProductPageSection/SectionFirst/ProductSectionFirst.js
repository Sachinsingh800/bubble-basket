import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./ProductSectionFirst.module.css"; // Import styles
import HomeIcon from "@mui/icons-material/Home";
import { getAllProduct } from "../../Apis/Apis";

function ProductSectionFirst() {
  const [productData, setProductData] = useState([]);
  const { title } = useParams();
  useEffect(() => {
    handleProductData();
  }, []);

  const formatTitleForUrl = (title) => {
    return title.replace(/\s+/g, '-').replace(/:/g, '');
  };

  const handleProductData = async () => {
    try {
      const response = await getAllProduct();
      // Show only the first three products
      setProductData(response.data);
    } catch (error) {
      console.error("Error getting product data:", error);
    }
  };
  const product = productData.find((item) => formatTitleForUrl(item?.title) === title);

  const displayCategory = product?.title || "GIFT BASKETS";

  // Function to generate breadcrumb list items
  const generateBreadcrumbs = () => {
    const breadcrumbs = [
      { title: <HomeIcon />, url: "/" }, // Assuming your home route is "/"
      { title: product?.title ? `/ ${displayCategory}` : ``, url: "" }, // Dynamic URL based on category
    ];

    return breadcrumbs.map((crumb, index) => (
      <li key={index} className={styles.breadcrumbItem}>
        {index < breadcrumbs.length - 1 ? (
          <Link to={crumb.url} className={styles.url}>
            {crumb.title}
          </Link>
        ) : (
          <span>{crumb.title}</span>
        )}
      </li>
    ));
  };

  return (
    <div className={styles.main}>
      <h1>{product?.title}</h1>
      {/* <ul className={styles.breadcrumbs}>{generateBreadcrumbs()}</ul> */}
    </div>
  );
}

export default ProductSectionFirst;
