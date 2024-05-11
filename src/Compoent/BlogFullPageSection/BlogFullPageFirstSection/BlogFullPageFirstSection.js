import React, { useState, useEffect } from "react";
import style from "./BlogFullPageFirstSection.module.css";
import blog1 from "../../Images/image-007.png";
import blog2 from "../../Images/image-009.png";
import { useParams } from "react-router-dom";
import dp from "../../Images/image-010.png";
import { getAllBlog } from "../../Apis/Apis";

function BlogFullPageFirstSection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const { id } = useParams(); // Fetching the blog ID from the URL params
  
const [allBlog,setAllBlog] = useState([])
const [loading,SetIsloading] = useState(false)


  useEffect(() => {
    handleAllBlog();
  }, []);

  const handleAllBlog= async () => {
    SetIsloading(true);
    try {
      const response = await getAllBlog();
      console.log(response.data, "response");
      setAllBlog(response.data);
    } catch (error) {
      console.error("Error getting products:", error.message);
    } finally {
      SetIsloading(false);
    }
  };


  
  // Filter the blog data based on the ID fetched from the URL
  const selectedBlog = allBlog.find((blog) => blog._id.toString() === id);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={style.main}>
            {loading && <p>Loading...</p>}
      <div
        className={style.background}
        style={{ transform: `translateY(${scrollPosition * 0.2}px)` }} // Adjust the speed here
      >
        <img src={selectedBlog?.posterImage?.url} alt="bg" className={style.bgImage} />
      </div>
      <div
        className={style.content}
        style={{ transform: `translateY(-${scrollPosition * 0.4}px)` }} // Adjust the speed here
      >
        <div className={style.description_box}>
          <h2>{selectedBlog?.blogTitle}</h2>
        </div>
      </div>
    </div>
  );
}

export default BlogFullPageFirstSection;
