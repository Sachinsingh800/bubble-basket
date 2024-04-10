import React from "react";
import style from "./ProductSectionSecond.module.css";
import product1 from "../../Images/dom perignon lady gaga rose.png";

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
            </div>
        </div>
      ))}
    </div>
  );
}

export default ProductSectionSecond;
