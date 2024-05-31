import React from "react";
import PrivacyAndPolicySectionFirst from "../../PrivacyAndPolicySection/PrivacyAndPolicySectionFirst/PrivacyAndPolicySectionFirst";
import PrivacyAndPolicySectionSecond from "../../PrivacyAndPolicySection/PrivacyAndPolicySectionSecond/PrivacyAndPolicySectionSecond";
import Header from "../../Header/Header";
import Footer from "../../Sections/Footer/Footer";
import style from "./PrivacyAanPolicy.module.css"


function PrivacyAanPolicy() {
  return (
    <div>
      <Header />
      <div className={style.Container}>
        <PrivacyAndPolicySectionFirst />
        <PrivacyAndPolicySectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default PrivacyAanPolicy;
