import React, { useEffect, useState } from "react";
import style from "./BlogSlider.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { getAllBlog } from "../Apis/Apis";

function BlogSlider() {
  const [allBlog, setAllBlog] = useState([]);
  const [loading, SetIsLoading] = useState(false);

  useEffect(() => {
    handleAllBlog();
  }, []);

  const handleAllBlog = async () => {
    SetIsLoading(true);
    try {
      const response = await getAllBlog();
      setAllBlog(response.data);
    } catch (error) {
      console.error("Error getting blogs:", error.message);
    } finally {
      SetIsLoading(false);
    }
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2000, min: 1000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const ButtonGroup = ({ next, previous }) => {
    return (
      <div className={style.customButton}>
        <button onClick={previous}>
          <GoArrowLeft className={style.icon} />
        </button>
        <button onClick={next}>
          <GoArrowRight className={style.icon} />
        </button>
      </div>
    );
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.headingBox}>
        <h2>BLOGS</h2>
      </div>

      <div className={style.carouselBox}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Carousel
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
            responsive={responsive}
          >
            {allBlog.map((item) => (
              <a key={item.id} href={`brand/${item.name}`}>
                <div className={style.imgBox}>
                  <img src={item?.blogImage?.url || ""} alt={item.name} />
                </div>
              </a>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
}

export default BlogSlider;
