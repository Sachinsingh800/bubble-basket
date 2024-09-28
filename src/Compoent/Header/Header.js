// src/components/Header/Header.js
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
import HumBurger from "../HumBurger/HumBurger";
import { useState } from "react";

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
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const guest = JSON.parse(sessionStorage.getItem("guest"))

  const handleMouseEnter = () => {
    setPopoverOpen(true);
  };

  const handleMouseLeave = () => {
    setPopoverOpen(false);
  };

  React.useEffect(() => {
    const cartDatafromlocal = JSON.parse(sessionStorage.getItem("cartData"));
    const cartItem = cartDatafromlocal?.length ? cartDatafromlocal?.length : 0;
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
        alert("Your Bulk Order Form is Downloaded");
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

  const handleAllCategory = async () => {
    try {
      const response = await getAllCategory();
      setCategory(response.data);
    } catch (error) {
      console.error("Error in handleAllCategory function:", error);
    }
  };

  const handleAllProduct = async () => {
    try {
      const response = await getAllProduct();
      setProduct(response.data);
    } catch (error) {
      console.error("Error in handleAllProduct function:", error);
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setShowSearch(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const formatTitleForUrl = (title) => {
    return title.replace(/\s+/g, "-").replace(/:/g, "");
  };

  const handleSearchClick = () => {
    if (search.trim()) {
      window.location.href = `/search/${search.trim()}`;
      setSearch(""); // Reset search input after navigation
    }
  };

  const convertString = (input) => {
    // Replace spaces and %20 with -
    return input
      .replace(/%20/g, "-") // Convert encoded spaces
      .replace(/\s+/g, "-") // Convert regular spaces
      .replace(/:/g, "") // Remove colons
      .toLowerCase();  
  };

  return (
    <React.Fragment>
      <span className={style.dawer}>
        <AnchorTemporaryDrawer />
      </span>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ backgroundColor: "white", boxShadow: "none" }}>
          <Toolbar className={style.tool_bar_main}>
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
                    <ul className={style.list_option}>
                      <li
                        onClick={() =>
                          (window.location.href = `/${convertString(category[0]?.categoryName)}`)
                        }
                      >
                        {category[0]?.categoryName}
                      </li>
                      <li
                        onClick={() =>
                          (window.location.href = `/${convertString(category[1]?.categoryName)}`)
                        }
                      >
                        {category[1]?.categoryName}
                      </li>
                      <li
                        onClick={() =>
                          (window.location.href = `/${convertString(category[10]?.categoryName)}`)
                        }
                      >
                        {category[10]?.categoryName}
                      </li>
                      <li
                        onClick={() =>
                          (window.location.href = `/${convertString(category[2]?.categoryName)}`)
                        }
                      >
                        {category[2]?.categoryName}
                      </li>
                      <li
                        onClick={() =>
                          (window.location.href = `/${convertString(category[11]?.categoryName)}`)
                        }
                      >
                        {category[11]?.categoryName}
                      </li>
                    </ul>
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
                  <a href="/Order-History">TRACK ORDER</a>
                </li>
              </ul>
              <div className={style.middle_section}>
                <a href="/">
                  <div className={style.img_box}>
                    <img
                      src={logo}
                      alt="Luxury Bubble Basket logo"
                      title="Luxury Bubble Basket logo"
                      loading="lazy"
                      width="auto"
                      height="auto"
                    />
                  </div>
                </a>
              </div>
              <div className={style.right_section}>
                <div
                  className={style.search_container}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className={style.icon_box}
                    onMouseEnter={handleMouseEnter}
                  >
                    <img
                      src={searchicon}
                      alt="Search"
                      title="Search"
                      loading="lazy"
                      width="auto"
                      height="auto"
                    />
                  </div>
                  {isPopoverOpen && (
                    <div className={style.popover}>
                      <input
                        type="text"
                        placeholder="Type to Search..."
                        value={search}
                        onChange={(e) => {
                          setSearch(e.target.value);
                          setShowSearch(e.target.value.length > 0);
                        }}
                        className={style.popover_input}
                      />

                      <button
                        className={style.search_button}
                        onClick={handleSearchClick}
                      >
                        <div className={style.icon_box}>
                          <img
                            src={searchicon}
                            alt="Search"
                            title="Search"
                            width="auto"
                            height="auto"
                          />
                        </div>
                      </button>
                      {showSearch && (
                        <ul className={style.option_box}>
                          {product
                            ?.filter((elem) => {
                              const lowerCaseSearch = search?.toLowerCase();
                              return (
                                elem?.title?.toLowerCase().includes(lowerCaseSearch) ||
                                elem?.sku?.toLowerCase().includes(lowerCaseSearch)
                              );
                            })
                            ?.map((item) => (
                              <li
                                key={item?._id}
                                onClick={() =>
                                  (window.location.href = `/Product/${formatTitleForUrl(
                                    item?.title
                                  )}`)
                                }
                              >
                                <div className={style.search_img_box}>
                                  <img
                                    src={item?.productImg[0]?.url}
                                    alt={item?.title}
                                    title={item?.title}
                                    loading="lazy"
                                    width="auto"
                                    height="auto"
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
                  )}
                </div>
                <a href="/Account">
                  <div className={style.icon_box}>
                    <img
                      src={avatarimg}
                      alt="User"
                      title="User"
                      loading="lazy"
                      width="auto"
                      height="auto"
                    />
                  </div>
                </a>
                <a href="/Cart">
                  <div className={style.icon_box2}>
                    <span className={style.cart_count}>{cartItem}</span>
                    <img
                      src={shoppingCart}
                      alt="shopping"
                      title="Shopping"
                      loading="lazy"
                      width="auto"
                      height="auto"
                    />
                  </div>
                </a>

                <div className={style.humburger}>
                  <HumBurger />
                </div>
                {guest  && <p>Guest</p>}
              </div>
            </div>
            <div className={style.search_box_mob}>
              <div className={style.input_container}>
                <input
                  type="text"
                  className={style.input_search_mob}
                  placeholder="Type to Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div className={style.icon_box}>
                  <img
                    onClick={handleSearchClick}
                    src={searchicon}
                    alt="Search"
                    title="Search"
                    loading="lazy"
                    width="auto"
                    height="auto"
                  />
                </div>
              </div>

              {search.length > 0 && (
                <ul className={style.option_box_mob}>
                  {product
                    ?.filter((elem) => {
                      const lowerCaseSearch = search?.toLowerCase();
                      return (
                        elem?.title?.toLowerCase().includes(lowerCaseSearch) ||
                        elem?.sku?.toLowerCase().includes(lowerCaseSearch)
                      );
                    })
                    ?.map((item) => (
                      <li
                        key={item?._id}
                        onClick={() =>
                          (window.location.href = `/Product/${formatTitleForUrl(
                            item?.title
                          )}`)
                        }
                      >
                        <div className={style.search_img_box_mob}>
                          <img
                            src={item?.productImg[0]?.url}
                            alt={item?.title}
                            title={item?.title}
                            loading="lazy"
                            width="auto"
                            height="auto"
                          />
                        </div>
                        <div className={style.price_box_mob}>
                          <h6>{item?.title}</h6>
                          <span className={style.price_tag}>
                            ${item?.price}
                          </span>
                        </div>
                      </li>
                    ))}
                </ul>
              )}
            </div>
           
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
