import React, { useState } from "react";
import style from "./ColumnPageSectionSecond.module.css";
import product1 from "../../Images/dom perignon lady gaga rose.png";


function ColumnPageSectionSecond() {

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
