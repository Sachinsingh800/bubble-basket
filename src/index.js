import React from "react";
import { hydrate, render } from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import ProductPage from "./Compoent/Pages/ProductPage/ProductPage";
import ColumnPage from "./Compoent/Pages/ColumnPage/ColumnPage";
import CartPage from "./Compoent/Pages/CartPage/CartPage";
import BlogPage from "./Compoent/Pages/BlogPage/BlogPage";
import BlogFullPage from "./Compoent/Pages/BlogFullPage/BlogFullPage";
import ContactUsPage from "./Compoent/Pages/ContactUsPage/ContactUsPage";
import ErrorPage from "./Compoent/Pages/ErrorPage/ErrorPage";
import CheckoutPage from "./Compoent/Pages/CheckoutPage/CheckoutPage";
import LoginPage from "./Compoent/Pages/LoginPage/LoginPage";
import AboutUsPage from "./Compoent/Pages/AboutUsPage/AboutUsPage";
import FAQPage from "./Compoent/Pages/FAQPage/FAQPage";
import PendingAndRefundPage from "./Compoent/Pages/PendingAndRefundPage/PendingAndRefundPage";
import PrivacyAanPolicy from "./Compoent/Pages/PrivacyAanPolicy/PrivacyAanPolicy";
import TermsAndConditions from "./Compoent/Pages/TermsAndConditions/TermsAndConditions";
import ThankYouPage from "./Compoent/Pages/ThankYouPage/ThankYouPage";
import RegisterPage from "./Compoent/Pages/RegisterPage/RegisterPage";
import AccountPage from "./Compoent/Pages/AccountPage/AccountPage";
import OrderHistoryPage from "./Compoent/Pages/OrderHistoryPage/OrderHistoryPage";
import OrderDetailPage from "./Compoent/Pages/OrderDetail/OrderDetailPage";
import UpdateInformation from "./Compoent/Pages/UpdateInformation/UpdateInformation";
import BrandPage from "./Compoent/Pages/BrandPage/BrandPage";
import Payment from "./Compoent/Pages/Payment/Payment";
import AllCategoryPage from "./Compoent/Pages/AllCategoryPage/AllCategoryPage";
import ForgotPassword from "./Compoent/Pages/ForgotPassword/ForgotPassword";
import FilterAccordingToDes from "./Compoent/Pages/FilterAccordingToDes/FilterAccordingToDes";
import Catalog  from "./Compoent/Pages/Catalog/Catalog"
import AddressForm from "./Compoent/LoginPageSection/LoginPageSectionSecond/BillingAddressForm";
import Address from "./Compoent/Pages/Address/Address";
import CheckoutPageGuest from "./Compoent/Pages/CheckoutPageGuest/CheckoutPageGuest";
import PaymentGuest from "./Compoent/Pages/Payment/PaymentGuest";



// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Define the React application structure
const appContent = (
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="Product/:title" element={<ProductPage />} />
          <Route path=":category" element={<AllCategoryPage />} />
          <Route path="search/:search" element={<FilterAccordingToDes />} />
          <Route path="brand/:category" element={<BrandPage />} />
          <Route path="Product" element={<ColumnPage />} />
          <Route path="Cart" element={<CartPage />} />
          <Route path="Blog" element={<BlogPage />} />
          <Route path="Blog/:blogTitle" element={<BlogFullPage />} />
          <Route path="Contact-Us" element={<ContactUsPage />} />
          <Route path="Checkout" element={<CheckoutPage />} />
          <Route path="Checkout-guest" element={<CheckoutPageGuest />} />
          <Route path="Login" element={<LoginPage />} />
          <Route path="About-Us" element={<AboutUsPage />} />
          <Route path="FAQ" element={<FAQPage />} />
          <Route
            path="Refund-and-Return-Policy"
            element={<PendingAndRefundPage />}
          />
          <Route path="privacy-and-policy" element={<PrivacyAanPolicy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="ThankYou" element={<ThankYouPage />} />
          <Route path="Register" element={<RegisterPage />} />
          <Route path="Account" element={<AccountPage />} />
          <Route path="Order-History" element={<OrderHistoryPage />} />
          <Route path="Forgot-Password" element={<ForgotPassword />} />
          <Route path="Order-Detail/:id" element={<OrderDetailPage />} />
          <Route
            path="Update-Information/:category"
            element={<UpdateInformation />}
          />
          <Route path="Payment" element={<Payment />} />
          <Route path="payment-guest" element={<PaymentGuest/>} />
          <Route path="*" element={<ErrorPage />} />{" "}
          <Route path="/catalog" element={<Catalog />} />{" "}
          <Route path="/address" element={<Address/>} />{" "}
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);

// Use hydrate if the root element has pre-rendered content, otherwise render
if (rootElement.hasChildNodes()) {
  hydrate(appContent, rootElement);
} else {
  render(appContent, rootElement);
}

// Performance measuring (optional)
reportWebVitals();
