import React from "react";
import Footer from "../../Sections/Footer/Footer";
import ContactUsPageSectionFirst from "../../ContactUsPageSection/ContactUsPageSectionFirst/ContactUsPageSectionFirst";
import ContactUsPageSectionSecond from "../../ContactUsPageSection/ContactUsPageSectionSecond/ContactUsPageSectionSecond";
import style from "./ContactUsPage.module.css";
import Header from "../../Header/Header";
import Chatbot from "../../ChatBot/ChatBot";

function ContactUsPage() {
  return (
    <div>
      <Header />
      <div className={style.Container}>
        <ContactUsPageSectionFirst />
        <ContactUsPageSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default ContactUsPage;
