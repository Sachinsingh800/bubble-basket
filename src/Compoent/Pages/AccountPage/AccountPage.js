import React from "react";
import style from "./AccountPage.module.css";
import AccountPageSectionFirst from "../../AccountPageSection/AccountPageSectionFirst/AccountPageSectionFirst";
import AccountPageSectionSecond from "../../AccountPageSection/AccountPageSectionSecond/AccountPageSectionSecond";
import Header from "../../Header/Header";
import Footer from "../../Sections/Footer/Footer";


function AccountPage() {
  return (
    <div>
      <Header />
      <div className={style.Container}>
        <AccountPageSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default AccountPage;
