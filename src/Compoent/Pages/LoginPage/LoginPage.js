import React from "react";
import LoginPageSectionFirst from "../../LoginPageSection/LoginPageSectionFirst/LoginPageSectionFirst";
import LoginPageSectionSecond from "../../LoginPageSection/LoginPageSectionSecond/LoginPageSectionSecond";
import style from "./LoginPage.module.css";
import Header from "../../Header/Header";
import Footer from "../../Sections/Footer/Footer";
import BreadCrumsHeader from "../../BreadCrumsHeader/BreadCrumsHeader";


function LoginPage() {
  return (
    <div>
      <Header />
      <div className={style.Container}>
      <BreadCrumsHeader urlname={"Login"} />
        <LoginPageSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default LoginPage;
