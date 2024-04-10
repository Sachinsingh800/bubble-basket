import React, { useState } from "react";
import style from "./ProductSectionSecond.module.css";
import product1 from "../../Images/dom perignon lady gaga rose.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

function ProductSectionSecond() {
  const [showDescription, setShowDescription] = useState(true);
  const [showReview, setShowReview] = useState(false);
  const [showAddInfo, setShowAddInfo] = useState(false);

  const data = [
    {
      img: product1,
      title: "CLOUDY BAY",
      rating: 4,
      customer: 3,
      price: "79.00",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ac purus sed luctus. Proin pretium pharetra sagittis. Pellentesque sit amet semper urna. Aenean quis leo sed ex consequat faucibus. Quisque felis diam,suscipit vel mauris sit amet, gravida lacinia orci. Ut quis mauris nec mauris dapibus commodo eu quis ligula. Nulla hendrerit, turpis in semper rhoncus,est dui accumsan augue, id iaculis metus augue vel urna.t",
      sku: "001",
      category: "Wine",
      tags: "Bottle, Drink, Whiskey",
      share: {
        facebook: true,
        twitter: true,
        linkedin: true,
      },
    },
  ];

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
  const handleToggleaddintionalInfo = () => {
    setShowAddInfo(!showAddInfo);
    setShowDescription(false);
    setShowReview(false);
  };

  return (
    <div className={style.main}>
      {data.map((product) => (
        <div className={style.product_container} key={product.sku}>
          <div className={style.img_box}>
            <img src={product.img} alt="product" />
          </div>
          <div className={style.des_box}>
            <h3>{product.title}</h3>
            <p>
              Rating:{" "}
              {Array.from({ length: product.rating }).map((_, i) => (
                <span key={i}>⭐</span>
              ))}
              &nbsp;({product.customer} customer reviews)
            </p>
            <h4>${product.price}</h4>

            <div className={style.input_box}>
              <input type="number" value={1} />
              <button>ADD TO CART →</button>
            </div>
            <br />
            <p>💗 Add to wishlist </p>
            <p>
              <strong>SKU:</strong> {product.sku}
            </p>
            <p>
              <strong>CATEGORY : </strong> {product.category}
            </p>
            <p>
              <strong>TAGS : </strong> {product.tags}
            </p>
            <p className={style.icon_box}>
              <strong>SHARE :</strong>
              <span>
                <FacebookRoundedIcon style={{ fontSize: 15 }} />
              </span>
              <span>
                <InstagramIcon style={{ fontSize: 15 }} />
              </span>
              <span>
                <LinkedInIcon style={{ fontSize: 15 }} />
              </span>
              <span>
                <TwitterIcon style={{ fontSize: 15 }} />
              </span>
            </p>
          </div>
        </div>
      ))}
      <div>
        <div className={style.extraInfo_btn}>
          <h5 onClick={handleToggleDescription}>DESCRIPTION</h5>
          <h5 onClick={handleToggleaddintionalInfo}>ADDITIONAL INFORMATION</h5>
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
              <p>{extraInfo.addinfo.review.reviewtitle}</p>
              <p>{extraInfo.addinfo.review.reviewdes}</p>
              <p>
                Rating:{" "}
                {Array.from({ length: extraInfo.addinfo.review.rating }).map(
                  (_, i) => (
                    <span key={i}>⭐</span>
                  )
                )}
                &nbsp;({extraInfo.addinfo.review.customer} customer reviews)
              </p>
              <form>
                <label>
                  Your Review:
                  <textarea />
                </label>
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductSectionSecond;
