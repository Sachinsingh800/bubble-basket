import React from "react";
import style from "./AccountPageSectionSecond.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import PasswordIcon from "@mui/icons-material/Password";
import AddHomeIcon from "@mui/icons-material/AddHome";
import { AddtoCart } from "../../Apis/Apis";
import Cookies from "js-cookie";

function AccountPageSectionSecond() {
  const handleLinkClick = (category) => {
    window.location.href = `/Update-Information/${category}`;

  };
const guest = sessionStorage.getItem("guest")

  const handleLogout = () => {
    // Remove data from local storage
    sessionStorage.clear();
    sessionStorage.removeItem("cartData");
    // Remove token from cookies
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Redirect to home page
    window.location.href = "/";
  };

  const token = Cookies.get("token");

  return (
    <div className={style.main}>
      <h1>Manage Your Account</h1>
      <div className={style.container}>
        <a href="/Login">
          <div>
            <HowToRegIcon className={style.icon} />
            <span>Register</span>
          </div>
        </a>

        {token || guest  ? (
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
        <div onClick={() => handleLinkClick("password")}>
          <PasswordIcon className={style.icon} />
          <span> Change your password</span>
        </div>

        <div onClick={() => handleLinkClick("address")}>
          <AddHomeIcon className={style.icon} />
          <span> Modify your address book</span>
        </div>
      </div>
    </div>
  );
}

export default AccountPageSectionSecond;
