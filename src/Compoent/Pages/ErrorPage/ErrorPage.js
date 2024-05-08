import React from "react";
import Footer from "../../Sections/Footer/Footer";
import style from "./ErrorPage.module.css";
import Header from "../../Header/Header";

function ErrorPage() {
  return (
    <div>
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
