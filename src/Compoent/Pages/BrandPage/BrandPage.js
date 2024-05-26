import React from "react";
import Header from "../../Header/Header";
import style from "./BrandPage.module.css";
import Footer from "../../Sections/Footer/Footer";
import BrandSectionFirst from "../../BrandSection/BrandSectionFirst/BrandSectionFirst";
import BrandSectionSecond from "../../BrandSection/BrandSectionSecond/BrandSectionSecond";
import Chatbot from "../../ChatBot/ChatBot";

function BrandPage() {
  return (
    <div>
      <Header />
      <Chatbot />
      <div className={style.Container}>
        <BrandSectionFirst />
        <BrandSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default BrandPage;
