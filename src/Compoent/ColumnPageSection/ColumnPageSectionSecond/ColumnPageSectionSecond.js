import React, { useState } from "react";
import style from "./ColumnPageSectionSecond.module.css";
import product1 from "../../Images/dom perignon lady gaga rose.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import product2 from "../../Images/Moet & Chandon Imperial Brut Champagne With 8pc 1.png";
import product3 from "../../Images/perrier jouet grand brut.png";

function ColumnPageSectionSecond() {
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

  const handleToggleAddInfo = () => {
    setShowAddInfo(!showAddInfo);
    setShowDescription(false);
    setShowReview(false);
  };

  return (
    <div className={style.main}>
    <div className={style.additional_box}>
        <div className={style.inner_container1}>
        <span className={style.offer_box}>
            new
          </span>
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
        <span className={style.offer_box}>
            offer
          </span>
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
        <div className={style.inner_container1}>
        <span className={style.offer_box}>
            new
          </span>
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
        <span className={style.offer_box}>
            offer
          </span>
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

export default ColumnPageSectionSecond;
