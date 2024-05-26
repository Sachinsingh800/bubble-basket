import React from "react";
import style from "./AccountPage.module.css";
import AccountPageSectionFirst from "../../AccountPageSection/AccountPageSectionFirst/AccountPageSectionFirst";
import AccountPageSectionSecond from "../../AccountPageSection/AccountPageSectionSecond/AccountPageSectionSecond";
import Header from "../../Header/Header";
import Footer from "../../Sections/Footer/Footer";
import Chatbot from "../../ChatBot/ChatBot";

function AccountPage() {
  return (
    <div>
      <Header />
      <Chatbot />
      <div className={style.Container}>
        <AccountPageSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default AccountPage;
