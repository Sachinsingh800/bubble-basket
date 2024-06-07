import React, { useEffect } from "react";
import OrderHistoryPageSectionFirst from "../../OrderHistoryPageSection/OrderHistoryPageSectionFirst/OrderHistoryPageSectionFirst";
import OrderHistoryPageSectionSecond from "../../OrderHistoryPageSection/OrderHistoryPageSectionSecond/OrderHistoryPageSectionSecond";
import style from "./OrderHistoryPage.module.css";
import Footer from "../../Sections/Footer/Footer";
import Header from "../../Header/Header";
import { getAllOrders, getAllOrdersHistory } from "../../Apis/Apis";
import BreadCrumsHeader from "../../BreadCrumsHeader/BreadCrumsHeader";
import { Helmet } from "react-helmet";

function OrderHistoryPage() {

  return (
    <div>
            <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Luxury Bubble Basket | Buy Gifts For Everyone</title>
        <meta name="description" content="Find the perfect wine and champagne gifts for everyone. Shop online for high-quality gifts that will impress any recipient." />
        <link rel="canonical" href="https://www.luxurybubblebasket.com/" />
      </Helmet>
      <Header />
      <div className={style.Container}>
        {/* <OrderHistoryPageSectionFirst /> */}
        <BreadCrumsHeader urlname={"Order History"} />
        <OrderHistoryPageSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default OrderHistoryPage;
