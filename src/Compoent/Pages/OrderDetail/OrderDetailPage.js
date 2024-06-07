import React from "react";
import style from "./OrderDetailPage.module.css";
import OderDetailSectionFirst from "../../OderDetailSection/OderDetailSectionFirst/OderDetailSectionFirst";
import OderDetailSectionSecond from "../../OderDetailSection/OderDetailSectionSecond/OderDetailSectionSecond";
import Footer from "../../Sections/Footer/Footer";
import Header from "../../Header/Header";
import BreadCrumsHeader from "../../BreadCrumsHeader/BreadCrumsHeader";
import { Helmet } from "react-helmet";


function OrderDetailPage() {
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
