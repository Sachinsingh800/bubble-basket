import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Sections/Footer/Footer";
import CartPageSectionFirst from "../../CartPageSection/CartPageSectionFirst/CartPageSectionFirst";
import CartPageSectionSecond from "../../CartPageSection/CartPageSectionSecond/CartPageSectionSecond";
import style from "./CartPage.module.css";
import Chatbot from "../../ChatBot/ChatBot";

function CartPage() {
  return (
    <div>
      <Header />
      <div className={style.Container}>
        <CartPageSectionFirst />
        <CartPageSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default CartPage;
