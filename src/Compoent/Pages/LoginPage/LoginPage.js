import React from "react";
import LoginPageSectionFirst from "../../LoginPageSection/LoginPageSectionFirst/LoginPageSectionFirst";
import LoginPageSectionSecond from "../../LoginPageSection/LoginPageSectionSecond/LoginPageSectionSecond";
import style from "./LoginPage.module.css";
import Header from "../../Header/Header";
import Footer from "../../Sections/Footer/Footer";
import BreadCrumsHeader from "../../BreadCrumsHeader/BreadCrumsHeader";
import { Helmet } from "react-helmet";


function LoginPage() {
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
      <BreadCrumsHeader urlname={"Login"} />
        <LoginPageSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default LoginPage;
