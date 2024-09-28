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
import Cookies from "js-cookie";

function Home() {

  const token = Cookies.get("token");
  const [update, setUpdate] = useRecoilState(updateCart);
  useEffect(() => {
    handleCheckoutOrder();
  }, [token]);
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
        <title>Premium Wine & Champagne Gift Baskets - Perfect for Any Occasion</title>
        <meta name="description" content="Discover our exquisite selection of red and white wine gift baskets, sparkling champagne gift sets, and luxury gift boxes. Ideal for corporate gifts, birthdays, weddings, and personalized occasions. Shop now for the perfect gift!" />
        <link rel="canonical" href="https://www.luxurybubblebasket.com/" />
        <meta
          name="title"
          content="Luxury Bubble Basket"
        />
        <meta
          name="keyword"
          content="Premium Wine & Champagne Gift Baskets - Perfect for Any Occasion"
        />
        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
          {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "name": "Luxury Bubble Basket",
            "url": "https://www.luxurybubblebasket.com/",
            "description": "Discover our exquisite selection of red and white wine gift baskets, sparkling champagne gift sets, and luxury gift boxes. Ideal for corporate gifts, birthdays, weddings, and personalized occasions. Shop now for the perfect gift!",
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
        {/* <div className={style.offer}>
        GET FREE SHIPPING & COMPLIMENTARY GIFT BOX WITH EVERY ORDER.
        </div> */}
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
