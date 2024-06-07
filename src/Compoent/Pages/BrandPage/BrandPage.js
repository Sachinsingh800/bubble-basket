import React from "react";
import Header from "../../Header/Header";
import style from "./BrandPage.module.css";
import Footer from "../../Sections/Footer/Footer";
import BrandSectionFirst from "../../BrandSection/BrandSectionFirst/BrandSectionFirst";
import BrandSectionSecond from "../../BrandSection/BrandSectionSecond/BrandSectionSecond";
import { Helmet } from "react-helmet";


function BrandPage() {
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
        <BrandSectionFirst />
        <BrandSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default BrandPage;
