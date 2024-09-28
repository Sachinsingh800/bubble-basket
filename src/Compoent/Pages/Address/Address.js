import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Sections/Footer/Footer";
import style from "./Address.module.css"
import BreadCrumsHeader from "../../BreadCrumsHeader/BreadCrumsHeader";
import { Helmet } from "react-helmet";
import AddressForm from "../../LoginPageSection/LoginPageSectionSecond/AddressForm";




function Address() {
  return (
    <div>
            <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Luxury Bubble Basket | Buy Gifts For Everyone</title>
        <meta name="description" content="Find the perfect wine and champagne gifts for everyone. Shop online for high-quality gifts that will impress any recipient." />
        <link rel="canonical" href="https://www.luxurybubblebasket.com/FAQs" />
      </Helmet>
      <Header />
      <div className={style.Container}>
        {/* <FAQSectionFirst /> */}
        <BreadCrumsHeader urlname={"Addresss"} />
        <AddressForm  />
        <Footer />
      </div>
    </div>
  );
}

export default Address;
