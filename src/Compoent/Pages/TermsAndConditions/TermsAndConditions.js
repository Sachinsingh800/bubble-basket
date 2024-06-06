import React from "react";
import TermAndConditionSectionFirst from "../../TermAndConditionSection/TermAndConditionSectionFirst/TermAndConditionSectionFirst";
import TermAndConditionSectionSecond from "../../TermAndConditionSection/TermAndConditionSectionSecond/TermAndConditionSectionSecond";
import Header from "../../Header/Header";
import Footer from "../../Sections/Footer/Footer";
import style from "./TermsAndConditions.module.css"
import BreadCrumsHeader from "../../BreadCrumsHeader/BreadCrumsHeader";

function TermsAndConditions() {
  return (
    <div>
      <Header />
      <div className={style.Container}>
        {/* <TermAndConditionSectionFirst /> */}
        <BreadCrumsHeader urlname={"Term And Condition"} />
        <TermAndConditionSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default TermsAndConditions;
