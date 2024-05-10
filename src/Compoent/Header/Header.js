import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import style from "./Header.module.css";
import logo from "../Images/logo.jpg";
import searchicon from "../Images/search.png";
import shoppingCart from "../Images/shopping-basket.png";
import avatarimg from "../Images/user.png";
import menuicon from "../Images/menu.png";
import AnchorTemporaryDrawer from "../AnchorTemporaryDrawer/AnchorTemporaryDrawer";
import { useRecoilState } from "recoil";
import { cartData, updateCart } from "../Recoil/Recoil";
import axios from "axios";

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

export default function Header(props) {
  const [update, setUpdate] = useRecoilState(updateCart);
  const [cartItem, setCartItem] = React.useState();
  const [category, setCategory] = React.useState([]);
  const [seacrh, setSearch] = React.useState("");

  React.useEffect(() => {
    const cartDatafromlocal = JSON.parse(localStorage.getItem("cartData"));
    const cartItem = cartDatafromlocal?.length;
    setCartItem(cartItem);
    getAllCategory();
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

  console.log(category, "category");

  const getAllCategory = async () => {
    // Function to retrieve token from cookies
    // Function to retrieve token from cookies
    function getToken() {
      return document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
    }

    // Retrieve token
    const token = getToken();

    try {
      const headers = {
        "x-auth-token": token, // Pass the token in the header
        "Content-Type": "application/json", // Set content type to JSON
      };
      const response = await axios.get(
        `https://wine-rnlq.onrender.com/admin/product/getAll`,
        {
          headers,
        }
      );

      const { status, message, data } = response.data;
      if (status) {
        console.log(data, "data aaa raha");

        setCategory(data);
      }

      // Handle response data as needed
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Axios error (HTTP error)
        const { response } = error;
        // Set the error message
        const errorMessage = response.data.message;
        // alert(errorMessage);
        // Log the error message as a string
        localStorage.setItem("allAdress", JSON.stringify([]));
        // alert(errorMessage);
        console.error("Axios Error:", errorMessage);
        // window.location.href = "/Login";
      } else {
        // Network error (e.g., no internet connection)
        // alert("Something went wrong");
        console.error("Network Error:", error.message);
      }
    }
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
                    {category.map((item) => (
                      <div className={style.category_box}>
                        <p
                          className={style.option}
                          onClick={() =>
                            (window.location.href = `/Product/${item.category}`)
                          }
                        >
                          {item.category}
                        </p>
                      </div>
                    ))}
                  </div>
                </li>
                <li
                  onMouseEnter={() => showOptionDiv(2)}
                  onMouseLeave={() => closeOptionDiv(2)}
                >
                  <a>BULK ORDER</a>
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
                  <a href="/OrderHistory">TRACK ORDER</a>
                  <div
                    className={style.bottom_div}
                    style={{
                      visibility: showOptions[3] ? "visible" : "hidden",
                    }}
                  >
                    <p onClick={() => (window.location.href = "/OrderHistory")}>
                      Order History{" "}
                    </p>
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
                <div className={style.search_box}>
                  <button className={style.btn_search}>
                    <div className={style.icon_box}>
                      <img src={searchicon} alt="search" />
                    </div>
                  </button>
                  <input
                    type="text"
                    className={style.input_search}
                    placeholder="Type to Search..."
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  {seacrh.length > 0 && (
                    <ul className={style.option_box}>
                      {category.map((item) => (
                        <li    onClick={() =>
                          (window.location.href = `/Product/${item.category}`)
                        }>
                         <div className={style.search_img_box}>
                          <img src={item?.productImg[0]?.url} alt={item.title}/>
                         </div>
                         <div  className={style.price_box}>
                         <h6>{item?.title}</h6> 
                         <span>${item?.price}</span> 
                         </div>
                       
                        </li>
                      ))}
                    </ul>
                  )}
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
    </React.Fragment>
  );
}
