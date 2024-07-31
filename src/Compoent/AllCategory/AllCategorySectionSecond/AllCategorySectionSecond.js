import React, { useEffect, useState } from "react";
import style from "./AllCategorySectionSecond.module.css";
import { useParams } from "react-router-dom";
import { getAllProduct } from "../../Apis/Apis";
import { Helmet } from "react-helmet";
import ChampagneContent from "../../Content/ChampagneContent";
import TiffanyChampagneContent from "../../Content/TiffanyChampagneContent";
import TiffanyWineContent from "../../Content/TiffanyWineContent";
import WineContent from "../../Content/WineContent";
import PersonalizedContent from "../../Content/PersonalizedContent";
import HandPaintedContent from "../../Content/handPaintedContent";

function AllCategorySectionSecond() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();

  function replaceHyphensWithSpaces(str) {
    return str.replace(/-/g, " ");
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response = await getAllProduct(replaceHyphensWithSpaces(category));
        let data = response?.data;
        setProductData(data);
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  const formatTitleForUrl = (title) => {
    return title.replace(/\s+/g, "-").replace(/:/g, "");
  };

  const handleNavigate = (title) => {
    window.location.href = `/Product/${formatTitleForUrl(title)}`;
  };

  const generateHelmet = () => {
    let title = "Premium Wine & Champagne Gift Baskets - Perfect for Any Occasion";
    let description = "Discover our exquisite selection of red and white wine gift baskets, sparkling champagne gift sets, and luxury gift boxes. Ideal for corporate gifts, birthdays, weddings, and personalized occasions. Shop now for the perfect gift!";
    
    switch (category) {
      case "CHAMPAGNE":
        title = "Luxury Champagne Gift Basket Delivery - Best Champagne for Valentine's Day";
        description = "Discover the perfect luxury champagne gift basket, featuring exquisite champagne and chocolate. Ideal for any occasion, our champagne gift boxes ensure a memorable celebration. Experience seamless champagne gift basket delivery and surprise your loved ones with the best champagne delivered as a gift. Perfect for Valentine's Day and more!";
        break;
      case "TIFFANY-CHAMPAGNE":
        title = "Elegant Tiffany Champagne Flutes | Luxury Champagne Flute Sets";
        description = "Discover our exquisite collection of Tiffany Champagne Flutes, perfect for weddings and special occasions. Shop luxury champagne flutes and Tiffany Champagne Sets, including engraved options, to elevate your celebrations.";
        break;
      case "TIFFANY-WINE":
        title = "Tiffany Wine Collections - Elegant and Timeless Gifts";
        description = "Explore our Tiffany wine collections, offering elegant and timeless gifts. Perfect for weddings, anniversaries, and corporate events.";
        break;
      case "WINE":
        title = "Premium Wine Gifts: Perfect Wine Christmas Gifts & Wine Bottle Gift Boxes";
        description = "Discover the best wine gifts for any occasion, including wine Christmas gifts, wine bottle gift boxes, and wine set gifts. Ideal for wine lovers, our selection features wine gifts for Christmas and elegant wine glass gift sets. Shop now for the perfect present!";
        break;
      case "PERSONALISED":
        title = "Personalized Champagne Bottle | Custom Wine Bottles & Gifts";
        description = "Discover our range of personalized champagne and wine bottles, perfect for weddings, birthdays, and special occasions. Shop custom champagne bottles and personalized wine gifts to add a unique touch to your celebrations. Ideal for making memorable moments even more special.";
        break;
      case "HAND-PAINTED":
        title = "Custom Hand Painted Champagne Bottles | Unique Painted Wine Bottles for Weddings & Holidays";
        description = "Discover beautiful hand painted champagne bottles and custom painted wine bottles for weddings, holidays, and special occasions. Shop our unique selection of painted champagne bottles and learn how to paint a champagne bottle yourself. Perfect for Christmas gifts and celebrations.";
        break;
      default:
        break;
    }

    return (
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`https://www.luxurybubblebasket.com/${category}`} />
        <meta name="title" content={title} />
        <meta name="keyword" content={description} />
        <script type="application/ld+json">
          {`
          {
            "@context": "http://schema.org",
            "@type": "ItemList",
            "name": "Products in ${category}",
            "itemListElement": [
              ${productData.map((product, index) => `
                {
                  "@type": "Product",
                  "position": ${index + 1},
                  "url": "https://www.luxurybubblebasket.com/Product/${formatTitleForUrl(product.title)}",
                  "name": "${product.title}",
                  "image": "${product.productImg[0]?.url}",
                  "description": "${product.description}",
                  "offers": {
                    "@type": "Offer",
                    "price": "${product.price}",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  }
                }
              `).join(',')}
            ]
          }
          `}
        </script>
      </Helmet>
    );
  };

  const renderContentByCategory = () => {
    switch (category) {
      case "CHAMPAGNE":
        return <ChampagneContent />;
      case "TIFFANY-CHAMPAGNE":
        return <TiffanyChampagneContent />;
      case "TIFFANY-WINE":
        return <TiffanyWineContent />;
      case "WINE":
        return <WineContent />;
      case "PERSONALISED":
        return <PersonalizedContent />;
      case "HAND-PAINTED":
        return <HandPaintedContent />;
      default:
        return null;
    }
  };

  return (
    <div className={style.main}>
      {generateHelmet()}
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className={style.additional_box}>
          {productData?.map((product, index) => (
            <React.Fragment key={index}>
              <div
                className={
                  index % 4 === 3
                    ? style.inner_container1
                    : style.inner_container
                }
                onClick={() => handleNavigate(product?.title)}
              >
                <div className={style.add_box_img}>
                  <img
                    src={product?.productImg[0]?.url}
                    alt={product?.title}
                    title={product?.title}
                    loading="lazy"
                    width="auto"
                    height="auto"
                  />
                </div>
                <span className={style.product_title}>{product?.title}</span>
                <p>★★★★✰</p>
                <span>
                  <strong>${product?.price}</strong>
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
      {renderContentByCategory()}
    </div>
  );
}

export default AllCategorySectionSecond;
