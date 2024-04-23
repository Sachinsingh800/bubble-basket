import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import style from "./NavBar.module.css";
import logo from "../Images/logo.jpg";
import searchicon from "../Images/search.png";
import shoppingCart from "../Images/shopping-basket.png";
import avatarimg from "../Images/user.png";
import menuicon from "../Images/menu.png";
import HomePageCarousel from "../HomePageCarousel/HomePageCarousel";
import FirstSection from "../Sections/FirstSection/FirstSection";
import AnchorTemporaryDrawer from "../AnchorTemporaryDrawer/AnchorTemporaryDrawer";
import SecondSection from "../Sections/SecondSection/SecondSection";
import SectionThird from "../Sections/SectionThird/SectionThird";
import SectionFourth from "../Sections/SectionFourth/SectionFourth";
import SectionFifth from "../Sections/SectionFifth/SectionFifth";
import SectionSixth from "../Sections/SectionSixth/SectionSixth";
import SectionSeventh from "../Sections/SectionSeventh/SectionSeventh";
import SectionEight from "../Sections/SectionEight/SectionEight";
import SectionNinth from "../Sections/SectionNinth/SectionNinth";
import SectionTenth from "../Sections/SectionTenth/SectionTenth";
import Footer from "../Sections/Footer/Footer";
import ImageSlider from "../ImageSlider/ImageSlider";
import { useRecoilState } from "recoil";
import { cartData, updateCart } from "../Recoil/Recoil";

function HideOnScroll(props) {
  const { children, window } = props;
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
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const [update, setUpdate] = useRecoilState(updateCart);
  const [cartItem, setCartItem] = React.useState();

  React.useEffect(() => {
    const cartDatafromlocal = JSON.parse(localStorage.getItem("cartData"));
    const cartItem = cartDatafromlocal?.length;
    setCartItem(cartItem);
  }, [update]);

  const [showOptions, setShowOptions] = React.useState({
    1: false,
    2: false,
    3: false,
  });

  const showOptionDiv = (index) => {
    setShowOptions({ ...showOptions, [index]: true });
  };

  const closeOptionDiv = (index) => {
    setShowOptions({ ...showOptions, [index]: false });
  };

  return (
    <React.Fragment>
      <span className={style.dawer}>
        <AnchorTemporaryDrawer />
      </span>
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
                  <a href="/OrderHistory">TRACKORDER</a>
                  <div
                    className={style.bottom_div}
                    style={{
                      visibility: showOptions[3] ? "visible" : "hidden",
                    }}
                  >
                    <p onClick={()=>window.location.href="/OrderHistory"}>Order History </p>
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
                <a href="/AccountPage">
                  <div className={style.icon_box}>
                    <img src={avatarimg} alt="user" />
                  </div>
                </a>
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
        <FirstSection />
        <SecondSection />
        <SectionThird />
        <SectionFourth />
        <SectionFifth />
        <SectionSixth />
        <SectionSeventh />
        <SectionEight />
        <ImageSlider />
        <SectionNinth />
        <SectionTenth />
        <Footer />
      </div>
    </React.Fragment>
  );
}
