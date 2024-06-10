import React from "react";
import { Link } from "react-router-dom";
import styles from "./BreadCrumsHeader.module.css"; // Import styles
import HomeIcon from '@mui/icons-material/Home';

function BreadCrumsHeader({urlname}) {
  // Function to generate breadcrumb list items
  const generateBreadcrumbs = () => {
    const breadcrumbs = [
      { title:<HomeIcon />, url: "/" }, // Assuming your home route is "/"
      { title: urlname, url: `` },
    ];

    return breadcrumbs.map((crumb, index) => (
      <li key={index} className={styles.breadcrumbItem}>
        {index < breadcrumbs.length - 1 ? (
          <Link to={crumb.url} className={styles.url}>
            {crumb.title}
          </Link>
        ) : (
          <span>/ {crumb.title}</span>
        )}
      </li>
    ));
  };

  return (
    <div className={styles.main}>
      <h1>{urlname}</h1>
      {/* <ul className={styles.breadcrumbs}>{generateBreadcrumbs()}</ul> */}
    </div>
  );
}

export default BreadCrumsHeader;
