import React from "react";
import Header from "../../Header/Header";
import style from "./AllCategoryPage.module.css";
import ColumnPageSectionFirst from "../../ColumnPageSection/ColumnPageSectionFirst/ColumnPageSectionFirst";
import ColumnPageSectionSecond from "../../ColumnPageSection/ColumnPageSectionSecond/ColumnPageSectionSecond";
import Footer from "../../Sections/Footer/Footer";
import { Helmet } from "react-helmet";
import AllCategorySectionFirst from "../../AllCategory/AllCategorySectionFirst/AllCategorySectionFirst";
import AllCategorySectionSecond from "../../AllCategory/AllCategorySectionSecond/AllCategorySectionSecond";


function AllCategoryPage() {
  return (
    <div>
      <Header />
      <div className={style.Container}>
        <AllCategorySectionFirst />
        <AllCategorySectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default AllCategoryPage;
