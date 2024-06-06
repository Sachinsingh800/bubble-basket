import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Sections/Footer/Footer";
import CartPageSectionFirst from "../../CartPageSection/CartPageSectionFirst/CartPageSectionFirst";
import CartPageSectionSecond from "../../CartPageSection/CartPageSectionSecond/CartPageSectionSecond";
import style from "./CartPage.module.css";
import BreadCrumsHeader from "../../BreadCrumsHeader/BreadCrumsHeader";


function CartPage() {
  return (
    <div>
      <Header />
      <div className={style.Container}>
        <BreadCrumsHeader urlname={"Shopping Cart"} />
        <CartPageSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default CartPage;
