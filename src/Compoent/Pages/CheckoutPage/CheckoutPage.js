import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Sections/Footer/Footer";
import CheckoutPageSectionFirst from "../../CheckoutPageSection/CheckoutPageSectionFirst/CheckoutPageSectionFirst";
import CheckoutPageSectionSecond from "../../CheckoutPageSection/CheckoutPageSectionSecond/CheckoutPageSectionSecond";
import style from "./CheckoutPage.module.css";

function CheckoutPage() {
  return (
    <div>
      <Header />
      <div className={style.Container}>
        <CheckoutPageSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default CheckoutPage;
