import React from "react";
import style from "./ColumnPageSectionSecond.module.css";
import product1 from "../../Images/dom perignon lady gaga rose.png";

const products = [
  {
    name: "Maschio Prosecco",
    type: "Brut DOC NU",
    rating: "★★★★✰",
    price: "$79.00"
  },
  {
    name: "Veuve Clicquot",
    type: "Brut Yellow",
    rating: "★★★★✰",
    price: "$99.00"
  },
  {
    name: "Billecart-Salmon",
    type: "Brut Sous Bois",
    rating: "★★★★✰",
    price: "$199.00"
  },
  {
    name: "Hand-Painted La Marca Prosecco",
    type: "",
    rating: "★★★★✰",
    price: "$99.00",
    offer: true
  },
  {
    name: "Hand-Painted La Marca Prosecco",
    type: "",
    rating: "★★★★✰",
    price: "$99.00",
    offer: true
  },
  {
    name: "Hand-Painted La Marca Prosecco",
    type: "",
    rating: "★★★★✰",
    price: "$99.00",
    offer: true
  },
  {
    name: "Hand-Painted La Marca Prosecco",
    type: "",
    rating: "★★★★✰",
    price: "$99.00",
    offer: true
  },
  {
    name: "Hand-Painted La Marca Prosecco",
    type: "",
    rating: "★★★★✰",
    price: "$99.00",
    offer: true
  },
  // Add more products as needed
];

function ColumnPageSectionSecond() {
  return (
    <div className={style.main}>
      <div className={style.additional_box}>
        {products.map((product, index) => (
          <div key={index} className={style.inner_container}>
            {product.offer && (
              <span className={style.offer_box}>offer</span>
            )}
            <div className={style.add_box_img}>
              <img src={product1} alt="product" />
            </div>
            <span>{product.name}</span>
            {product.type && <span>{product.type}</span>}
            <p>{product.rating}</p>
            <h6>
              <strong>{product.price}</strong>
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColumnPageSectionSecond;
