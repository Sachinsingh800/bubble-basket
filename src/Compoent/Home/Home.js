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
            "description": "WELCOME TO LUXURY BUBBLE BASKET 

At Luxury Bubble Basket, we believe in celebrating life's special moments with elegance and style. Our carefully designed selection of luxurious gift baskets and personalized bottles are designed to bring joy and sophistication to any occasion. Based in the USA, our mission is to provide exceptional products that make gifting a truly memorable experience.

DISCOVER OUR COLLECTIONS 

Red Wine and White Wine Gift Baskets

Wine has been a symbol of celebration and luxury for so long. At Luxury Bubble Basket, we offer an exquisite range of red and white wine gift baskets that serve to all wine enthusiasts. Each basket is thoughtfully designed to offer a delightful experience, featuring premium wines sourced from renowned vineyards around the world.

Our red wine gift baskets include rich, bold flavours that are perfect for those who appreciate the depth and complexity of a fine red. From strong Cabernet Sauvignons to elegant Opus, our selection is sure to impress. These baskets are ideal for any occasion, whether it’s a birthday, anniversary, or corporate gift.

For those who prefer the crisp, refreshing taste of white wine, our white wine gift baskets are a perfect choice. Featuring top-quality white wines, these baskets offer a sophisticated and refreshing experience. Perfect for summer gatherings, housewarming gifts, or just a special treat for yourself.

Each wine gift basket is carefully arranged to ensure a beautiful presentation, making it a perfect gift for any wine lover. Our baskets often include gourmet treats such as cheese, chocolates, and crackers that complement the wines, enhancing the overall experience.

Champagne and Sparkling Champagne Gifts

There's no better way to celebrate than with a glass of fine champagne. At Luxury Bubble Basket, we offer a luxurious selection of champagne gift sets that are perfect for any special occasion. Whether you’re celebrating a wedding, anniversary, or corporate milestone, our champagne gifts are sure to impress.

Our champagne gift sets feature some of the finest sparkling champagnes, including renowned brands and exclusive selections. Each set is beautifully presented, often accompanied by elegant flutes, making it an ideal choice for gifting. For those looking for something truly special, our Tiffany Champagne sets offer an added touch of luxury with their iconic design and presentation.

In addition to our traditional champagne offerings, we also provide a selection of sparkling champagne gift sets. These include a variety of sparkling wines that offer a delightful effervescence and are perfect for any celebration. Our sparkling champagne sets are elegantly packaged and ready to make any occasion sparkle.

Whether you are gifting for a wedding, a corporate event, or a festive celebration, our champagne and sparkling champagne gifts are sure to make a statement.

Personalized and Hand-Painted Bottles

Add a personal touch to your gifts with our personalized bottles. At Luxury Bubble Basket, we offer a range of personalized wine bottles and champagne bottles that can be customized with names, messages, or special dates. This unique personalization makes each bottle a one-of-a-kind gift that is perfect for any special occasion.

Our personalized bottles are ideal for weddings, anniversaries, birthdays, or professional gifts. Imagine the joy of receiving a bottle of fine wine or champagne with your name or a special message elegantly engraved on it. This added touch of personalization makes the gift truly memorable and cherished.

In addition to personalized bottles, we also offer hand-painted bottles. Each bottle is a work of art, meticulously crafted by talented artists. These hand-painted bottles are not only a luxurious gift but also a beautiful token that can be treasured for years to come.

Our personalized and hand-painted bottles are available in various styles and designs, ensuring that there is something for every taste and occasion. Whether you are looking for a unique wedding gift, a special birthday present, or a corporate gift that stands out, our personalized and hand-painted bottles are the perfect choice.

Spa Baskets

Indulge in relaxation with our luxurious spa baskets. At Luxury Bubble Basket, we believe in providing a spa experience that can be enjoyed in the comfort of your own home. Our spa baskets are carefully crafted with premium products that rejuvenate the body and mind, making them the perfect gift for any occasion.

Each spa basket includes a selection of high-quality spa products such as bath salts, body scrubs, lotions, and essential oils. These products are chosen for their soothing and therapeutic properties, ensuring a relaxing and indulgent experience. Our spa baskets are beautifully presented, making them an ideal gift for birthdays, thank-you gifts, or just a special treat for yourself.

In addition to our standard spa baskets, we also offer luxury spa baskets that include additional pampering items such as plush robes, scented candles, and gourmet chocolates. These luxury spa baskets provide an extra touch of indulgence, making them perfect for those special moments when only the best will do.

Whether you are looking to pamper yourself or someone special, our spa baskets are a thoughtful and luxurious gift that shows you care.

PERFECT FOR EVERY OCCASION 

At Luxury Bubble Basket, we understand that every occasion is special and deserves a thoughtful and elegant gift. That's why we offer a wide range of gift baskets that are perfect for any occasion, ensuring that your gift stands out and leaves a lasting impression.

Corporate Gift Baskets

Our corporate gift baskets are designed to impress clients, colleagues, and business partners. Featuring a selection of fine wines, champagnes, gourmet treats, and spa products, these baskets are perfect for corporate events, holiday gifts, and employee appreciation. Each basket is elegantly presented, reflecting the quality and sophistication of your brand.

Birthday Gift Baskets

Celebrate birthdays in style with our birthday gift baskets. Each basket is filled with delightful treats such as premium wines, champagnes, chocolates, and gourmet snacks. Our birthday gift baskets are designed to bring joy and celebration, making them the perfect way to say "Happy Birthday" to someone special.

Wedding Gift Baskets

Our wedding gift baskets are the perfect way to congratulate the happy couple. Featuring a selection of fine wines, champagnes, and personalized items, these baskets are designed to celebrate love and togetherness. Each basket is beautifully arranged and makes a thoughtful and elegant wedding gift.

WHY CHOOSE LUXURY BUBBLE BASKET?

At Luxury Bubble Basket, we pride ourselves on offering only the highest quality products and exceptional service. Here are a few reasons why you should choose us for your gifting needs:

Premium Quality

We believe in providing only the best. From our selection of fine wines and champagnes to our luxurious spa products, every item in our gift baskets is chosen with care and attention to detail. Our commitment to quality ensures that your gift will be appreciated and enjoyed.

Personalized Service

We understand that each gift is unique. Our personalized service ensures that your gift basket is fitted to your specific needs and preferences. Whether you want to add a personal message, select specific items for your basket, or create a custom gift, we are here to help. Our team is dedicated to making your gifting experience as smooth and enjoyable as possible.

Elegant Presentation

Presentation matters, and our gift baskets are designed to fascinate. Each basket is beautifully arranged and packaged, making it a joy to receive and open. Our luxury gift boxes add an extra touch of sophistication, ensuring that your gift is truly special. Whether it's a corporate gift, a birthday present, or a wedding gift, our elegant presentation will make your gift unique.

SHOP NOW

Browse our collection of premium gift baskets and personalized bottles today. Either you're celebrating a special occasion or looking for the perfect gift, Luxury Bubble Basket has you covered. Our user-friendly website makes it easy to find the perfect gift, and our secure checkout ensures a smooth and convenient shopping experience.

Explore our categories:

    • Red Wine Gift Baskets
    • White Wine Gift Baskets
    • Champagne Gift Sets
    • Sparkling Champagne Gifts
    • Personalized Bottles
    • Hand-Painted Bottles
    • Spa Baskets
    • Corporate Gift Baskets
    • Birthday Gift Baskets
    • Wedding Gift Baskets

Each category is thoughtfully refined to offer a selection of the finest products, ensuring that you find the perfect gift for any occasion. Our detailed product descriptions and high-quality images make it easy to choose the best gift basket for your needs.

CONTACT US 

Have questions or need assistance with your order? Our customer service team is here to help. Contact us today, and we'll be happy to assist you in creating the perfect gift basket for your needs. You can reach us via email, phone, or our convenient online contact form. We look forward to helping you make your gifting experience as special as possible.",
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
