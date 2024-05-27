import React from "react";
import Header from "../../Header/Header";
import AboutUsSectionFirst from "../../AboutUsSection/AboutUsSectionFirst/AboutUsSectionFirst";
import AboutUsSectionSecond from "../../AboutUsSection/AboutUsSectionSecond/AboutUsSectionSecond";
import AboutUsSectionThird from "../../AboutUsSection/AboutUsSectionThird/AboutUsSectionThird";
import Footer from "../../Sections/Footer/Footer";
import style from "./AboutUsPage.module.css";
import Chatbot from "../../ChatBot/ChatBot";

function AboutUsPage() {
  return (
    <div>
      <Header />
      <div className={style.Container}>
        <AboutUsSectionFirst />
        <AboutUsSectionSecond />
        <AboutUsSectionThird />
        <Footer />
      </div>
    </div>
  );
}

export default AboutUsPage;
