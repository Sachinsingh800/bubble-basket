

import React from "react";
import ThankYouPageSectionFirst from "../../ThankYouPageSection/ThankYouPageSectionFirst/ThankYouPageSectionFirst";
import ThankYouPageSectionSection from "../../ThankYouPageSection/ThankYouPageSectionSection/ThankYouPageSectionSection";
import style from "./ThankYouPage.module.css"
import Footer from "../../Sections/Footer/Footer";
import Header from "../../Header/Header";

function ThankYouPage() {
  return (
    <div>
      <Header/>
      <div className={style.Container}>
        <ThankYouPageSectionFirst />
        <ThankYouPageSectionSection />
        <Footer />
      </div>
    </div>
  );
}

export default ThankYouPage;
