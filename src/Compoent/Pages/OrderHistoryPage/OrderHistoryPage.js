import React, { useEffect } from "react";
import OrderHistoryPageSectionFirst from "../../OrderHistoryPageSection/OrderHistoryPageSectionFirst/OrderHistoryPageSectionFirst";
import OrderHistoryPageSectionSecond from "../../OrderHistoryPageSection/OrderHistoryPageSectionSecond/OrderHistoryPageSectionSecond";
import style from "./OrderHistoryPage.module.css";
import Footer from "../../Sections/Footer/Footer";
import Header from "../../Header/Header";
import { getAllOrders, getAllOrdersHistory } from "../../Apis/Apis";

function OrderHistoryPage() {

  return (
    <div>
      <Header />
      <div className={style.Container}>
        {/* <OrderHistoryPageSectionFirst /> */}
        <OrderHistoryPageSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default OrderHistoryPage;
