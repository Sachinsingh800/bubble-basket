import React from "react";
import Header from "../../Header/Header";
import style from "./ColumnPage.module.css";
import ColumnPageSectionFirst from "../../ColumnPageSection/ColumnPageSectionFirst/ColumnPageSectionFirst";
import ColumnPageSectionSecond from "../../ColumnPageSection/ColumnPageSectionSecond/ColumnPageSectionSecond";
import Footer from "../../Sections/Footer/Footer";

function ColumnPage() {
  return (
    <div>
      <Header />
      <div className={style.Container}>
        <ColumnPageSectionFirst />
        <ColumnPageSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default ColumnPage;
