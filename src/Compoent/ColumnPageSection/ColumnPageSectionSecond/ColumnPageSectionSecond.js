import React, { useState } from "react";
import style from "./ColumnPageSectionSecond.module.css";
import product1 from "../../Images/dom perignon lady gaga rose.png";
import { nanoid } from "nanoid";

function ColumnPageSectionSecond() {
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

  const  handleNaviagte=(id)=>{
    window.location.href=`/ProductPage/${id}`
  }
  return (
    <div className={style.main}>
      <div className={style.additional_box}>
        <div className={style.inner_container1} onClick={()=>handleNaviagte(collectionData[0].id)}>
          <span className={style.offer_box}>new</span>
          <div className={style.add_box_img}>
            <img src={collectionData[0].productImg} alt="product" />
          </div>
          <span>{collectionData[0].productCategory}</span>
          <span>{collectionData[0].productName}</span>
          <p>★★★★✰</p>
          <h6>
            <strong>${collectionData[0].subTotal}</strong>
          </h6>
        </div>
        <div className={style.inner_container} onClick={()=>handleNaviagte(collectionData[1].id)}>
          <span className={style.offer_box}>new</span>
          <div className={style.add_box_img}>
            <img src={collectionData[1].productImg} alt="product" />
          </div>
          <span>{collectionData[1].productCategory}</span>
          <span>{collectionData[1].productName}</span>
          <p>★★★★✰</p>
          <h6>
            <strong>${collectionData[1].subTotal}</strong>
          </h6>
        </div>
        <div className={style.inner_container} onClick={()=>handleNaviagte(collectionData[2].id)}>
          <span className={style.offer_box}>new</span>
          <div className={style.add_box_img}>
            <img src={collectionData[2].productImg} alt="product" />
          </div>
          <span>{collectionData[2].productCategory}</span>
          <span>{collectionData[2].productName}</span>
          <p>★★★★✰</p>
          <h6>
            <strong>${collectionData[2].subTotal}</strong>
          </h6>
        </div>
        <div className={style.inner_container} onClick={()=>handleNaviagte(collectionData[3].id)}>
        <span className={style.offer_box}>new</span>
          <div className={style.add_box_img}>
            <img src={collectionData[3].productImg} alt="product" />
          </div>
          <span>{collectionData[3].productCategory}</span>
          <span>{collectionData[3].productName}</span>
          <p>★★★★✰</p>
          <h6>
            <strong>${collectionData[3].subTotal}</strong>
          </h6>
        </div>
        <div className={style.inner_container1} onClick={()=>handleNaviagte(collectionData[4].id)}>
        <span className={style.offer_box}>new</span>
          <div className={style.add_box_img}>
            <img src={collectionData[4].productImg} alt="product" />
          </div>
          <span>{collectionData[4].productCategory}</span>
          <span>{collectionData[4].productName}</span>
          <p>★★★★✰</p>
          <h6>
            <strong>${collectionData[4].subTotal}</strong>
          </h6>
        </div>
        <div className={style.inner_container} onClick={()=>handleNaviagte(collectionData[5].id)}>
        <span className={style.offer_box}>new</span>
          <div className={style.add_box_img}>
            <img src={collectionData[5].productImg} alt="product" />
          </div>
          <span>{collectionData[5].productCategory}</span>
          <span>{collectionData[5].productName}</span>
          <p>★★★★✰</p>
          <h6>
            <strong>${collectionData[5].subTotal}</strong>
          </h6>
        </div>
        <div className={style.inner_container} onClick={()=>handleNaviagte(collectionData[6].id)}>
        <span className={style.offer_box}>new</span>
          <div className={style.add_box_img}>
            <img src={collectionData[6].productImg} alt="product" />
          </div>
          <span>{collectionData[6].productCategory}</span>
          <span>{collectionData[6].productName}</span>
          <p>★★★★✰</p>
          <h6>
            <strong>${collectionData[6].subTotal}</strong>
          </h6>
        </div>
        <div className={style.inner_container} onClick={()=>handleNaviagte(collectionData[7].id)}>
        <span className={style.offer_box}>new</span>
          <div className={style.add_box_img}>
            <img src={collectionData[7].productImg} alt="product" />
          </div>
          <span>{collectionData[7].productCategory}</span>
          <span>{collectionData[7].productName}</span>
          <p>★★★★✰</p>
          <h6>
            <strong>${collectionData[7].subTotal}</strong>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default ColumnPageSectionSecond;
