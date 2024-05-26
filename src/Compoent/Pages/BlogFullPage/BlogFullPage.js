import React from "react";
import Footer from "../../Sections/Footer/Footer";
import BlogFullPageFirstSection from "../../BlogFullPageSection/BlogFullPageFirstSection/BlogFullPageFirstSection";
import BlogFullPageSectionSecond from "../../BlogFullPageSection/BlogFullPageSectionSecond/BlogFullPageSectionSecond";
import style from "./BlogFullPage.module.css";
import Header from "../../Header/Header";
import Chatbot from "../../ChatBot/ChatBot";

function BlogFullPage() {
  return (
    <div>
      <Header />
      <Chatbot />
      <div className={style.Container}>
        <BlogFullPageFirstSection />
        <BlogFullPageSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default BlogFullPage;
