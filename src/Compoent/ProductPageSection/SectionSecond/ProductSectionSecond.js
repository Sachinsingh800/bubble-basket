import React, { useState } from "react";
import style from "./ProductSectionSecond.module.css";
import product1 from "../../Images/dom perignon lady gaga rose.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { nanoid } from "nanoid";
import { cartData } from "../../Recoil/Recoil";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";

function ProductSectionSecond() {
  const [data, setData] = useRecoilState(cartData);
  const [showDescription, setShowDescription] = useState(true);
  const [showReview, setShowReview] = useState(false);
  const [showAddInfo, setShowAddInfo] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams(); // Change variable name to match the parameter name in the route


  const extraInfo = {
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ac purus sed luctus. Proin pretium pharetra sagittis. Pellentesque sit amet semper urna. Aenean quis leo sed ex consequat faucibus. Quisque felis diam, suscipit vel mauris sit amet, gravida lacinia orci. Ut quis mauris nec mauris.",
    addinfo: {
      weight: "0.5 kg",
      dimensions: "10 x 10 x 15 cm",
      review: {
        reviewtitle: "HEATHER HUGHES – July 2, 2020",
        reviewdes:
          "Vix ne odio deseruisse percipitur, vel cu epicuri officiis. Debet dicunt suscipit per id, iuvaret indoctum an has. Duo te populo tritani, pro id reque atomorum convenire.",
        rating: 4,
        customer: 3,
      },
    },
  };

  // Sample collection data
  const collectionData = [
    {
      id: 1,
      productCategory: "Maschio Prosecco",
      productName: "Brut DOC NU",
      productDescription: "BOTTLES",
      productImg: product1,
      productRating: 4,
      price: 79.0,
      quantity: 1,
      subTotal: 79.0,
      sku:"001",
      tags:{
        tag1:"Bottle",
        tag2:"Drink",
        tag3:"Whiskey",
          }
    },
    {
      id: 2,
      productCategory: "Veuve Clicquot",
      productName: "PERSONALISED",
      productDescription: "Brut Yellow",
      productImg: product1,
      productRating: 4,
      price: 100.0,
      quantity: 1,
      subTotal: 199.0,
      sku:"001",
      tags:{
        tag1:"Bottle",
        tag2:"Drink",
        tag3:"Whiskey",
          }
    },
    {
      id: 3,
      productCategory: "Billecart-Salmon",
      productName: "Brut Sous Bois",
      productDescription: "Brut Yellow",
      productImg: product1,
      productRating: 4,
      price: 199.0,
      quantity: 1,
      subTotal: 199.0,
      sku:"001",
      tags:{
        tag1:"Bottle",
        tag2:"Drink",
        tag3:"Whiskey",
          }
    },
    {
      id: 4,
      productCategory: "Hand-Painted",
      productName: "La Marca Prosecco",
      productDescription: "Brut Yellow",
      productImg: product1,
      productRating: 4,
      price: 199.0,
      quantity: 1,
      subTotal: 100.0,
      sku:"001",
      tags:{
        tag1:"Bottle",
        tag2:"Drink",
        tag3:"Whiskey",
          }
    },
    {
      id: 5,
      productCategory: "Maschio Prosecco",
      productName: "Brut DOC NU",
      productDescription: "BOTTLES",
      productImg: product1,
      productRating: 4,
      price: 79.0,
      quantity: 1,
      subTotal: 79.0,
      sku:"001",
      tags:{
        tag1:"Bottle",
        tag2:"Drink",
        tag3:"Whiskey",
          }
    },
    {
      id: 6,
      productCategory: "Veuve Clicquot",
      productName: "PERSONALISED",
      productDescription: "Brut Yellow",
      productImg: product1,
      productRating: 4,
      price: 100.0,
      quantity: 1,
      subTotal: 199.0,
      sku:"001",
      tags:{
        tag1:"Bottle",
        tag2:"Drink",
        tag3:"Whiskey",
          }
    },
    {
      id: 7,
      productCategory: "Billecart-Salmon",
      productName: "Brut Sous Bois",
      productDescription: "Brut Yellow",
      productImg: product1,
      productRating: 4,
      price: 199.0,
      quantity: 1,
      subTotal: 199.0,
      sku:"001",
      tags:{
        tag1:"Bottle",
        tag2:"Drink",
        tag3:"Whiskey",
          }
    },
    {
      id: 8,
      productCategory: "Hand-Painted",
      productName: "La Marca Prosecco",
      productDescription: "Brut Yellow",
      productImg: product1,
      productRating: 4,
      price: 199.0,
      quantity: 1,
      subTotal: 100.0,
      sku:"001",
      tags:{
        tag1:"Bottle",
        tag2:"Drink",
        tag3:"Whiskey",
          }
    },
  ];


  // Filter the product based on the productId from URL
  const product = collectionData.find((item) => item.id.toString() === id);
  const handleAddToCart = () => {
    const itemToAdd = { ...product, quantity: quantity };
    setData([...data, itemToAdd]);
    localStorage.setItem("cartData", JSON.stringify([...data, itemToAdd]));
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
    setShowReview(false);
    setShowAddInfo(false);
  };

  const handleToggleReview = () => {
    setShowReview(!showReview);
    setShowDescription(false);
    setShowAddInfo(false);
  };

  const handleToggleAddInfo = () => {
    setShowAddInfo(!showAddInfo);
    setShowDescription(false);
    setShowReview(false);
  };
  return (
    <div className={style.main}>
      <div className={style.product_container} key={product.sku}>
        <div className={style.img_box}>
          <img src={product.productImg} alt="product" />
        </div>
        <div className={style.des_box}>
          <h3>{product.productName}</h3>
          <p>
            {Array.from({ length: product.productRating }).map((_, i) => (
              <span style={{ color: "#7B0128" }} key={i}>
                ★
              </span>
            ))}
            {Array.from({ length: 5 - product.productRating }).map((_, i) => (
              <span style={{ color: "#7B0128" }} key={i + product.productRating}>
                ✰
              </span>
            ))}
            &nbsp;({product.customer} customer reviews)
          </p>
          <h4>${product.price}</h4>

          <div className={style.input_box}>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <button onClick={handleAddToCart}>ADD TO CART →</button>
          </div>
          <br />
          <p>♡ &nbsp;Add to wishlist </p>
          <p>
            <strong>SKU:</strong> {product.sku}
          </p>
          <p>
            <strong>CATEGORY : </strong> {product.productCategory}
          </p>
          <p>
            <strong>TAGS : </strong> {Object.values(product.tags).join(", ")}
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
      </div>
      <div className={style.product_des_box}>
        <div className={style.extraInfo_btn}>
          <h5 onClick={handleToggleDescription}>DESCRIPTION</h5>
          <h5 onClick={handleToggleAddInfo}>ADDITIONAL INFORMATION</h5>
          <h5 onClick={handleToggleReview}>REVIEWS (3)</h5>
        </div>
        <div className={style.des_container}>
          {showAddInfo && (
            <div className={style.add_info_box}>
              <p>
                <strong>WEIGHT</strong> <span>{extraInfo.addinfo.weight}</span>
              </p>
              <p>
                <strong>DIMENSIONS</strong> {extraInfo.addinfo.dimensions}
              </p>
            </div>
          )}
          {showDescription && <p>{extraInfo.des}</p>}
          {showReview && (
            <div>
              <h6>3 REVIEW FOR BUBBLE BASKET</h6>
              <br />
              <div className={style.user_review_container}>
                <div className={style.user_dp}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQey3S6VQ4qIppedXehx8CQYDshaMBwU1UwpQ&s"
                    alt="dp"
                  />
                </div>
                <div>
                  <p>
                    {Array.from({
                      length: extraInfo.addinfo.review.rating,
                    }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                    {Array.from({
                      length: 5 - extraInfo.addinfo.review.rating,
                    }).map((_, i) => (
                      <span key={i + extraInfo.addinfo.review.rating}>✰</span>
                    ))}
                  </p>
                  <span>{extraInfo.addinfo.review.reviewtitle}</span>
                  <p>{extraInfo.addinfo.review.reviewdes}</p>
                </div>
              </div>
              <br />
              <br />
              <br />
              <form className={style.form}>
                <p>
                  <strong>ADD A REVIEW</strong>
                </p>
                <div>
                  <p>
                    Your email address will not be published. Required fields
                    are marked * Your Rating
                  </p>
                  <p>
                    {[...Array(5)].map((_, i) => (
                      <label key={i}>{i < 3 ? "★" : "✰"}</label>
                    ))}
                  </p>
                </div>
                <textarea placeholder="Your Review*" />
                <div className={style.user_input_box}>
                  <input type="text" placeholder="Name*" />
                  <input type="email" placeholder="Email*" />
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
        <div className={style.inner_container1}>
          <span className={style.offer_box}>new</span>
          <div className={style.add_box_img}>
            <img src={product1} alt="product" />
          </div>
          <span>Maschio Prosecco</span>
          <span>Brut DOC NU</span>
          <p>★★★★✰</p>
          <h6>
            <strong>$79.00</strong>
          </h6>
        </div>
        <div className={style.inner_container}>
          <div className={style.add_box_img}>
            <img src={product1} alt="product" />
          </div>
          <span>Veuve Clicquot</span>
          <span>Brut Yellow</span>
          <p>★★★★✰</p>
          <h6>
            <strong>$99.00</strong>
          </h6>
        </div>
        <div className={style.inner_container}>
          <div className={style.add_box_img}>
            <img src={product1} alt="product" />
          </div>
          <span>Billecart-Salmon</span>
          <span>Brut Sous Bois</span>
          <p>★★★★✰</p>
          <h6>
            <strong>$199.00</strong>
          </h6>
        </div>
        <div className={style.inner_container}>
          <span className={style.offer_box}>offer</span>
          <div className={style.add_box_img}>
            <img src={product1} alt="product" />
          </div>
          <span>Hand-Painted</span>
          <span>La Marca Prosecco</span>
          <p>★★★★✰</p>
          <h6>
            <strong>$99.00</strong>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default ProductSectionSecond;
