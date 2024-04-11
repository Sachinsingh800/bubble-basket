import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import style from "./ProductPage.module.css";
import logo from "../../Images/logo2.jpg";
import searchicon from "../../Images/search.png";
import shoppingCart from "../../Images/shopping-basket.png";
import avatarimg from "../../Images/user.png";
import menuicon from "../../Images/menu.png";
import AnchorTemporaryDrawer from "../../AnchorTemporaryDrawer/AnchorTemporaryDrawer";
import Footer from "../../Sections/Footer/Footer";
import ProductSectionFirst from "../../ProductPageSection/SectionFirst/ProductSectionFirst";
import ProductSectionSecond from "../../ProductPageSection/SectionSecond/ProductSectionSecond";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ProductPage(props) {
  return (
    <React.Fragment>
      <AnchorTemporaryDrawer />
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ backgroundColor: "white", boxShadow: "none" }}>
          <Toolbar>
            <div className={style.tool_bar}>
              <ul className={style.left_section}>
                <li>
                  <a>HOME</a>
                </li>
                <li>
                  <a>BULKORDER</a>
                </li>
                <li>
                  <a>TRACKORDER</a>
                </li>
              </ul>
              <div className={style.middle_section}>
                <div className={style.img_box}>
                  <img src={logo} alt="logo" />
                </div>
              </div>

              <div className={style.right_section}>
                <div className={style.icon_box}>
                  <img src={searchicon} alt="search" />
                </div>
                <div className={style.icon_box}>
                  <img src={avatarimg} alt="user" />
                </div>
                <div className={style.icon_box}>
                  <img src={shoppingCart} alt="shopping" />
                </div>
                <div className={style.icon_box4}>
                  <img src={menuicon} alt="menu" />
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <div className={style.Container}>
        <ProductSectionFirst />
        <ProductSectionSecond />
        <Footer />
      </div>
    </React.Fragment>
  );
}
