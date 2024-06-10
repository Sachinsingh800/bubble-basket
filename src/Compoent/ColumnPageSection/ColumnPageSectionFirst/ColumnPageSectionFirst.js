import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./ColumnPageSectionFirst.module.css"; // Import styles
import HomeIcon from '@mui/icons-material/Home';

function ColumnPageSectionFirst() {
  const { category } = useParams();


  const displayCategory = category || "GIFT BASKETS";

  // Function to generate breadcrumb list items
  const generateBreadcrumbs = () => {
    const breadcrumbs = [
      { title: <HomeIcon />, url: "/" }, // Assuming your home route is "/"
      { title: `/ GIFT BASKETS`, url: `/Product` },
      { title:category ? `/ ${displayCategory}` :  ``, url: "" }, // Dynamic URL based on category
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
      <h1>{displayCategory}</h1>
      {/* <ul className={styles.breadcrumbs}>{generateBreadcrumbs()}</ul> */}
    </div>
  );
}

export default ColumnPageSectionFirst;
