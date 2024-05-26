import React from "react";
import style from "./AccountPageSectionSecond.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import PasswordIcon from "@mui/icons-material/Password";
import AddHomeIcon from "@mui/icons-material/AddHome";
import { AddtoCart } from "../../Apis/Apis";

function AccountPageSectionSecond() {
  const handleLinkClick = (category) => {
    window.location.href = `/UpdateInformation/${category}`;

  };

  

  const handleProductAddToCartInServer= async (productId) => {
    try {
      const response = await AddtoCart(productId);
          console.log(response,"cart data")
    } catch (error) {
      console.error("Error getting product data:", error);
    }
  };

  const handleLogout = () => {
    // Remove data from local storage
    localStorage.clear();
    
    // Remove token from cookies
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Redirect to home page
    window.location.href = "/";
  };

  const loginStatus = JSON.parse(localStorage.getItem("isLoggedIn") || false);

  return (
    <div className={style.main}>
      <h1>Manage Your Account</h1>
      <div className={style.container}>
        <a href="/RegisterPage">
          <div>
            <HowToRegIcon className={style.icon} />
            <span>Register</span>
          </div>
        </a>

        {loginStatus ? (
          <div onClick={handleLogout}>
            <LoginIcon className={style.icon} />
            <span>Logout</span>
          </div>
        ) : (
          <a href="/Login">
            <div>
              <LoginIcon className={style.icon} />
              <span>Login</span>
            </div>
          </a>
        )}

        <div onClick={() => handleLinkClick("account")}>
          <AccountCircleIcon className={style.icon} />
          <span>Edit your account information</span>
        </div>

        <div onClick={() => handleLinkClick("password")}>
          <PasswordIcon className={style.icon} />
          <span> Change your password</span>
        </div>

        <div onClick={() => handleLinkClick("address")}>
          <AddHomeIcon className={style.icon} />
          <span> Modify your address book entries</span>
        </div>
      </div>
    </div>
  );
}

export default AccountPageSectionSecond;
