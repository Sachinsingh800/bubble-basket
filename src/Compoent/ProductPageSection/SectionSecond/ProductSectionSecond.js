import React, { useEffect, useState, useCallback } from "react";
import style from "./ProductSectionSecond.module.css";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import {
  AddtoCart,
  createReview,
  getAllProduct,
  getAllReview,
} from "../../Apis/Apis";
import { updateCart } from "../../Recoil/Recoil";
import ReactStars from "react-rating-stars-component";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ColumnPageSectionSecond from "../../ColumnPageSection/ColumnPageSectionSecond/ColumnPageSectionSecond";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Zoom from "react-medium-image-zoom";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import RecentlyView from "../../RecentlyView/RecentlyView";
import { FacebookRounded, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const ProductSectionSecond = () => {
  const storedProducts =
  JSON.parse(sessionStorage.getItem("storedProducts")) || [];
  const [data, setData] = useState([]);
  const [showDescription, setShowDescription] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useRecoilState(updateCart);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [updateReview, setUpdateReview] = useState(0);
  const [userReview, setUserReview] = useState([]);
  const [userCreateReview, setUserCreateReview] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [message, setMessage] = useState("");

  const handleZoomChange = useCallback((shouldZoom) => setIsZoomed(shouldZoom), []);

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      try {
        const response = await getAllProduct();
        setProductData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error getting product data:", error);
        setLoading(false);
      }
    };

    const fetchAllReviews = async () => {
      try {
        await getAllReview(id);
      } catch (error) {
        console.error("Error getting reviews:", error);
      }
    };

    fetchProductData();
    fetchAllReviews();
  }, [id]);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("user_review"));
    setUserReview(storedReviews);
  }, [updateReview]);

  useEffect(() => {
    const cartData = JSON.parse(sessionStorage.getItem("cartData")) || [];
    setData(cartData);
  }, [update]);

  useEffect(() => {
    const product = productData.find((item) => item._id === id);
    if (product) {
      const storedProducts = JSON.parse(sessionStorage.getItem("storedProducts")) || [];
      const existingProductIndex = storedProducts.findIndex((item) => item._id === product._id);
      if (existingProductIndex === -1) {
        storedProducts.push(product);
        sessionStorage.setItem("storedProducts", JSON.stringify(storedProducts));
      }
    }
  }, [productData, id]);

  const product = productData.find((item) => item._id === id);
  const reviews = JSON.parse(localStorage.getItem("review"));

  const handleAddToCart = () => {
    const loginStatus = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (loginStatus) {
      AddtoCart(id, quantity).catch(console.error);
    }
    const cartData = JSON.parse(sessionStorage.getItem("cartData")) || [];
    const existingProductIndex = cartData.findIndex((item) => item._id === product._id);

    if (existingProductIndex !== -1) {
      cartData[existingProductIndex].quantity += quantity;
    } else {
      cartData.push({ ...product, quantity });
    }

    sessionStorage.setItem("cartData", JSON.stringify(cartData));
    setUpdate(update + 1);
  };

  const handleCreateReview = async (e) => {
    e.preventDefault();
    const reviewData = { name, email, rating, reviewText };
    try {
      await createReview(id, reviewData);
      setUpdateReview(updateReview + 1);
      setUserCreateReview(reviewData);
      setName("");
      setEmail("");
      setRating(0);
      setReviewText("");
    } catch (error) {
      console.error("Error creating review:", error);
    }
  };

  const handleToggleDescription = () => {
    setShowDescription(true);
  };

  const handleToggleReview = () => {
    setShowDescription(false);
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
    localStorage.setItem("message", JSON.stringify(event.target.value));
  };

  return (
    <div className={style.main}>
      {loading && <p>Loading..</p>}
      <div className={style.product_container}>
        <div className={style.img_box}>
          <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
            <img src={product?.productImg[0]?.url} alt={product?.title} />
          </ControlledZoom>
        </div>
        <div className={style.des_box}>
          <h3>{product?.title}</h3>
          <h4>${product?.price}</h4>
          <ReactStars count={5} value={Math.ceil(reviews?.reviews?.averageRating)} size={20} activeColor="#ffd700" />
          <br />
          <div className={style.extra_div_container}>
            <div className={style.input_box}>
              <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))} />
              <button onClick={handleAddToCart}>ADD TO CART →</button>
            </div>
            <p><strong>SKU:</strong> {product?.sku}</p>
            <p><strong>CATEGORY:</strong> {product?.category}</p>
            <p><strong>TAGS:</strong> {product?.tag}</p>
            <div className={style.icon_box}>
              <strong>SHARE:</strong>
              <a href="https://www.facebook.com/LuxuryBubbleBasket" target="_blank" rel="noopener noreferrer"><FacebookRounded /></a>
              <a href="https://www.youtube.com/channel/UCOX_uZXsTjPdOSBV1ATdiFg" target="_blank" rel="noopener noreferrer"><YouTubeIcon /></a>
              <a href="https://www.instagram.com/luxurybubblebasket/" target="_blank" rel="noopener noreferrer"><Instagram /></a>
              <a href="https://www.linkedin.com/company/luxurybubblebasket/" target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
              <a href="https://x.com/LuxuryBubbleBsk" target="_blank" rel="noopener noreferrer"><Twitter /></a>
              <a href="https://in.pinterest.com/luxurybubblebasket/" target="_blank" rel="noopener noreferrer"><PinterestIcon /></a>
            </div>
            <div className={style.giftCardMessage}>
              <label htmlFor="message" className={style.giftCardLabel}>Message On Gift Card</label>
              <textarea id="message" className={style.giftCardTextarea} placeholder="Message on Gift Card" value={message} onChange={handleChangeMessage} />
            </div>
          </div>
        </div>
      </div>
      <div className={style.product_des_box}>
        <div className={style.extraInfo_btn}>
          <h5 onClick={handleToggleDescription}>DESCRIPTION</h5>
          <h5 onClick={handleToggleReview}>REVIEWS ({reviews?.reviews?.length})</h5>
        </div>
        <div className={style.des_container}>
          {showDescription && <div className={style.description_box}><p>{product?.productBlog?.intro}</p></div>}
          {!showDescription && (
            <div>
              <h6>REVIEWS ({reviews?.reviews?.length})</h6>
              {userCreateReview && (
                <div className={style.user_review_container}>
                  <AccountCircleOutlinedIcon className={style.dp_icon} />
                  <div>
                    <ReactStars count={5} value={rating} size={20} activeColor="#ffd700" />
                    <span>Your review is awaiting approval</span>
                    <span>{userCreateReview.name}</span> - <span>{userCreateReview.email}</span>
                    <p>{userCreateReview.reviewText}</p>
                  </div>
                </div>
              )}
              {reviews?.reviews?.map((item, index) => (
                <div key={index} className={style.user_review_container}>
                  <AccountCircleOutlinedIcon className={style.dp_icon} />
                  <div>
                    <ReactStars count={5} value={item.rating} size={20} activeColor="#ffd700" />
                    <span>{item.name}</span> - <span>{item.email}</span>
                    <p>{item.reviewText}</p>
                  </div>
                </div>
              ))}
              <form className={style.form} onSubmit={handleCreateReview}>
                <p><strong>ADD A REVIEW</strong></p>
                <div>
                  <p>Your email address will not be published. Required fields are marked *</p>
                  <ReactStars count={5} onChange={(newRating) => setRating(newRating)} size={24} activeColor="#ffd700" />
                </div>
                <textarea onChange={(e) => setReviewText(e.target.value)} placeholder="Your Review*" value={reviewText} />
                <div className={style.user_input_box}>
                  <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name*" value={name} />
                  <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email*" value={email} />
                </div>
                <div>
                  <input type="checkbox" />
                  <span> Save my name, email, and website in this browser for the next time I comment.</span>
                </div>
                <button type="submit">Submit →</button>
              </form>
            </div>
          )}
        </div>
      </div>
      {storedProducts.length > 0 && (
        <div className={style.additional_box}>
          <h4>Recently Viewed</h4>
          <RecentlyView />
        </div>
      )}
      <div className={style.additional_box}>
        <ColumnPageSectionSecond singleProductData={product} />
      </div>
    </div>
  );
};

export default ProductSectionSecond;
