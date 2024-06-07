import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './Compoent/Pages/ProductPage/ProductPage';
import ColumnPage from './Compoent/Pages/ColumnPage/ColumnPage';
import CartPage from './Compoent/Pages/CartPage/CartPage';
import BlogPage from './Compoent/Pages/BlogPage/BlogPage';
import BlogFullPage from './Compoent/Pages/BlogFullPage/BlogFullPage';
import ContactUsPage from './Compoent/Pages/ContactUsPage/ContactUsPage';
import ErrorPage from './Compoent/Pages/ErrorPage/ErrorPage';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import CheckoutPage from './Compoent/Pages/CheckoutPage/CheckoutPage';
import LoginPage from './Compoent/Pages/LoginPage/LoginPage';
import AboutUsPage from './Compoent/Pages/AboutUsPage/AboutUsPage';
import FAQPage from './Compoent/Pages/FAQPage/FAQPage';
import PendingAndRefundPage from './Compoent/Pages/PendingAndRefundPage/PendingAndRefundPage';
import PrivacyAanPolicy from './Compoent/Pages/PrivacyAanPolicy/PrivacyAanPolicy';
import TermsAndConditions from './Compoent/Pages/TermsAndConditions/TermsAndConditions';
import ThankYouPage from './Compoent/Pages/ThankYouPage/ThankYouPage';
import RegisterPage from './Compoent/Pages/RegisterPage/RegisterPage';
import AccountPage from './Compoent/Pages/AccountPage/AccountPage';
import OrderHistoryPage from './Compoent/Pages/OrderHistoryPage/OrderHistoryPage';
import OrderDetailPage from './Compoent/Pages/OrderDetail/OrderDetailPage';
import UpdateInformation from './Compoent/Pages/UpdateInformation/UpdateInformation';
import BrandPage from './Compoent/Pages/BrandPage/BrandPage';
import Payment from './Compoent/Pages/Payment/Payment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RecoilRoot>
     <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<App />} />
        <Route path={'Product/:id'} element={<ProductPage />} />
        <Route path={'/:category'} element={<ColumnPage />} />
        <Route path={'brand/:category'} element={<BrandPage />} />
        <Route path={'/Product'} element={<ColumnPage />} />
        <Route path={'/Cart'} element={<CartPage />} />
        <Route path={'/Blog'} element={<BlogPage />} />
        <Route path={'/Blog/:blogTitle'} element={<BlogFullPage />} />
        <Route path={'/ContactUs'} element={<ContactUsPage />} />
        <Route path={'/Checkout'} element={<CheckoutPage />} />
        <Route path={'/Login'} element={<LoginPage />} />
        <Route path={'/AboutUs'} element={<AboutUsPage />} />
        <Route path={'/FAQ'} element={<FAQPage/>} />
        <Route path={'/RefundandReturnPolicy'} element={<PendingAndRefundPage/>} />
        <Route path={'/PrivacyAndPolicy'} element={<PrivacyAanPolicy/>} />
        <Route path={'/TermsAndConditions'} element={<TermsAndConditions/>} />
        <Route path={'/ThankYou'} element={<ThankYouPage/>} />
        <Route path={'/Register'} element={<RegisterPage/>} />
        <Route path={'/Account'} element={<AccountPage />} />
        <Route path={'/OrderHistory'} element={<OrderHistoryPage />} />
        <Route path={'/OrderDetail/:id'} element={<OrderDetailPage />} />
        <Route path={'/UpdateInformation/:category'} element={<UpdateInformation />} />
        <Route path={'/*'} element={<ErrorPage />} />
        <Route path={'/Payment'} element={<Payment />} />
      </Routes>
    </BrowserRouter>
    </RecoilRoot>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
