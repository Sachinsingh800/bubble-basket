import React from "react";
import Header from "../../Header/Header";
import style from "./FilterAccordingToDes.module.css";
import ColumnPageSectionFirst from "../../ColumnPageSection/ColumnPageSectionFirst/ColumnPageSectionFirst";
import ColumnPageSectionSecond from "../../ColumnPageSection/ColumnPageSectionSecond/ColumnPageSectionSecond";
import Footer from "../../Sections/Footer/Footer";
import { Helmet } from "react-helmet";
import AllCategorySectionFirst from "../../AllCategory/AllCategorySectionFirst/AllCategorySectionFirst";
import AllCategorySectionSecond from "../../AllCategory/AllCategorySectionSecond/AllCategorySectionSecond";
import AllSearchSectionFirst from "../../AllSearchSectionFirst/AllSearchSectionFirst";
import AllSearchSectionSecond from "../../AllSearchSectionSecond/AllSearchSectionSecond";


function FilterAccordingToDes() {
  return (
    <div>
      <Header />
      <div className={style.Container}>
        <AllSearchSectionFirst />
        <AllSearchSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default FilterAccordingToDes;
