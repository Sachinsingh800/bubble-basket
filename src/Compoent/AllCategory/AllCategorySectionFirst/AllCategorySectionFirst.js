import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./AllCategorySectionFirst.module.css"; // Import styles
import HomeIcon from '@mui/icons-material/Home';

function AllCategorySectionFirst() {
  const { category } = useParams();
  const displayCategory = category || "GIFT BASKETS";
  return (
    <div className={styles.main}>
      <h1>{displayCategory}</h1>
    </div>
  );
}

export default AllCategorySectionFirst;
