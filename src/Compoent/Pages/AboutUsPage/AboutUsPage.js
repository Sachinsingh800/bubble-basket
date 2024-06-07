import React from "react";
import Header from "../../Header/Header";
import AboutUsSectionFirst from "../../AboutUsSection/AboutUsSectionFirst/AboutUsSectionFirst";
import AboutUsSectionSecond from "../../AboutUsSection/AboutUsSectionSecond/AboutUsSectionSecond";
import AboutUsSectionThird from "../../AboutUsSection/AboutUsSectionThird/AboutUsSectionThird";
import Footer from "../../Sections/Footer/Footer";
import style from "./AboutUsPage.module.css";
import BreadCrumsHeader from "../../BreadCrumsHeader/BreadCrumsHeader";
import { Helmet } from "react-helmet";


function AboutUsPage() {
  return (
    <div>
            <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Luxury Bubble Basket | Buy Gifts For Everyone</title>
        <meta name="description" content="Find the perfect wine and champagne gifts for everyone. Shop online for high-quality gifts that will impress any recipient." />
        <link rel="canonical" href="https://www.luxurybubblebasket.com/AboutUs/" />
      </Helmet>
      <Header />
      <div className={style.Container}>
        <BreadCrumsHeader urlname={"About"} />
        <AboutUsSectionSecond />
        <AboutUsSectionThird />
        <Footer />
      </div>
    </div>
  );
}

export default AboutUsPage;
