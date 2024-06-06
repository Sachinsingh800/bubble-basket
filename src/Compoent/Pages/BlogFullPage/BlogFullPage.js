import React from "react";
import Footer from "../../Sections/Footer/Footer";
import BlogFullPageFirstSection from "../../BlogFullPageSection/BlogFullPageFirstSection/BlogFullPageFirstSection";
import BlogFullPageSectionSecond from "../../BlogFullPageSection/BlogFullPageSectionSecond/BlogFullPageSectionSecond";
import style from "./BlogFullPage.module.css";
import Header from "../../Header/Header";


function BlogFullPage() {
  return (
    <div>
      <Header />
      <div className={style.Container}>
        {/* <BlogFullPageFirstSection /> */}
        <BlogFullPageSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default BlogFullPage;
