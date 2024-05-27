import React from "react";
import RegisterPageSectionFirst from "../../RegisterPageSection/RegisterPageSectionFirst/RegisterPageSectionFirst";
import RegisterPageSectionSecond from "../../RegisterPageSection/RegisterPageSectionSecond/RegisterPageSectionSecond";
import Header from "../../Header/Header";
import Footer from "../../Sections/Footer/Footer";
import style from "./RegisterPage.module.css"
import Chatbot from "../../ChatBot/ChatBot";

function RegisterPage() {
  return (
    <div>
      <Header />
      <div className={style.Container}>
        <RegisterPageSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default RegisterPage;
