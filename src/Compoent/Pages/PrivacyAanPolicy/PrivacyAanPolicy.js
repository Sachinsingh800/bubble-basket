import React from "react";
import PrivacyAndPolicySectionFirst from "../../PrivacyAndPolicySection/PrivacyAndPolicySectionFirst/PrivacyAndPolicySectionFirst";
import PrivacyAndPolicySectionSecond from "../../PrivacyAndPolicySection/PrivacyAndPolicySectionSecond/PrivacyAndPolicySectionSecond";
import Header from "../../Header/Header";
import Footer from "../../Sections/Footer/Footer";
import style from "./PrivacyAanPolicy.module.css"
import BreadCrumsHeader from "../../BreadCrumsHeader/BreadCrumsHeader";


function PrivacyAanPolicy() {
  return (
    <div>
      <Header />
      <div className={style.Container}>
        {/* <PrivacyAndPolicySectionFirst /> */}
        <BreadCrumsHeader urlname={"Privacy And Policy"} />
        <PrivacyAndPolicySectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default PrivacyAanPolicy;
