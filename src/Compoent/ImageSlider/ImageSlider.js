import React, { useState } from "react";
import style from "./ImageSlider.module.css";
import image1 from "../Images/Dom Perignon.png";
import image2 from "../Images/Gaymus Vineyards.png";
import image3 from "../Images/Moet & Champagne.png";
import image4 from "../Images/Veuve Clicquot.png";
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function ImageSlider() {
  const images = [image1, image2, image3, image4, image1, image2, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 4;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= images.length - imagesPerPage ? 0 : prevIndex + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? images.length - imagesPerPage : prevIndex - 1));
  };

  return (
    <div className={style.slider}>
      <button className={style.prevBtn} onClick={goToPrev}>
      <KeyboardBackspaceIcon style={{fontSize:50}}/>
      </button>
      <div className={style.slide}>
       
        {images.slice(currentIndex, currentIndex + imagesPerPage).map((image, index) => (
             <div className={style.img_box}>
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={style.image}
          />
              </div>
        ))}
    
   
      </div>
      <button className={style.nextBtn} onClick={goToNext}>
        <EastIcon style={{fontSize:50}}/>
      </button>
    </div>
  );
}

export default ImageSlider;
