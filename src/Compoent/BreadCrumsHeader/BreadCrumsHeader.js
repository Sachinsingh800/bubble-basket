import React from "react";
import styles from "./BreadCrumsHeader.module.css"; // Import styles

function BreadCrumsHeader({ urlname }) {
  // Function to replace dashes with spaces
  const formatUrlName = (name) => {
    return name.replace(/-/g, " ");
  };

  return (
    <div className={styles.main}>
      <h1>{formatUrlName(urlname)}</h1>
    </div>
  );
}

export default BreadCrumsHeader;
