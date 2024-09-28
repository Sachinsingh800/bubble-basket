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
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();

  // Replace hyphens in the category string with spaces
  const convertString = (input) => {
    // Replace spaces and %20 with -
    return input
      .replace(/%20/g, "-") // Convert encoded spaces
      .replace(/\s+/g, "-") // Convert regular spaces
      .replace(/:/g, "") // Remove colons
      .toLowerCase();
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response = await getAllProduct(); // Fetch all products
        let data = response?.data;
        setProductData(data);
        // Filter products based on the category from URL params
        let filtered = data.filter(
          (product) => convertString(product.category) === category
        );
        setFilteredProducts(filtered);
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
    let title =
      "Premium Wine & Champagne Gift Baskets - Perfect for Any Occasion";
    let description =
      "Discover our exquisite selection of red and white wine gift baskets, sparkling champagne gift sets, and luxury gift boxes. Ideal for corporate gifts, birthdays, weddings, and personalized occasions. Shop now for the perfect gift!";

    switch (category.toLowerCase()) {
      case "champagne":
        title =
          "Luxury Champagne Gift Basket Delivery - Best Champagne for Valentine's Day";
        description =
          "Discover the perfect luxury champagne gift basket, featuring exquisite champagne and chocolate. Ideal for any occasion, our champagne gift boxes ensure a memorable celebration.";
        break;
      case "tiffany-champagne":
        title =
          "Elegant Tiffany Champagne Flutes | Luxury Champagne Flute Sets";
        description =
          "Discover our exquisite collection of Tiffany Champagne Flutes, perfect for weddings and special occasions. Shop luxury champagne flutes and Tiffany Champagne Sets.";
        break;
      case "tiffany-wine":
        title = "Tiffany Wine Collections - Elegant and Timeless Gifts";
        description =
          "Explore our Tiffany wine collections, offering elegant and timeless gifts. Perfect for weddings, anniversaries, and corporate events.";
        break;
      case "wine":
        title =
          "Premium Wine Gifts: Perfect Wine Christmas Gifts & Wine Bottle Gift Boxes";
        description =
          "Discover the best wine gifts for any occasion, including wine Christmas gifts, wine bottle gift boxes, and wine set gifts. Ideal for wine lovers.";
        break;
      case "personalised":
        title = "Personalized Champagne Bottle | Custom Wine Bottles & Gifts";
        description =
          "Discover our range of personalized champagne and wine bottles, perfect for weddings, birthdays, and special occasions.";
        break;
      case "hand-painted":
        title =
          "Custom Hand Painted Champagne Bottles | Unique Painted Wine Bottles for Weddings & Holidays";
        description =
          "Discover beautiful hand painted champagne bottles and custom painted wine bottles for weddings, holidays, and special occasions.";
        break;
      default:
        break;
    }

    return (
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="canonical"
          href={`https://www.luxurybubblebasket.com/${category}`}
        />
        <meta name="title" content={title} />
        <meta name="keyword" content={description} />
      </Helmet>
    );
  };

  const renderContentByCategory = () => {
    switch (category.toLowerCase()) {
      case "champagne":
        return <ChampagneContent />;
      case "tiffany-champagne":
        return <TiffanyChampagneContent />;
      case "tiffany-wine":
        return <TiffanyWineContent />;
      case "wine":
        return <WineContent />;
      case "personalised":
        return <PersonalizedContent />;
      case "hand-painted":
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
          {filteredProducts?.map((product, index) => (
            <React.Fragment key={index}>
              <div
                className={
                  index % 4 === 3
                    ? style.inner_container1
                    : style.inner_container
                }
                onClick={() => handleNavigate(product?.title)}
              >
                {product?.productStatus !== "Available" && (
                  <span className={style.out_of_stock}>Out of Stock</span>
                )}
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
