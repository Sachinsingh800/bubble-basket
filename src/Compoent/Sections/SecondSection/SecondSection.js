import React from 'react';
import style from "./SecondSection.module.css";
import product1 from "../../Images/26 pc.png";
import product2 from "../../Images/Moet & Chandon Imperial Brut Champagne With 8pc 1.png";
import product3 from "../../Images/dom perignon lady gaga rose.png";
import textfile from "../../Images/text2.png";

function SecondSection() {
    const collectionData = [
        {
            id: 1,
            title: "WINE",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quo voluptates iure eaque dolorum repudiand",
            img: product3    
        },
        {
            id: 2,
            title: "CHAMPAGNE",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quo voluptates iure eaque dolorum repudiand",
            img: product2
        },
        {
            id: 3,
            title: "CHOCOLATE",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quo voluptates iure eaque dolorum repudiand",
            img: product1
        },
    ];

    return (
        <div className={style.main}>
            <div className={style.heading_box}>
            <p>
          <hr />
          Gift Basket
          <hr />
        </p>
                <h2>COLLECTION</h2>
            </div>
            <div  className={style.card_box}>

            {collectionData.map((item, index) => (

                    <div key={item.id} className={style.inner_container}>
                                        <button className={style.addBtn}>+</button>
                    <div className={style.img_box}>
                        <img src={item.img} alt={item.title} />
                    </div>
                    <div className={style.text_box}>
                        <h5>{item.title}</h5>
                        <p>{item.text}</p>
                    </div>
                    </div>
                
             
            ))}
               </div>

            <button className={style.viewAllbtn}>VIEW ALL →</button>
        </div>
    );
}

export default SecondSection;
