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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RecoilRoot>
     <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<App />} />
        <Route path={'/ProductPage'} element={<ProductPage />} />
        <Route path={'/ColumnPage'} element={<ColumnPage />} />
        <Route path={'/CartPage'} element={<CartPage />} />
        <Route path={'/BlogPage'} element={<BlogPage />} />
        <Route path={'/Blog/:id'} element={<BlogFullPage />} />
        <Route path={'/ContactUsPage'} element={<ContactUsPage />} />
        <Route path={'/CheckoutPage'} element={<CheckoutPage />} />
        <Route path={'/*'} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    </RecoilRoot>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
