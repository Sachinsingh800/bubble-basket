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
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Luxury Bubble Basket | Buy Gifts For Everyone</title>
        <meta
          name="description"
          content="Find the perfect wine and champagne gifts for everyone. Shop online for high-quality gifts that will impress any recipient."
        />
        <link rel="canonical" href="https://www.luxurybubblebasket.com/Blog/665454084a19830003b56e3c/" />
      </Helmet>
      <Header />
      <div className={style.Container}>
        <BlogFullPageSectionSecond />
        <Footer />
      </div>
    </div>
  );
}

export default BlogFullPage;
