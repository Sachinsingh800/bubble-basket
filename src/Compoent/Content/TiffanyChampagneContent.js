import React, { useState } from "react";
import style from "./Content.module.css";

function TiffanyChampagneContent() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={style.main}>
      <div className={style.heading_box}>
        <h2>The Fusion of Elegance and Luxury</h2>
      </div>
      <p>
        Welcome to Luxury Bubble Basket, where luxury meets exceptional taste. Our curated collection of Tiffany Champagne is designed for those who appreciate the finer things in life. From rare vintages to exclusive labels, we bring you the best from the world's most renowned Champagne houses, including our Tiffany Champagne sets that embody the highest standards of quality and taste.
      </p>
      <h3>Discover Our Tiffany Champagne Collections</h3>
      <p>
        <strong>Tiffany Champagne Flutes</strong>
        <br />
        Elevate your Champagne experience with our exquisite Tiffany Champagne flutes. Crafted with elegance, these flutes enhance the sensory journey of enjoying Tiffany Champagne, making every sip a refined experience.
      </p>
      <p>
        <strong>Tiffany Champagne Set</strong>
        <br />
        Our Tiffany Champagne sets include some of the finest selections, perfect for any celebration. Whether you're toasting to a milestone or enjoying a luxurious evening, these sets offer a touch of sophistication with every glass.
      </p>
      <p>
        <strong>Champagne Flutes Tiffany Co</strong>
        <br />
        Complement your Tiffany Champagne with our Tiffany Co. flutes. Designed to match the elegance of our Champagne, these flutes ensure a perfect pour and a touch of luxury for your celebrations.
      </p>
      <p>
        <strong>Tiffany Champagne Flutes Engraved</strong>
        <br />
        For a personalized touch, consider our engraved Tiffany Champagne flutes. These custom flutes make a thoughtful gift and add a personal flair to your special occasions.
      </p>
      <p>
        <strong>Tiffany Flute Set</strong>
        <br />
        Our Tiffany Flute Set features a selection of elegantly designed flutes that pair beautifully with our Tiffany Champagne, making them an ideal addition to any celebration.
      </p>
      <p>
        <strong>Luxury Champagne Flutes</strong>
        <br />
        Indulge in our luxury Champagne flutes, crafted to enhance the experience of drinking fine Champagne. These flutes bring an added level of sophistication to your events and make every sip memorable.
      </p>
      <p>
        Tiffany Champagne is not just a drink; it's an experience. Each bottle is a masterpiece, reflecting centuries of winemaking tradition combined with modern innovations. Our Tiffany Champagne collection offers a range of styles to suit every palate, from the crisp Brut to the rich Blanc de Noirs.
      </p>
      <p>
        <strong>Perfect for Celebrations and Special Occasions</strong>
        <br />
        Whether you're celebrating a wedding, anniversary, or a special achievement, Tiffany Champagne is the ideal choice. Its elegant packaging and exquisite taste make it a thoughtful and impressive gift, perfect for elevating any celebration.
      </p>
      <p>
        <strong>Pairing Suggestions</strong>
        <br />
        Enhance your dining experience with Tiffany Champagne. Pair our Brut Champagne with seafood or creamy cheeses, and enjoy the delightful flavors of our Rosé Champagne with grilled seafood or light desserts.
      </p>
      <p>
        <strong>Personalized Tiffany Champagne Gift Sets</strong>
        <br />
        Our Tiffany Champagne gift sets are thoughtfully curated and beautifully presented, making them perfect for any occasion. Each set includes Tiffany Champagne and elegant accessories like crystal flutes and gourmet treats.
      </p>
      <p>
        <strong>A Commitment to Sustainability and Quality</strong>
        <br />
        Tiffany Champagnes reflect our commitment to sustainability. Our vineyards use environmentally friendly practices to ensure the highest quality Champagne while respecting the environment.
      </p>
      {showMore && (
        <>
          <h3>Explore the Tiffany Champagne Collection</h3>
          <p>
            <strong>Tiffany Brut Champagne</strong>
            <br />
            Known for its dryness and crisp acidity, Tiffany Brut Champagne offers refreshing flavors of green apple, pear, and citrus. It's perfect for toasting and pairs well with a wide range of dishes.
          </p>
          <p>
            <strong>Tiffany Demi-Sec Champagne</strong>
            <br />
            Featuring flavors of ripe fruit, honey, and candied citrus, Tiffany Demi-Sec Champagne is slightly sweeter and pairs beautifully with desserts and brunch dishes.
          </p>
          <p>
            <strong>Tiffany Blanc de Blancs Champagne</strong>
            <br />
            Made exclusively from Chardonnay grapes, Tiffany Blanc de Blancs Champagne offers delicate flavors of citrus, green apple, and white flowers. It’s ideal for lighter dishes and sophisticated gatherings.
          </p>
          <p>
            <strong>Tiffany Blanc de Noirs Champagne</strong>
            <br />
            Produced from Pinot Noir and Pinot Meunier grapes, this rich Champagne features flavors of red fruits and spices. It pairs well with heartier dishes and adds depth to your dining experience.
          </p>
          <p>
            <strong>Tiffany Rosé Champagne</strong>
            <br />
            Renowned for its pink hue and vibrant fruit flavors, Tiffany Rosé Champagne offers a delightful combination of red berry aromas and crisp acidity, making it perfect for romantic occasions.
          </p>
          <h3>Why Choose Luxury Bubble Basket?</h3>
          <p>
            At Luxury Bubble Basket, we pride ourselves on offering only the highest quality Tiffany Champagne and exceptional service. From premium quality products to personalized service and elegant presentation, we ensure that your gift will be truly special.
          </p>
          <p>
            <strong>Shop Now</strong>
            <br />
            Browse our collection of Tiffany Champagne and related gifts today. Whether you’re celebrating a special occasion or looking for the perfect gift, Luxury Bubble Basket has you covered with a range of premium products and an easy shopping experience.
          </p>
        </>
      )}
      <button className={style.showMoreButton} onClick={handleShowMore}>
        {showMore ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default TiffanyChampagneContent;
