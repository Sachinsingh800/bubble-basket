import React from "react";
import Footer from "../../Sections/Footer/Footer";
import style from "./ErrorPage.module.css";
import Header from "../../Header/Header";
import { Helmet } from "react-helmet";

function ErrorPage() {
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
        <div className={style.error_box}>
          <h1>404</h1>
          <span>Oops! That page can't be found</span>
          <hr className={style.line} />
          <p className={style.para}>
            We're really sorry but we can't seem to find the page you were
            looking for.
          </p>
          <a href="/">
            <button>BACK THE HOME PAGE →</button>
          </a>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ErrorPage;
