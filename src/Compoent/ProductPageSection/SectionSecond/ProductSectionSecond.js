import React, { useEffect, useState } from "react";
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
import { updateCart } from "../../Recoil/Recoil";
import ReactStars from "react-rating-stars-component";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ColumnPageSectionSecond from "../../ColumnPageSection/ColumnPageSectionSecond/ColumnPageSectionSecond";
import ProductDescriptionBlog from "../../ProductDescriptionBlog/ProductDescriptionBlog";

function ProductSectionSecond() {
  const [data, setData] = useState([]);
  const [showDescription, setShowDescription] = useState(true);
  const [showReview, setShowReview] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [showExprienceofTesting, setShowExprienceofTesting] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams(); // Change variable name to match the parameter name in the route
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useRecoilState(updateCart);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");
  const [updateReview, setUpdateReview] = useState(0);
  const [userReview, setUserReview] = useState([]);
  const [userCreateReview, setUserCreateReview] = useState(null);

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
      const response = await getAllReview(id);
    } catch (error) {
      console.log("errror");
    }
  };

  const handleProductData = async () => {
    setLoading(true);
    try {
      const response = await getAllProduct();
      // Show only the first three products
      setProductData(response.data);
      console.log(response, "ye aa tafsgsdgv");
      setLoading(false);
    } catch (error) {
      console.error("Error getting product data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const cartdata = JSON.parse(localStorage.getItem("cartData")) || [];
    setData(cartdata);
  }, [update]);

  // Filter the product based on the productId from URL
  const product = productData.find((item) => item._id.toString() === id);


  const handleAddToCartInBeckend = async () => {
    try {
      const response = await AddtoCart(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = () => {
    setMessage("");
    const loginStatus = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (loginStatus) {
      handleAddToCartInBeckend();
    }
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const existingProductIndex = cartData.findIndex(
      (item) => item._id === product._id
    );

    if (existingProductIndex !== -1) {
      // If the product already exists in the cart, update its quantity
      const updatedCartData = [...cartData];
      updatedCartData[existingProductIndex].quantity += quantity;
      localStorage.setItem("cartData", JSON.stringify(updatedCartData));
      setUpdate(update + 1);
    } else {
      // If the product doesn't exist in the cart, add it with the specified quantity
      const newItem = { ...product, quantity };
      localStorage.setItem("cartData", JSON.stringify([...cartData, newItem]));
      setUpdate(update + 1);
    }
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value));
    setQuantity(value);
  };

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
    setShowReview(false);
    setShowOverview(false);
    setShowExprienceofTesting(false);
    setShowComparison(false);
  };

  const handleToggleReview = () => {
    setShowReview(!showReview);
    setShowDescription(false);
    setShowOverview(false);
    setShowExprienceofTesting(false);
    setShowComparison(false);
  };

  const handleToggleOverview = () => {
    setShowOverview(!showOverview);
    setShowDescription(false);
    setShowReview(false);
    setShowExprienceofTesting(false);
    setShowComparison(false);
  };
  const handleToggleExprienceofTesting = () => {
    setShowExprienceofTesting(!showExprienceofTesting);
    setShowDescription(false);
    setShowReview(false);
    setShowComparison(false);
    setShowOverview(false);
  };

  const handleToggleComparison = () => {
    setShowComparison(!showComparison);
    setShowDescription(false);
    setShowReview(false);
    setShowExprienceofTesting(false);
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
      const response = await createReview(id, reviewData);
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
  function renderHTML(htmlString) {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  }

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
    localStorage.setItem("message", JSON.stringify(event.target.value));
  };

  return (
    <div className={style.main}>
      <div className={style.product_container}>
        {loading && <p>Loading..</p>}
        <div className={style.img_box}>
          <img src={product?.productImg[0]?.url} alt={product?.title} />
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
                <button onClick={handleAddToCart}>ADD TO CART →</button>
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
                <span>
                  <FacebookRoundedIcon className={style.icon} />
                </span>
                <span>
                  <InstagramIcon className={style.icon} />
                </span>
                <span>
                  <LinkedInIcon className={style.icon} />
                </span>
                <span>
                  <TwitterIcon className={style.icon} />
                </span>
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
          {/* <h5 onClick={handleToggleExprienceofTesting}>EXPRIENCE OF TESTING</h5>
          <h5 onClick={handleToggleComparison}>COMPARISON</h5> */}
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
              {/* <h4>ADDITIONAL INFORMATION</h4>
              <p>
                <strong>Measure Unit</strong>{" "}
                <span>{product?.measureUnit}</span>
              </p>
              <p>
                <strong>DIMENSIONS</strong> {product?.dimension}
              </p> */}
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
      <div className={style.additional_box}>
        <ColumnPageSectionSecond  brand={product?.brand}/>
      </div>
    </div>
  );
}

export default ProductSectionSecond;
