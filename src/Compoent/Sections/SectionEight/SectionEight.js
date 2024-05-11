import React, { useEffect, useState } from 'react'
import style from "./SectionEight.module.css"
import banner1 from "../../Images/portrait-smiling-mature-senior-woman-holding-glass-wine-while-using-laptop-kitchen-table-freelance-working-home-concept.jpg"
import banner2 from "../../Images/glass-wine-old-table-with-vineyard-background.jpg"
import blog1 from "../../Images/image-007.png";
import blog2 from "../../Images/image-009.png";
import dp from "../../Images/image-010.png";
import { getAllBlog } from '../../Apis/Apis';

function SectionEight() {
  const [allBlog, setAllBlog] = useState([]);
  const [loading, SetIsloading] = useState(false);
  
  useEffect(() => {
    handleAllBlog();
  }, []);

  const handleAllBlog = async () => {
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

  return (
    <div className={style.main}>
      <h2>B L O G S</h2>
      <div className={style.container}>
      {loading && <p>Loading...</p>}
       <a href={`/Blog/${allBlog[0]?._id}`}> <div className={style.img_box}>
           <img src={allBlog[0]?.blogImage?.url}  alt={allBlog[0]?.blogTitle}/>
        </div>
        </a>
        <a href={`/Blog/${allBlog[1]?._id}`}>
        <div className={style.img_box}>
        <img className={style.demo_hide} src={allBlog[1]?.blogImage?.url} alt={allBlog[1]?.blogTitle}/>
        </div>
        </a>
      </div>
    </div>
  )
}

export default SectionEight
