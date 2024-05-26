import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Sections/Footer/Footer";
import BlogPageFirstSection from "../../BlogPageSection/BlogPageFirstSection/BlogPageFirstSection";
import BlogPageSecondSection from "../../BlogPageSection/BlogPageSecondSection/BlogPageSecondSection";
import style from "./BlogPage.module.css"
import Chatbot from "../../ChatBot/ChatBot";

function BlogPage() {
  return (
    <div>
      <Header />
      <Chatbot />
      <div className={style.Container}>
        <BlogPageFirstSection />
        <BlogPageSecondSection />
        <Footer />
      </div>
    </div>
  );
}

export default BlogPage;
