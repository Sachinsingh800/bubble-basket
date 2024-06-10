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
import { Helmet } from 'react-helmet';
import { getCheckout } from "../Apis/Apis";
import { useRecoilState } from "recoil";
import { updateCart } from "../Recoil/Recoil";

function Home() {
  const loginStatus = JSON.parse(sessionStorage.getItem("isLoggedIn") || false);
  const [update, setUpdate] = useRecoilState(updateCart);
  useEffect(() => {
    handleCheckoutOrder();
  }, [loginStatus]);
  const handleCheckoutOrder = async () => {
    try {
      await getCheckout();
    } catch (error) {
      console.log(error);
    } finally{
      setUpdate(update + 8)
    }
  };
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Luxury Bubble Basket | Buy Gifts For Everyone</title>
        <meta name="description" content="Find the perfect wine and champagne gifts for everyone. Shop online for high-quality gifts that will impress any recipient." />
        <link rel="canonical" href="https://www.luxurybubblebasket.com/" />
        <meta
          name="title"
          content="Luxury Bubble Basket"
        />
        <meta
          name="keyword"
          content="Luxury Bubble Basket | Buy Gifts For Everyone"
        />
        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
          {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "name": "Luxury Bubble Basket",
            "url": "https://www.luxurybubblebasket.com/",
            "description": "Find the perfect wine and champagne gifts for everyone. Shop online for high-quality gifts that will impress any recipient.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.luxurybubblebasket.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
          `}
        </script>
        {/* End Schema Markup */}
      </Helmet>
      <Header />
      <div className={style.Container}>
        <FirstSection />
        <SecondSection />
        <SectionThird />
        <SectionFourth />
        <SectionFifth />
        <SectionSixth />
        <SectionSeventh />
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
