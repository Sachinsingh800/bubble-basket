import React, { useState, useEffect } from "react";
import style from "./LoginPageSectionSecond.module.css";
import { getCheckout, loginUser } from "../../Apis/Apis";
import axios from "axios";

function LoginPageSectionSecond() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
    rememberMe: false,
  });

  const [data, setData] = useState([]);
  const[ totalprice, setTotalprice] = useState(null);

  useEffect(() => {
    const rememberMeData = JSON.parse(localStorage.getItem("rememberMeData"));
    if (rememberMeData) {
      setFormData(rememberMeData);
    }
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    const priceData = JSON.parse(localStorage.getItem("totalPrice"));
    if (cartData) {
      setData(cartData);
      setTotalprice(priceData)
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
  };


  const handleCheckoutOrder =async()=>{
    try{
     const response= await getCheckout()
    }catch(error){
      console.log(error)
    }
   }



  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

    try {
      const response = await loginUser({
        email: formData.usernameOrEmail,
        password: formData.password,
        items: data.map((item) => ({
          productId: item._id,
          quantity: item.quantity,
        })),
        totalPrice: totalprice,
        totalItems: data.length,
      }, formData.rememberMe);

      if (response.status) {
        // If login is successful, save token to local storage
        localStorage.setItem("token", JSON.stringify(response.token));
        handleCheckoutOrder()
        // Redirect to dashboard or desired page
        // Example: history.push('/dashboard');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response } = error;
        const errorMessage = response?.data?.message;
        console.log("Error Message:", errorMessage);
      } else {
        const errorMessage = error.message;
        console.log("Network Error:", errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.main}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h4>LOGIN</h4>
        <div className={style.input_box}>
          <label htmlFor="usernameOrEmail">Username or email address *</label>
          <input
            type="text"
            id="usernameOrEmail"
            name="usernameOrEmail"
            value={formData.usernameOrEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.input_box}>
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.checkbox}>
          <input
            className={style.check}
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <button type="submit">LOGIN →</button>
        <p>Lost your password?</p>
      </form>
    </div>
  );
}

export default LoginPageSectionSecond;
