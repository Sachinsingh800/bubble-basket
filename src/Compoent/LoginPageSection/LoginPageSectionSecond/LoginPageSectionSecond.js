import React, { useState, useEffect } from "react";
import style from "./LoginPageSectionSecond.module.css";
import AuthForm from "./AuthForm";

function LoginPageSectionSecond() {
  return (
    <div className={style.main}>
        <AuthForm />
    </div>
  );
}

export default LoginPageSectionSecond;
