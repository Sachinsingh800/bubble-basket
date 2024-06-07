import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Sections/Footer/Footer";
import BlogPageFirstSection from "../../BlogPageSection/BlogPageFirstSection/BlogPageFirstSection";
import BlogPageSecondSection from "../../BlogPageSection/BlogPageSecondSection/BlogPageSecondSection";
import style from "./BlogPage.module.css"
import BreadCrumsHeader from "../../BreadCrumsHeader/BreadCrumsHeader";
import { Helmet } from "react-helmet";


function BlogPage() {
  return (
    <div>
            <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Luxury Bubble Basket | Buy Gifts For Everyone</title>
        <meta name="description" content="Find the perfect wine and champagne gifts for everyone. Shop online for high-quality gifts that will impress any recipient." />
        <link rel="canonical" href="https://www.luxurybubblebasket.com/" />
      </Helmet>
      <Header />
      <div className={style.Container}>
        <BreadCrumsHeader urlname={"Blog"} />
        <BlogPageSecondSection />
        <Footer />
      </div>
    </div>
  );
}

export default BlogPage;
