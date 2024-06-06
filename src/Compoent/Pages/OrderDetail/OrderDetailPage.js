import React from "react";
import style from "./OrderDetailPage.module.css";
import OderDetailSectionFirst from "../../OderDetailSection/OderDetailSectionFirst/OderDetailSectionFirst";
import OderDetailSectionSecond from "../../OderDetailSection/OderDetailSectionSecond/OderDetailSectionSecond";
import Footer from "../../Sections/Footer/Footer";
import Header from "../../Header/Header";


function OrderDetailPage() {
  return (
    <div>
      <Header/>
      <div className={style.Container}>
        <OderDetailSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default OrderDetailPage;
