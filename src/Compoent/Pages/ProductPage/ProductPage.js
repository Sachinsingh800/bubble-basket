import React from "react";
import Footer from "../../Sections/Footer/Footer";
import ProductSectionFirst from "../../ProductPageSection/SectionFirst/ProductSectionFirst";
import ProductSectionSecond from "../../ProductPageSection/SectionSecond/ProductSectionSecond";
import Header from "../../Header/Header";
import style from "./ProductPage.module.css"
import Chatbot from "../../ChatBot/ChatBot";

function ProductPage() {
  return (
    <div>
      <Header />
      <Chatbot />
      <div className={style.Container}>
        <ProductSectionFirst />
        <ProductSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default ProductPage;
