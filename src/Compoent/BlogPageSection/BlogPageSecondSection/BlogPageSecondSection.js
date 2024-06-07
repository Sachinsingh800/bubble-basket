import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./BlogPageSecondSection.module.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { getAllBlog } from "../../Apis/Apis";
import { Helmet } from "react-helmet";

function BlogPageSecondSection() {
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

  const convertDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const formatTitleForUrl = (title) => {
    return title.replace(/\s+/g, "-").replace(/:/g, "");
  };
  return (
    <div className={style.main}>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>"</title>
        <meta
          name=""
          content=""
        />
        <link
          rel="canonical"
          href={`https://www.luxurybubblebasket.com/Blog/`}
        />
      </Helmet>
      {loading && <p>Loading...</p>}
      {allBlog.map((item) => (
        <div className={style.container} key={item._id}>
          <div className={style.blog_img_box}>
            <img src={item?.blogImage?.url} alt={item?.blogTitle} />
          </div>
          <br />
          <div className={style.author_box}>
            <p>{item?.authorName}</p>
            <p>-</p> <p>{convertDate(item?.createdAt)}</p>
          </div>
          <div className={style.title_box}>
            <h6>{item?.blogTitle}</h6>
            <p>{item?.shortDescription}</p>
          </div>
          <div className={style.bottom_box}>
            <a
              href={`/Blog/${formatTitleForUrl(item?.blogTitle)}`}
              className={style.read_more_link}
            >
              READ MORE →
            </a>
            <ul>
              <li>
                <FacebookRoundedIcon className={style.icon} />
              </li>
              <li>
                <InstagramIcon className={style.icon} />
              </li>
              <li>
                <LinkedInIcon className={style.icon} />
              </li>
              <li>
                <TwitterIcon className={style.icon} />
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogPageSecondSection;
