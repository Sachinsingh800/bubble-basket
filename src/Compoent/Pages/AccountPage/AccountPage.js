import React from "react";
import style from "./AccountPage.module.css";
import AccountPageSectionFirst from "../../AccountPageSection/AccountPageSectionFirst/AccountPageSectionFirst";
import AccountPageSectionSecond from "../../AccountPageSection/AccountPageSectionSecond/AccountPageSectionSecond";
import Header from "../../Header/Header";
import Footer from "../../Sections/Footer/Footer";
import BreadCrumsHeader from "../../BreadCrumsHeader/BreadCrumsHeader";
import { Helmet } from "react-helmet";

function AccountPage() {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Luxury Bubble Basket | Buy Gifts For Everyone</title>
        <meta
          name="description"
          content="Find the perfect wine and champagne gifts for everyone. Shop online for high-quality gifts that will impress any recipient."
        />
        <link rel="canonical" href="https://www.luxurybubblebasket.com/Account" />
      </Helmet>
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
