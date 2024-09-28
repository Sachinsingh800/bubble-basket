import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import style from "./HomePageCarousel.module.css"; // Import your custom CSS module
import { getAllBanner } from "../Apis/Apis";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

function HomePageCarousel() {
  const [index, setIndex] = useState(0);
  const [banners, setBanners] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    handleAllBanner();
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAllBanner = async () => {
    try {
      const response = await getAllBanner();
      setBanners(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 500);
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  
  const formatTitleForUrl = (input) => {
    // Replace spaces and %20 with -
    return input
      .replace(/%20/g, "-") // Convert encoded spaces
      .replace(/\s+/g, "-") // Convert regular spaces
      .replace(/:/g, "") // Remove colons
      .toLowerCase();  
  };


  const handleNavigate = (cate) => {
    window.location.href = `/${formatTitleForUrl(cate)}`;
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % filteredBanners.length);
  };

  const prevSlide = () => {
    setIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredBanners.length) % filteredBanners.length
    );
  };

  // Filter and reverse the banners array
  const filteredBanners = banners
    .filter((banner) => banner.setFor === (isMobile ? "Phone" : "Desktop"))
    .reverse();

  return (
    <div className={style.carousel_container}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        controls={false}
        interval={3000} // Adjust the interval as needed
        slide={true}
      >
        {filteredBanners.map((banner) => (
          <Carousel.Item key={banner._id}>
            <div className={style.carousel_box}>
              <div className={style.inner_container_}>
                <div
                  className={style.img_box}
                  onClick={() => handleNavigate(banner?.category)}
                >
                  <img
                    className={style.img}
                    src={banner.bannerImg.url}
                    alt="Banner Image"
                    title="Banner Image"
                    loading="lazy"
                    width="auto"
                    height="auto"
                  />
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className={style.Custom_button}>
        <button className={style.left_arrow} onClick={prevSlide}>
          <GoArrowLeft className={style.icon} />
        </button>
        <button className={style.right_arrow} onClick={nextSlide}>
          <GoArrowRight className={style.icon} />
        </button>
      </div>
    </div>
  );
}

export default HomePageCarousel;
