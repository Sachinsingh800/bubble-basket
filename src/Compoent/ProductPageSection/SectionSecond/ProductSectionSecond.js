import React, { useCallback, useEffect, useState } from "react";
import style from "./ProductSectionSecond.module.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import {
  AddtoCart,
  createReview,
  getAllProduct,
  getAllReview,
} from "../../Apis/Apis";
import { addItemCart, updateCart } from "../../Recoil/Recoil";
import ReactStars from "react-rating-stars-component";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ColumnPageSectionSecond from "../../ColumnPageSection/ColumnPageSectionSecond/ColumnPageSectionSecond";
import ProductDescriptionBlog from "../../ProductDescriptionBlog/ProductDescriptionBlog";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Zoom from "react-medium-image-zoom";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import RecentlyView from "../../RecentlyView/RecentlyView";
import ZoomImage from "../../ZoomImage/ZoomImage";

function ProductSectionSecond() {
  const storedProducts =
    JSON.parse(sessionStorage.getItem("storedProducts")) || [];
  const [data, setData] = useState([]);
  const [showDescription, setShowDescription] = useState(true);
  const [showReview, setShowReview] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [showExprienceofTesting, setShowExprienceofTesting] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { title } = useParams(); // Change variable name to match the parameter name in the route
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useRecoilState(updateCart);
  const [addToCart, setAddToCart] = useRecoilState(addItemCart);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");
  const [updateReview, setUpdateReview] = useState(0);
  const [userReview, setUserReview] = useState([]);
  const [userCreateReview, setUserCreateReview] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  useEffect(() => {
    handleProductData();
    handleGetAllReview();
  }, []);

  useEffect(() => {
    const userreview = JSON.parse(localStorage.getItem("user_review"));
    setUserReview(userreview);
  }, [updateReview]);

  const reviews = JSON.parse(localStorage.getItem("review"));

  const handleGetAllReview = async () => {
    try {
      // const response = await getAllReview(id);
    } catch (error) {}
  };

  const formatTitleForUrl = (title) => {
    return title.replace(/\s+/g, "-").replace(/:/g, "");
  };

  const handleProductData = async () => {
    setLoading(true);
    try {
      const response = await getAllProduct();
      // Show only the first three products
      setProductData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error getting product data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const cartdata = JSON.parse(sessionStorage.getItem("cartData")) || [];
    setData(cartdata);
  }, [update]);

  // Filter the product based on the productId from URL
  const product = productData.find(
    (item) => formatTitleForUrl(item?.title) === title
  );

  // Function to store product in session storage
  const storeProductInSession = (product) => {
    if (!product) return;

    // Get the existing products from session storage
    let storedProducts =
      JSON.parse(sessionStorage.getItem("storedProducts")) || [];

    // Check if the product is already stored
    const existingProductIndex = storedProducts.findIndex(
      (item) => item._id === product._id
    );

    // If the product is not already stored, add it
    if (existingProductIndex === -1) {
      storedProducts.push(product);
      sessionStorage.setItem("storedProducts", JSON.stringify(storedProducts));
    }
  };

  // Call this function when the user opens the page
  useEffect(() => {
    const product = productData.find(
      (item) => formatTitleForUrl(item?.title) === title
    );
    storeProductInSession(product);
  }, [productData]);

  const handleAddToCartInBeckend = async () => {
    try {
      const response = await AddtoCart(product._id, quantity);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    setMessage("");
    const loginStatus = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (loginStatus) {
      handleAddToCartInBeckend();
    }
    const cartData = JSON.parse(sessionStorage.getItem("cartData")) || [];
    const existingProductIndex = cartData.findIndex(
      (item) => item._id === product._id
    );

    if (existingProductIndex !== -1) {
      // If the product already exists in the cart, update its quantity
      const updatedCartData = [...cartData];
      updatedCartData[existingProductIndex].quantity += quantity;
      sessionStorage.setItem("cartData", JSON.stringify(updatedCartData));
      setUpdate(update + 1);
      setAddToCart(addToCart + 1);
    } else {
      // If the product doesn't exist in the cart, add it with the specified quantity
      const newItem = { ...product, quantity };
      sessionStorage.setItem(
        "cartData",
        JSON.stringify([...cartData, newItem])
      );
      setUpdate(update + 1);
      setAddToCart(addToCart + 1);
    }
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value));
    setQuantity(value);
  };

  const handleToggleDescription = () => {
    setShowDescription(true);
    setShowReview(false);
    setShowOverview(false);
    setShowExprienceofTesting(false);
    setShowComparison(false);
  };

  const handleToggleReview = () => {
    setShowReview(true);
    setShowDescription(false);
    setShowOverview(false);
    setShowExprienceofTesting(false);
    setShowComparison(false);
  };

  const handleToggleOverview = () => {
    setShowOverview(true);
    setShowDescription(false);
    setShowReview(false);
    setShowExprienceofTesting(false);
    setShowComparison(false);
  };
  const handleToggleExprienceofTesting = () => {
    setShowExprienceofTesting(true);
    setShowDescription(false);
    setShowReview(false);
    setShowComparison(false);
    setShowOverview(false);
  };

  const handleCreateReview = async (e) => {
    e.preventDefault();
    const reviewData = {
      name: name,
      email: email,
      rating: rating,
      reviewText: reviewText,
    };
    try {
      const response = await createReview(product._id, reviewData);
    } catch (error) {
      console.log("error");
    } finally {
      setUpdateReview(updateReview + 1);
      setUserCreateReview(reviewData);
      setName("");
      setEmail("");
      setRating(0);
      setReviewText("");
    }
  };

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
    localStorage.setItem("message", JSON.stringify(event.target.value));
  };

  return (
    <div className={style.main}>
      {loading && <p>Loading..</p>}
      <div className={style.product_container}>
        <div className={style.img_box}>
          <ZoomImage
            productImage={product?.productImg[0]?.url}
            producttitle={product?.title}
            title={product?.title}
            loading="lazy"
            width="auto"
            height="auto"
          />
        </div>
        <div className={style.des_box}>
          <h3>{product?.title}</h3>
          <h4>${product?.price}</h4>
          <ReactStars
            count={5}
            value={Math.ceil(reviews?.reviews?.averageRating)}
            size={20}
            activeColor="#ffd700"
          />
          <br />

          <div className={style.extra_div_container}>
            <div>
              <div className={style.input_box}>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
                <button onClick={(e) => handleAddToCart(e)}>
                  ADD TO CART →
                </button>
              </div>
              <br />
              <p>
                <strong>SKU:</strong>
                {product?.sku}
              </p>
              <p>
                <strong>CATEGORY : </strong> {product?.category}
              </p>
              <p>
                <strong>TAGS : </strong>
                {product?.tag}
              </p>
              <p className={style.icon_box}>
                <strong>SHARE :</strong>
                <a
                  target="_blank"
                  href="https://www.facebook.com/LuxuryBubbleBasket"
                >
                  <span className={style.icon}>
                    <div>
                      <FacebookRoundedIcon className={style.instagramIcon} />
                    </div>
                  </span>
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCOX_uZXsTjPdOSBV1ATdiFg"
                >
                  <span className={style.icon}>
                    <div>
                      <YouTubeIcon className={style.instagramIcon} />
                    </div>
                  </span>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/luxurybubblebasket/"
                >
                  <span className={style.icon}>
                    <div>
                      <InstagramIcon className={style.instagramIcon} />
                    </div>
                  </span>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/luxurybubblebasket/"
                >
                  <span className={style.icon}>
                    <div>
                      <LinkedInIcon className={style.instagramIcon} />
                    </div>
                  </span>
                </a>
                <a target="_blank" href="https://x.com/LuxuryBubbleBsk">
                  <span className={style.icon}>
                    <div>
                      <TwitterIcon className={style.instagramIcon} />
                    </div>
                  </span>
                </a>
                <a
                  target="_blank"
                  href="https://in.pinterest.com/luxurybubblebasket/"
                >
                  <span className={style.icon}>
                    <div>
                      <PinterestIcon className={style.instagramIcon} />
                    </div>
                  </span>
                </a>
              </p>
            </div>

            <div className={style.giftCardMessage}>
              <label htmlFor="message" className={style.giftCardLabel}>
                Message On Gift Card
              </label>
              <textarea
                id="message"
                className={style.giftCardTextarea}
                placeholder="Message on Gift Card"
                value={message}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.product_des_box}>
        <div className={style.extraInfo_btn}>
          <h5 onClick={handleToggleDescription}>DESCRIPTION</h5>
          <h5 onClick={handleToggleOverview}>ADDITIONAL INFORMATION</h5>
          <h5 onClick={handleToggleReview}>
            REVIEWS ({reviews?.reviews?.length})
          </h5>
        </div>
        <div className={style.des_container}>
          {showOverview && (
            <div className={style.description_box}>
              <p>{product?.productBlog?.detailedOverview}</p>
            </div>
          )}
          {showDescription && (
            <div className={style.description_box}>
              <p>{product?.productBlog?.intro}</p>
            </div>
          )}
          {showExprienceofTesting && (
            <div className={style.description_box}>
              <p>{product?.productBlog?.experienceOfTesting}</p>
            </div>
          )}
          {showComparison && (
            <div className={style.description_box}>
              <p>{product?.productBlog?.comparison}</p>
            </div>
          )}
          {showReview && (
            <div>
              <h6>3 REVIEW FOR BUBBLE BASKET</h6>
              <br />
              {userCreateReview && (
                <div className={style.user_review_container}>
                  <div className={style.user_dp}>
                    <AccountCircleOutlinedIcon className={style.dp_icon} />
                  </div>
                  <div>
                    <ReactStars
                      count={5}
                      value={rating}
                      onChange={handleRatingChange}
                      size={20}
                      activeColor="#ffd700"
                    />
                    <span>Your review is awaiting approval</span>
                    <span>{userCreateReview.name}</span> -{" "}
                    <span>{userCreateReview.email}</span>
                    <p>{userCreateReview.reviewText}</p>
                  </div>
                </div>
              )}

              {reviews?.reviews?.map((item) => (
                <div className={style.user_review_container}>
                  <div className={style.user_dp}>
                    <AccountCircleOutlinedIcon className={style.dp_icon} />
                  </div>
                  <div>
                    <ReactStars
                      count={5}
                      onChange={null}
                      filledIcon={null}
                      value={item.rating}
                      size={20}
                      activeColor="#ffd700"
                    />
                    <span>{item.name}</span> - <span>{item.email}</span>
                    <p>{item.reviewText}</p>
                  </div>
                </div>
              ))}

              <br />
              <br />
              <br />
              <form className={style.form} onSubmit={handleCreateReview}>
                <p>
                  <strong>ADD A REVIEW</strong>
                </p>
                <div>
                  <p>
                    Your email address will not be published. Required fields
                    are marked * Your Rating
                  </p>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />
                </div>
                <textarea
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Your Review*"
                />
                <div className={style.user_input_box}>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name*"
                  />
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email*"
                  />
                </div>
                <div>
                  <input type="checkbox" />
                  &nbsp;
                  <span>
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </span>
                </div>
                <button type="submit">Submit →</button>
              </form>
            </div>
          )}
        </div>
      </div>
      {storedProducts.length > 0 && (
        <div className={style.additional_box}>
          <h4> Recently View</h4>
          <RecentlyView />
        </div>
      )}
      <div className={style.additional_box}>
        <ColumnPageSectionSecond singleProductData={product} />
      </div>
    </div>
  );
}

export default ProductSectionSecond;
