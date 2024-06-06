import * as React from "react";
import style from "./UpdateInformation.module.css";
import Footer from "../../Sections/Footer/Footer";
import UpdatePasswordPageSection from "../../UpdateInformationSection/UpdatePasswordPageSection/UpdatePasswordPageSection";
import UpdateAddressPageSection from "../../UpdateInformationSection/UpdateAddressPageSection/UpdateAddressPageSection";
import { useParams } from "react-router-dom";
import Header from "../../Header/Header";
import BreadCrumsHeader from "../../BreadCrumsHeader/BreadCrumsHeader";

export default function UpdateInformation() {
  const { category } = useParams();

  return (
    <div>
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
