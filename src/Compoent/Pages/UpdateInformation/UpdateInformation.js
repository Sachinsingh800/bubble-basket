import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import style from "./UpdateInformation.module.css";
import logo from "../../Images/logo2.jpg";
import searchicon from "../../Images/search.png";
import shoppingCart from "../../Images/shopping-basket.png";
import avatarimg from "../../Images/user.png";
import menuicon from "../../Images/menu.png";
import AnchorTemporaryDrawer from "../../AnchorTemporaryDrawer/AnchorTemporaryDrawer";
import Footer from "../../Sections/Footer/Footer";
import BlogPageFirstSection from "../../BlogPageSection/BlogPageFirstSection/BlogPageFirstSection";
import BlogPageSecondSection from "../../BlogPageSection/BlogPageSecondSection/BlogPageSecondSection";
import { useRecoilState } from "recoil";
import { cartData, updateCart } from "../../Recoil/Recoil";
import TermAndConditionSectionFirst from "../../TermAndConditionSection/TermAndConditionSectionFirst/TermAndConditionSectionFirst";
import TermAndConditionSectionSecond from "../../TermAndConditionSection/TermAndConditionSectionSecond/TermAndConditionSectionSecond";
import ThankYouPageSectionFirst from "../../ThankYouPageSection/ThankYouPageSectionFirst/ThankYouPageSectionFirst";
import ThankYouPageSectionSection from "../../ThankYouPageSection/ThankYouPageSectionSection/ThankYouPageSectionSection";
import UpdateInformationSectionFirst from "../../UpdateInformationSection/UpdateInformationSectionFirst/UpdateInformationSectionFirst";
import UpdateInformationSectionSecond from "../../UpdateInformationSection/UpdateInformationSectionSecond/UpdateInformationSectionSecond";
import UpdatePasswordPageSection from "../../UpdateInformationSection/UpdatePasswordPageSection/UpdatePasswordPageSection";
import UpdateAddressPageSection from "../../UpdateInformationSection/UpdateAddressPageSection/UpdateAddressPageSection";
import { getAddress, updateAddress } from "../../Apis/Apis";
import { useParams } from "react-router-dom";
import Header from "../../Header/Header";
import BreadCrumsHeader from "../../BreadCrumsHeader/BreadCrumsHeader";

export default function UpdateInformation() {
  const { category } = useParams();


  return (
    <div className={style.Container}>
      <Header />
      <BreadCrumsHeader urlname={category} />
      {category == "password" && <UpdatePasswordPageSection />}
      {category == "address" && <UpdateAddressPageSection />}

      <Footer />
    </div>
  );
}
