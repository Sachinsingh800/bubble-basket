import React, { useEffect, useState } from "react";
import style from "./SecondSection.module.css";
import AddIcon from "@mui/icons-material/Add";
import { updateCart } from "../../Recoil/Recoil";
import { useRecoilState } from "recoil";
import { AddtoCart, getAllCategory, getAllProduct } from "../../Apis/Apis";
import axios from "axios";

function SecondSection() {
  const [update, setUpdate] = useRecoilState(updateCart);
  const [loading, setLoading] = useState(false);
  const [showTick, setShowTick] = useState(null);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getAllCategory()
  }, []);

  const getAllCategory = async () => {
    // Function to retrieve token from cookies
    // Function to retrieve token from cookies
    function getToken() {
      return document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
    }

    // Retrieve token
    const token = getToken();

    try {
      const headers = {
        "x-auth-token": token, // Pass the token in the header
        "Content-Type": "application/json", // Set content type to JSON
      };
      const response = await axios.get(
        `https://wine-rnlq.onrender.com/admin/category/getAll`,
        {
          headers,
        }
      );

      const { status, message, data } = response.data;
      if (status) {
        console.log(data, "data aaa raha");

        setProductData(data?.slice(0,3));
      }

      // Handle response data as needed
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Axios error (HTTP error)
        const { response } = error;
        // Set the error message
        const errorMessage = response.data.message;
        // alert(errorMessage);
        // Log the error message as a string
        localStorage.setItem("allAdress", JSON.stringify([]));
        // alert(errorMessage);
        console.error("Axios Error:", errorMessage);
        // window.location.href = "/Login";
      } else {
        // Network error (e.g., no internet connection)
        // alert("Something went wrong");
        console.error("Network Error:", error.message);
      }
    }
  };


  const handleAddToCartInBeckend = async (productId) => {
    try {
      const response = await AddtoCart(productId);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = (item) => {
    const loginStatus=JSON.parse(localStorage.getItem("isLoggedIn"))
    if(loginStatus){
      handleAddToCartInBeckend(item._id)
    }
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const existingProductIndex = cartData.findIndex((product) => product._id === item._id);
  
    if (existingProductIndex !== -1) {
      // If the product already exists in the cart, update its quantity
      const updatedCartData = [...cartData];
      updatedCartData[existingProductIndex].quantity += 1;
      localStorage.setItem("cartData", JSON.stringify(updatedCartData));
    } else {
      // If the product doesn't exist in the cart, add it with default quantity as 1
      const newItem = { ...item, quantity: 1 };
      localStorage.setItem("cartData", JSON.stringify([...cartData, newItem]));
    }
  
    // Trigger UI update
    setUpdate(update + 1);
    setShowTick(item._id);
  };

  function renderHTML(htmlString) {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  }
  

  return (
    <div className={style.main}>
      <div className={style.heading_box}>
        <p>
          <span />
          Gift Basket
          <span />
        </p>
        <h2>COLLECTION</h2>
      </div>
      <div className={style.card_box}>
        {loading && <p>Loading...</p>}
        {productData?.map((item) => (
          <div key={item._id} className={style.inner_container}      onClick={() =>
            (window.location.href = `/Product/${item?.categoryName}`)
          }>
            <button
              // onClick={() => handleAddToCart(item)}
              className={style.addBtn}
            >
              {showTick === item._id ? "✓" : <AddIcon />}
            </button>

            <div className={style.img_box}>
              <img src={item?.categoryImg?.url} alt={item?.title} />
            </div>
            <div className={style.text_box}>
              <h5>{item?.categoryName}</h5>
              {/* <p>{renderHTML(item.description)}</p> */}
              <p>Lorem ipsum sita met , consectetur</p>
            </div>
          </div>
        ))}
      </div>
      <a href="/Product">
        <button className={style.viewAllbtn}>VIEW ALL  ⟶</button>
      </a>
    </div>
  );
}

export default SecondSection;
