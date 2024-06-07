import * as React from "react";
import style from "./UpdateInformation.module.css";
import Footer from "../../Sections/Footer/Footer";
import UpdatePasswordPageSection from "../../UpdateInformationSection/UpdatePasswordPageSection/UpdatePasswordPageSection";
import UpdateAddressPageSection from "../../UpdateInformationSection/UpdateAddressPageSection/UpdateAddressPageSection";
import { useParams } from "react-router-dom";
import Header from "../../Header/Header";
import BreadCrumsHeader from "../../BreadCrumsHeader/BreadCrumsHeader";
import { Helmet } from "react-helmet";

export default function UpdateInformation() {
  const { category } = useParams();

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
        <link rel="canonical" href="https://www.luxurybubblebasket.com/" />
      </Helmet>
      <Header />
      <div className={style.Container}>
        <BreadCrumsHeader urlname={category} />
        {category == "password" && <UpdatePasswordPageSection />}
        {category == "address" && <UpdateAddressPageSection />}
        <Footer />
      </div>
    </div>
  );
}
