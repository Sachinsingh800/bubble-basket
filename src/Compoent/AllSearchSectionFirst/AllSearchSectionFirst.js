import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./AllSearchSectionFirst.module.css"; // Import styles


function AllSearchSectionFirst() {
    const { search } = useParams();
  return (
    <div className={styles.main}>
      <h1>{search}</h1>
    </div>
  );
}

export default AllSearchSectionFirst;
