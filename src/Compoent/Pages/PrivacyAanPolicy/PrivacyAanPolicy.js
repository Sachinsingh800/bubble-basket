import React from "react";
import PrivacyAndPolicySectionFirst from "../../PrivacyAndPolicySection/PrivacyAndPolicySectionFirst/PrivacyAndPolicySectionFirst";
import PrivacyAndPolicySectionSecond from "../../PrivacyAndPolicySection/PrivacyAndPolicySectionSecond/PrivacyAndPolicySectionSecond";
import Header from "../../Header/Header";
import Footer from "../../Sections/Footer/Footer";
import style from "./PrivacyAanPolicy.module.css"
import BreadCrumsHeader from "../../BreadCrumsHeader/BreadCrumsHeader";
import { Helmet } from "react-helmet";


function PrivacyAanPolicy() {
  return (
    <div>
            <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Luxury Bubble Basket | Buy Gifts For Everyone</title>
        <meta name="description" content="Find the perfect wine and champagne gifts for everyone. Shop online for high-quality gifts that will impress any recipient." />
        <link rel="canonical" href="https://www.luxurybubblebasket.com/" />
      </Helmet>
      <Header />
      <div className={style.Container}>
        <BreadCrumsHeader urlname={"Privacy And Policy"} />
        <PrivacyAndPolicySectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default PrivacyAanPolicy;
