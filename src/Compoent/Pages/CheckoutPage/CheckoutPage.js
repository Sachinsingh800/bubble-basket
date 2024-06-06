import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Sections/Footer/Footer";
import CheckoutPageSectionFirst from "../../CheckoutPageSection/CheckoutPageSectionFirst/CheckoutPageSectionFirst";
import CheckoutPageSectionSecond from "../../CheckoutPageSection/CheckoutPageSectionSecond/CheckoutPageSectionSecond";
import style from "./CheckoutPage.module.css";
import BreadCrumsHeader from "../../BreadCrumsHeader/BreadCrumsHeader";

function CheckoutPage() {
  return (
    <div>
      <Header />
      <div className={style.Container}>
      <BreadCrumsHeader urlname={"Checkout"} />
        <CheckoutPageSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default CheckoutPage;
