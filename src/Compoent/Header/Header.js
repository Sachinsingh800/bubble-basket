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
import bulkOrderForm from "../BulkOrderForm/bulkOrderForm.xlsx";
import { getAllCategory, getAllProduct } from "../Apis/Apis";

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
  const [product, setProduct] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [showSearch, setShowSearch] = React.useState(false);

  React.useEffect(() => {
    const cartDatafromlocal = JSON.parse(localStorage.getItem("cartData"));
    const cartItem = cartDatafromlocal?.length;
    setCartItem(cartItem);
    handleAllCategory();
    handleAllProduct();

   


  }, [update]);

  const [showOptions, setShowOptions] = React.useState({
    1: false,
    2: false,
    3: false,
  });

  const downloadExcel = () => {
    // Path to the Excel file in your project folder
    const excelFilePath = bulkOrderForm;

    fetch(excelFilePath)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Luxury_Bubble_Basket.xlsx");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => {
        console.error("Error downloading the Excel file:", error);
      });
  };

  const showOptionDiv = (index) => {
    setShowOptions({ ...showOptions, [index]: true });
  };

  const closeOptionDiv = (index) => {
    setShowOptions({ ...showOptions, [index]: false });
  };

  const handleToggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleAllCategory = async () => {
    try {
      const response = await getAllCategory();
      setCategory(response.data)
    } catch (error) {
      console.error("Error in handleAllCategory function:", error);
    }
  };

  const handleAllProduct = async () => {
    try {
      const response = await getAllProduct();
      setProduct(response.data)
    } catch (error) {
      console.error("Error in handleAllCategory function:", error);
    }
  };

  const handleClickOutsideSearch = (event) => {
    if (event.target.closest(`.${style.search_box}`) === null) {
      setShowSearch(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutsideSearch);
    return () => {
      document.removeEventListener("click", handleClickOutsideSearch);
    };
  }, []);

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
                    {category?.map((item) => (
                      <div className={style.category_box}>
                        <p
                          className={style.option}
                          onClick={() =>
                            (window.location.href = `/${item?.categoryName}`)
                          }
                        >
                          {item?.categoryName}
                        </p>
                      </div>
                    ))}
                  </div>
                </li>
                <li
                  onMouseEnter={() => showOptionDiv(2)}
                  onMouseLeave={() => closeOptionDiv(2)}
                >
                  <a onClick={downloadExcel} className={style.bulk_order}>
                    BULK ORDER
                  </a>
                </li>
                <li
                  onMouseEnter={() => showOptionDiv(3)}
                  onMouseLeave={() => closeOptionDiv(3)}
                >
                  <a href="/OrderHistory">TRACK ORDER</a>
                </li>
              </ul>
              <div className={style.middle_section}>
                <div className={style.img_box}>
                  <img src={logo} alt="logo" />
                </div>
              </div>
              <div className={style.right_section}>
                <div className={style.search_box}>
                  <button
                    className={style.btn_search}
                    onClick={handleToggleSearch}
                  >
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
                  {showSearch && (
                    <ul className={style.option_box}>
                      {product
                        ?.filter((elem) => {
                          return elem?.title
                            ?.toLowerCase()
                            .includes(search?.toLowerCase());
                        })
                        ?.map((item) => (
                          <li
                            onClick={() =>
                              (window.location.href = `/Product/${item?.category}`)
                            }
                          >
                            <div className={style.search_img_box}>
                              <img
                                src={item?.productImg[0]?.url}
                                alt={item?.title}
                              />
                            </div>
                            <div className={style.price_box}>
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
