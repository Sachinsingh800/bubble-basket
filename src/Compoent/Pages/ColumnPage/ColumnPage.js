import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import style from "./ColumnPage.module.css";
import logo from "../../Images/logo2.jpg";
import searchicon from "../../Images/search.png";
import shoppingCart from "../../Images/shopping-basket.png";
import avatarimg from "../../Images/user.png";
import menuicon from "../../Images/menu.png";
import AnchorTemporaryDrawer from "../../AnchorTemporaryDrawer/AnchorTemporaryDrawer";
import Footer from "../../Sections/Footer/Footer";
import ProductSectionFirst from "../../ProductPageSection/SectionFirst/ProductSectionFirst";
import ProductSectionSecond from "../../ProductPageSection/SectionSecond/ProductSectionSecond";
import ColumnPageSectionFirst from "../../ColumnPageSection/ColumnPageSectionFirst/ColumnPageSectionFirst";
import ColumnPageSectionSecond from "../../ColumnPageSection/ColumnPageSectionSecond/ColumnPageSectionSecond";
import { useRecoilState } from "recoil";
import { cartData } from "../../Recoil/Recoil";

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

export default function ColumnPage(props) {
  const [showOptions, setShowOptions] = React.useState({});
  const [data, setData] = useRecoilState(cartData);
  const cartDatafromlocal=JSON.parse(localStorage.getItem("cartData"))
  const cartItem=cartDatafromlocal ? cartDatafromlocal.length : data.length

  const showOptionDiv = (index) => {
    setShowOptions({ ...showOptions, [index]: true });
  };

  const closeOptionDiv = (index) => {
    setShowOptions({ ...showOptions, [index]: false });
  };
  return (
    <React.Fragment>
          <span className={style.dawer}><AnchorTemporaryDrawer /></span> 
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ backgroundColor: "white", boxShadow: "none" }}>
          <Toolbar>
            <div className={style.tool_bar}>
            <ul className={style.left_section}>
                <li
                  onMouseEnter={() => showOptionDiv(1)}
                  onMouseLeave={() => closeOptionDiv(1)}
                >
                  <a href="/">HOME</a>
                  <div
                    className={style.bottom_div}
                    style={{
                      visibility: showOptions[1] ? "visible" : "hidden",
                    }}
                  >
                    <p>Content for HOME</p>
                    <p>Content for HOME</p>
                    <p>Content for HOME</p>
                    <p>Content for HOME</p>
                  </div>
                </li>
                <li
                  onMouseEnter={() => showOptionDiv(2)}
                  onMouseLeave={() => closeOptionDiv(2)}
                >
                  <a>BULKORDER</a>
                  <div
                    className={style.bottom_div}
                    style={{
                      visibility: showOptions[2] ? "visible" : "hidden",
                    }}
                  >
                    <p>Content for BULKORDER</p>
                    <p>Content for BULKORDER</p>
                    <p>Content for BULKORDER</p>
                    <p>Content for BULKORDER</p>
                  </div>
                </li>
                <li
                  onMouseEnter={() => showOptionDiv(3)}
                  onMouseLeave={() => closeOptionDiv(3)}
                >
                  <a>TRACKORDER</a>
                  <div
                    className={style.bottom_div}
                    style={{
                      visibility: showOptions[3] ? "visible" : "hidden",
                    }}
                  >
                    <p>Content for TRACKORDER</p>
                    <p>Content for TRACKORDER</p>
                    <p>Content for TRACKORDER</p>
                    <p>Content for TRACKORDER</p>
                    <p>Content for TRACKORDER</p>
                  </div>
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
                <a href="/CartPage">
                  <div className={style.icon_box}>
                    <span className={style.cart_count}>{cartItem}</span>
                    <img src={shoppingCart} alt="shopping" />
                  </div>
                </a>
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
        <ColumnPageSectionFirst />
        <ColumnPageSectionSecond />
        <Footer />
      </div>
    </React.Fragment>
  );
}
