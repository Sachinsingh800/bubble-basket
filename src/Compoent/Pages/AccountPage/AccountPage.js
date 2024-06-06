import React from "react";
import style from "./AccountPage.module.css";
import AccountPageSectionFirst from "../../AccountPageSection/AccountPageSectionFirst/AccountPageSectionFirst";
import AccountPageSectionSecond from "../../AccountPageSection/AccountPageSectionSecond/AccountPageSectionSecond";
import Header from "../../Header/Header";
import Footer from "../../Sections/Footer/Footer";
import BreadCrumsHeader from "../../BreadCrumsHeader/BreadCrumsHeader";


function AccountPage() {
  return (
    <div>
      <Header />
      <div className={style.Container}>
      <BreadCrumsHeader urlname={"Account"} />
        <AccountPageSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default AccountPage;
