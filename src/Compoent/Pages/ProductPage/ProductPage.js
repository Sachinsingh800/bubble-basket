import React from "react";
import Footer from "../../Sections/Footer/Footer";
import ProductSectionFirst from "../../ProductPageSection/SectionFirst/ProductSectionFirst";
import ProductSectionSecond from "../../ProductPageSection/SectionSecond/ProductSectionSecond";
import Header from "../../Header/Header";
import style from "./ProductPage.module.css"
import { useParams } from "react-router-dom";
import BreadCrumsHeader from "../../BreadCrumsHeader/BreadCrumsHeader";


function ProductPage() {
  const { title } = useParams();
  return (
    <div>
      <Header />
      <div className={style.Container}>
      <BreadCrumsHeader  urlname={title} />
        <ProductSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default ProductPage;
