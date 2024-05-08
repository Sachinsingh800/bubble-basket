import React from "react";
import TermAndConditionSectionFirst from "../../TermAndConditionSection/TermAndConditionSectionFirst/TermAndConditionSectionFirst";
import TermAndConditionSectionSecond from "../../TermAndConditionSection/TermAndConditionSectionSecond/TermAndConditionSectionSecond";
import Header from "../../Header/Header";
import Footer from "../../Sections/Footer/Footer";
import style from "./TermsAndConditions.module.css"

function TermsAndConditions() {
  return (
    <div>
      <Header />
      <div className={style.Container}>
        <TermAndConditionSectionFirst />
        <TermAndConditionSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default TermsAndConditions;
