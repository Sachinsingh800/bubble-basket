import React, { useEffect } from "react";
import Header from "../Header/Header";
import FirstSection from "../Sections/FirstSection/FirstSection";
import SecondSection from "../Sections/SecondSection/SecondSection";
import SectionThird from "../Sections/SectionThird/SectionThird";
import SectionFourth from "../Sections/SectionFourth/SectionFourth";
import SectionFifth from "../Sections/SectionFifth/SectionFifth";
import SectionSixth from "../Sections/SectionSixth/SectionSixth";
import SectionSeventh from "../Sections/SectionSeventh/SectionSeventh";
import SectionEight from "../Sections/SectionEight/SectionEight";
import SectionNinth from "../Sections/SectionNinth/SectionNinth";
import SectionTenth from "../Sections/SectionTenth/SectionTenth";
import Footer from "../Sections/Footer/Footer";
import style from "./Home.module.css";
import ImageSlider from "../ImageSlider/ImageSlider";
import BlogSlider from "../BlogSlider/BlogSlider";


function Home() {

  return (
    <div>
      <Header />
      <div className={style.Container}>
        <FirstSection />
        <SecondSection />
        <SectionThird />
        <SectionFourth />
        <SectionFifth />
        <SectionSixth />
        <SectionSeventh />
        {/* <SectionEight /> */}
        <BlogSlider />
        <ImageSlider />
        <br/>
        <SectionNinth />

        <SectionTenth />

        <Footer />
      </div>
    </div>
  );
}

export default Home;
