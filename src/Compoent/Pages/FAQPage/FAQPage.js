import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Sections/Footer/Footer";
import FAQSectionFirst from "../../FAQSection/FAQSectionFirst/FAQSectionFirst";
import FAQSectionSecond from "../../FAQSection/FAQSectionSecond/FAQSectionSecond";
import style from "./FAQPage.module.css"
import BreadCrumsHeader from "../../BreadCrumsHeader/BreadCrumsHeader";



function FAQPage() {
  return (
    <div>
      <Header />
      <div className={style.Container}>
        {/* <FAQSectionFirst /> */}
        <BreadCrumsHeader urlname={"FAQs"} />
        <FAQSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default FAQPage;
