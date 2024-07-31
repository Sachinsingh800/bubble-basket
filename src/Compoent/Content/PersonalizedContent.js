import React, { useState } from "react";
import style from "./Content.module.css";

function PersonalizedContent() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={style.main}>
      <div className={style.heading_box}>
        <h2>Luxury Bubble Basket!</h2>
      </div>
      <p>
        Welcome to Luxury Bubble Basket, where luxury meets exceptional taste.
        Our curated gift collection of premium wines and champagne is designed
        for those who appreciate the finer things in life. From rare vintages to
        exclusive labels, we bring you the best from the world's most renowned
        vineyards and champagne houses.
      </p>
      <h3>Discover Our Collections</h3>
      <p>
        Red Wine and White Wine Gift Baskets
        <br />
        Wine has been a symbol of celebration and luxury for so long. At Luxury
        Bubble Basket, we offer an exquisite range of red and white wine gift
        baskets that serve to all wine enthusiasts. Each basket is thoughtfully
        designed to offer a delightful experience, featuring premium wines
        sourced from renowned vineyards around the world.
      </p>
      <p>
        Our red wine gift baskets include rich, bold flavours that are perfect
        for those who appreciate the depth and complexity of a fine red. From
        strong Cabernet Sauvignons to elegant Opus, our selection is sure to
        impress. These baskets are ideal for any occasion, whether it’s a
        birthday, anniversary, or corporate gift.
      </p>
      <p>
        For those who prefer the crisp, refreshing taste of white wine, our
        white wine gift baskets are a perfect choice. Featuring top-quality
        white wines, these baskets offer a sophisticated and refreshing
        experience. Perfect for summer gatherings, housewarming gifts, or just a
        special treat for yourself.
      </p>
      <p>
        Each wine gift basket is carefully arranged to ensure a beautiful
        presentation, making it a perfect gift for any wine lover. Our baskets
        often include gourmet treats such as cheese, chocolates, and crackers
        that complement the wines, enhancing the overall experience.
      </p>
      <p>
        Champagne and Sparkling Champagne Gifts
        <br />
        There's no better way to celebrate than with a glass of fine champagne.
        At Luxury Bubble Basket, we offer a luxurious selection of champagne
        gift sets that are perfect for any special occasion. Whether you’re
        celebrating a wedding, anniversary, or corporate milestone, our
        champagne gifts are sure to impress.
      </p>
      <p>
        Our champagne gift sets feature some of the finest sparkling champagnes,
        including renowned brands and exclusive selections. Each set is
        beautifully presented, often accompanied by elegant flutes, making it an
        ideal choice for gifting. For those looking for something truly special,
        our Tiffany Champagne sets offer an added touch of luxury with their
        iconic design and presentation.
      </p>
      <p>
        In addition to our traditional champagne offerings, we also provide a
        selection of sparkling champagne gift sets. These include a variety of
        sparkling wines that offer a delightful effervescence and are perfect
        for any celebration. Our sparkling champagne sets are elegantly packaged
        and ready to make any occasion sparkle.
      </p>
      <p>
        Whether you are gifting for a wedding, a corporate event, or a festive
        celebration, our champagne and sparkling champagne gifts are sure to
        make a statement.
      </p>
      <p>
        Personalized and Hand-Painted Bottles
        <br />
        At Luxury Bubble Basket, we understand the power of a personalized gift.
        Our personalized bottles are crafted to add a unique and meaningful touch
        to any occasion. Whether you are celebrating a milestone, expressing
        gratitude, or simply showing someone you care, our personalized bottles
        offer a special way to convey your sentiments. With options to customize
        the label, engraving, and packaging, each bottle becomes a one-of-a-kind
        keepsake that is sure to be cherished.
      </p>
      <p>
        A Personalized Touch for Every Occasion
        <br />
        Personalized bottles from Luxury Bubble Basket are perfect for a wide
        range of occasions. From birthdays and weddings to corporate events and
        holidays, our bottles can be tailored to fit the theme and style of any
        celebration. Here are some popular occasions for personalized bottles:
      </p>
      <ul>
        <li>
          Weddings and Anniversaries: Celebrate love and commitment with a
          personalized bottle of champagne or wine. Engrave the names of the
          couple, their wedding date, or a heartfelt message to create a lasting
          memento of their special day.
        </li>
        <li>
          Birthdays: Make someone’s birthday extra special with a personalized
          bottle of their favorite beverage. Add their name, age, and a fun or
          sentimental message to commemorate the occasion.
        </li>
        <li>
          Corporate Gifts: Show appreciation to clients, partners, or employees
          with a personalized bottle. Engrave your company logo, a message of
          thanks, or a milestone achievement to create a professional and
          memorable gift.
        </li>
        <li>
          Holidays: Add a festive touch to your holiday celebrations with
          personalized bottles. Whether it’s Christmas, New Year’s, or any other
          holiday, a customized bottle makes a thoughtful and unique gift.
        </li>
      </ul>
      <p>
        Customization Options
        <br />
        At Luxury Bubble Basket, we offer a variety of customization options to
        create the perfect personalized bottle. These options allow you to tailor
        the bottle to your specific needs and preferences, ensuring that it truly
        reflects your style and message.
      </p>
      <ul>
        <li>
          Engraving: Our engraving service allows you to add names, dates,
          messages, and even logos to the bottle. The precise and elegant
          engraving technique ensures that your personalized details are
          beautifully rendered on the bottle’s surface.
        </li>
        <li>
          Custom Labels: Design a custom label that captures the essence of your
          celebration. Whether you want a classic, elegant design or a fun,
          modern look, our team can create a label that perfectly complements
          your bottle.
        </li>
        <li>
          Packaging: Enhance the presentation of your personalized bottle with
          our premium packaging options. From luxurious gift boxes to elegant
          wooden cases, our packaging adds an extra touch of sophistication and
          makes your gift even more special.
        </li>
      </ul>
      <p>
        Quality and Craftsmanship
        <br />
        Every personalized bottle from Luxury Bubble Basket is crafted with the
        highest standards of quality and craftsmanship. We work with renowned
        wineries and distilleries to ensure that the beverages inside our
        bottles are as exceptional as the personalization on the outside. Our
        commitment to excellence means that you can trust our personalized
        bottles to deliver both beauty and taste.
      </p>
      <p>
        Personalized Bottles for Every Beverage
        <br />
        Our personalized bottle service is not limited to champagne and wine; we
        offer customization for a variety of beverages to suit every preference
        and occasion. Here are some of the types of bottles you can personalize
        with Luxury Bubble Basket:
      </p>
      <ul>
        <li>
          Champagne: Celebrate with a personalized bottle of premium champagne.
          Perfect for toasting to special moments, our personalized champagne
          bottles add a touch of elegance and sophistication to any celebration.
        </li>
        <li>
          Wine: Choose from a selection of fine wines and create a personalized
          bottle that reflects the receiver’s taste. From rich reds to crisp
          whites, our personalized wine bottle gift boxes are a timeless and
          versatile gift.
        </li>
      </ul>
      <p>
        How to Order Your Personalized Bottle
        <br />
        Ordering a personalized bottle from Luxury Bubble Basket is a simple and
        seamless process. Follow these steps to create your custom gift:
      </p>
      <ol>
        <li>
          Select Your Beverage: Choose from our curated selection of premium
          champagnes, wines, and spirits. Each option is carefully chosen for
          its quality and taste, ensuring that your personalized bottle is
          exceptional.
        </li>
        <li>
          Customize Your Bottle: Use our online customization tool to add your
          personal touch. Select your engraving or custom label design, and
          choose your preferred packaging option. Our team is also available to
          assist with any special requests or design ideas.
        </li>
        <li>
          Review and Approve: Once your customization details are complete,
          review your design to ensure that everything is perfect. Approve your
          order, and our team will begin crafting your personalized bottle.
        </li>
        <li>
          Delivery: Your personalized bottle will be carefully packaged and
          shipped to your desired location. We offer various shipping options to
          ensure that your gift arrives on time and in perfect condition.
        </li>
      </ol>
      <p>
        Conclusion: Make Every Moment Special with Personalized Bottles
        <br />
        At Luxury Bubble Basket, we believe that the best gifts are those that
        are thoughtful, unique, and personal. Our personalized bottles offer a
        special way to celebrate, commemorate, and show appreciation for the
        important people and moments in your life. With a commitment to quality,
        craftsmanship, and customization, we ensure that every personalized
        bottle is a beautiful and memorable gift. Discover the joy of giving and
        receiving personalized bottles with Luxury Bubble Basket and make every
        moment special.
      </p>
      {showMore && (
        <>
          <h3>Explore More Personalized Options</h3>
          <p>
            <strong>Personalized Champagne Bottle for Wedding</strong>
            <br />
            Celebrate love and commitment with a personalized champagne bottle.
            Engrave the names of the couple, their wedding date, or a heartfelt
            message to create a lasting memento of their special day.
          </p>
          <p>
            <strong>Personalized Wine Bottles for Birthday</strong>
            <br />
            Make someone’s birthday extra special with a personalized bottle of
            their favorite wine. Add their name, age, and a fun or sentimental
            message to commemorate the occasion.
          </p>
          <p>
            <strong>Customized Bottle of Champagne</strong>
            <br />
            Our customized bottles of champagne add a touch of elegance and
            sophistication to any celebration. Perfect for toasting to special
            moments, these bottles are designed to impress.
          </p>
          <h3>Why Choose Luxury Bubble Basket?</h3>
          <p>
            At Luxury Bubble Basket, we pride ourselves on offering only the
            highest quality personalized bottles and exceptional service. From
            premium quality products to personalized service and elegant
            presentation, we ensure that your gift will be truly special.
          </p>
          <p>
            <strong>Shop Now</strong>
            <br />
            Browse our collection of personalized bottles and related gifts today.
            Whether you’re celebrating a special occasion or looking for the
            perfect gift, Luxury Bubble Basket has you covered with a range of
            premium products and an easy shopping experience.
          </p>
        </>
      )}
      <button className={style.showMoreButton} onClick={handleShowMore}>
        {showMore ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default PersonalizedContent;
