import React from "react";
import style from "./OrderDetailPage.module.css";
import OderDetailSectionFirst from "../../OderDetailSection/OderDetailSectionFirst/OderDetailSectionFirst";
import OderDetailSectionSecond from "../../OderDetailSection/OderDetailSectionSecond/OderDetailSectionSecond";
import Footer from "../../Sections/Footer/Footer";
import Header from "../../Header/Header";
import BreadCrumsHeader from "../../BreadCrumsHeader/BreadCrumsHeader";


function OrderDetailPage() {
  return (
    <div>
      <Header/>
      <div className={style.Container}>
      <BreadCrumsHeader urlname={"Orders"} />
        <OderDetailSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default OrderDetailPage;
