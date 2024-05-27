import React from "react";
import style from "./OrderDetailPage.module.css";
import OderDetailSectionFirst from "../../OderDetailSection/OderDetailSectionFirst/OderDetailSectionFirst";
import OderDetailSectionSecond from "../../OderDetailSection/OderDetailSectionSecond/OderDetailSectionSecond";
import Footer from "../../Sections/Footer/Footer";
import Header from "../../Header/Header";
import Chatbot from "../../ChatBot/ChatBot";

function OrderDetailPage() {
  return (
    <div>
      <Header/>
      <div className={style.Container}>
        <OderDetailSectionFirst />
        <OderDetailSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default OrderDetailPage;
