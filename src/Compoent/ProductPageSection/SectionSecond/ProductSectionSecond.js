import React from "react";
import style from "./ProductSectionSecond.module.css";
import product1 from "../../Images/dom perignon lady gaga rose.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

function ProductSectionSecond() {
  const data = [
    {
      img: product1,
      title: "CLOUDY BAY",
      rating: 4,
      customer: 3,
      price:"79.00" ,
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

  return (
    <div className={style.main}>
      {data.map((product) => (
        <div className={style.product_container}>
          <div className={style.img_box}>
            <img src={product.img} alt="product" />
          </div>
          <div className={style.des_box}>
            <h3>{product.title}</h3>
            <p>{product.rating}  ({product.customer} customer reviews)</p>
            <h4>${product.price}</h4>
            <p>{product.des}</p>
            <div className={style.input_box}>
            <input type="number" />
            <button>ADD TO CART →</button>
            </div>
            <br/>
            <p>💗 Add to wishlist </p>
            <p><strong>SKU:</strong> {product.sku}</p>
            <p><strong>CATEGORY : </strong> {product.category}</p>
            <p><strong>TAGS : </strong> {product.tags}</p>
            <p className={style.icon_box}><strong>SHARE :</strong> 
            <span><FacebookRoundedIcon style={{fontSize:15}} /></span>
            <span><InstagramIcon style={{fontSize:15}} /></span>
            <span><LinkedInIcon  style={{fontSize:15}}/></span>
            <span><TwitterIcon style={{fontSize:15}}/></span>
            </p>
            </div>
        </div>
      ))}
    </div>
  );
}

export default ProductSectionSecond;
