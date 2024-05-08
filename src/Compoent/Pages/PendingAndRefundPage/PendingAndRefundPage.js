

import React from "react";
import PendingAndRefundSectionFirst from "../../PendingAndRefundSection/PendingAndRefundSectionFirst/PendingAndRefundSectionFirst";
import PendingAndRefundSectionSecond from "../../PendingAndRefundSection/PendingAndRefundSectionSecond/PendingAndRefundSectionSecond";
import Footer from "../../Sections/Footer/Footer";
import Header from "../../Header/Header";
import style from "./PendingAndRefundPage.module.css"

function PendingAndRefundPage() {
  return (
    <div>
      <Header />
      <div className={style.Container}>
        <PendingAndRefundSectionFirst />
        <PendingAndRefundSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default PendingAndRefundPage;
