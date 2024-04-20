import React, { useState } from "react";
import style from "./SecondSection.module.css";
import product1 from "../../Images/26 pc.png";
import product2 from "../../Images/Moet & Chandon Imperial Brut Champagne With 8pc 1.png";
import product3 from "../../Images/dom perignon lady gaga rose.png";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

function SecondSection() {
  const [openPopoverId, setOpenPopoverId] = useState(null);

  const collectionData = [
    {
      id: 1,
      title: "WINE",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quo voluptates iure eaque dolorum repudiand",
      img: product3,
    },
    {
      id: 2,
      title: "CHAMPAGNE",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quo voluptates iure eaque dolorum repudiand",
      img: product2,
    },
    {
      id: 3,
      title: "CHOCOLATE",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quo voluptates iure eaque dolorum repudiand",
      img: product1,
    },
  ];

  const handleOpenPopover = (id) => {
    setOpenPopoverId(id);
  };

  const handleClosePopover = () => {
    setOpenPopoverId(null);
  };

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
      <div className={style.card_box}>
        {collectionData.map((item) => (
          <div key={item.id} className={style.inner_container}>
            {openPopoverId === item.id ? (
              <button onClick={handleClosePopover} className={style.addBtn}>
                <CloseIcon/>
              </button>
            ) : (
              <button
                onClick={() => handleOpenPopover(item.id)}
                className={style.addBtn}
              >
            <AddIcon/>
              </button>
            )}
            {openPopoverId === item.id && (
              <div className={style.popover}>
                <button className={style.closeBtn} onClick={handleClosePopover}>
              <CloseIcon/>
                </button>
                <div className={style.popover_container}>
                  <div className={style.img_container}>
                    <div className={style.popover_img_box}>
                      <img src={item.img} alt={item.title} />
                    </div>
                  </div>
                  <div className={style.des}>
                    <h6>{item.title}</h6>
                    <span>{item.text}</span>
                    <div>
                      <h6>$45.00/bottle</h6>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
     <a href="/ColumnPage"><button className={style.viewAllbtn}>VIEW ALL →</button></a> 
    </div>
  );
}

export default SecondSection;
