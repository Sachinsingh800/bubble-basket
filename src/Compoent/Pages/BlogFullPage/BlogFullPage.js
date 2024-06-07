import React from "react";
import Footer from "../../Sections/Footer/Footer";
import BlogFullPageFirstSection from "../../BlogFullPageSection/BlogFullPageFirstSection/BlogFullPageFirstSection";
import BlogFullPageSectionSecond from "../../BlogFullPageSection/BlogFullPageSectionSecond/BlogFullPageSectionSecond";
import style from "./BlogFullPage.module.css";
import Header from "../../Header/Header";
import { Helmet } from "react-helmet";

function BlogFullPage() {
  return (
    <div>
      <Header />
      <div className={style.Container}>
        <BlogFullPageSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default BlogFullPage;
