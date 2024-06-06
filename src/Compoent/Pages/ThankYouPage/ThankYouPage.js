

import React from "react";
import ThankYouPageSectionFirst from "../../ThankYouPageSection/ThankYouPageSectionFirst/ThankYouPageSectionFirst";
import ThankYouPageSectionSection from "../../ThankYouPageSection/ThankYouPageSectionSection/ThankYouPageSectionSection";
import style from "./ThankYouPage.module.css"
import Footer from "../../Sections/Footer/Footer";
import Header from "../../Header/Header";
import BreadCrumsHeader from "../../BreadCrumsHeader/BreadCrumsHeader";

function ThankYouPage() {
  return (
    <div>
      <Header/>
      <div className={style.Container}>
        {/* <ThankYouPageSectionFirst /> */}
        <BreadCrumsHeader urlname={"ThankYou"} />
        <ThankYouPageSectionSection />
        <Footer />
      </div>
    </div>
  );
}

export default ThankYouPage;
