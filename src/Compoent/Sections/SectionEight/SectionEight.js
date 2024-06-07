import React, { useEffect, useState } from 'react'
import style from "./SectionEight.module.css"
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
      {loading && <p>Loading...</p>}
      <div className={style.container}>
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
