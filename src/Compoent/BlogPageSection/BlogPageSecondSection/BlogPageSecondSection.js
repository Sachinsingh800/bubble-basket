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

  const generateHelmet = (item) => (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>{item.blogTitle}</title>
      <meta name="description" content={item.shortDescription} />
      <link
        rel="canonical"
        href={`https://www.luxurybubblebasket.com/Blog/${formatTitleForUrl(
          item.blogTitle
        )}`}
      />
       {/* Schema Markup */}
       <script type="application/ld+json">
        {`
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          "headline": "${item.blogTitle}",
          "image": "${item.blogImage?.url}",
          "author": {
            "@type": "Person",
            "name": "${item.authorName}"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Luxury Bubble Basket",
            "logo": {
              "@type": "ImageObject",
              "url": "URL_TO_YOUR_LOGO_IMAGE"
            }
          },
          "datePublished": "${item.createdAt}",
          "dateModified": "${item.updatedAt}",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.luxurybubblebasket.com/Blog/${formatTitleForUrl(item.blogTitle)}"
          }
        }
        `}
      </script>
      {/* End Schema Markup */}
    </Helmet>
  );

  return (
    <div className={style.main}>
    
      {loading && <p>Loading...</p>}
      {allBlog.map((item) => (
        <React.Fragment key={item._id}>
          {generateHelmet(item)}
          <div className={style.container}>
            <div className={style.blog_img_box}>
              <img src={item?.blogImage?.url} alt={item?.blogTitle} title={item?.blogTitle} loading="lazy"  width="auto" height="auto"  />
            </div>
            <br />
            <div className={style.author_box}>
              <p>{item?.authorName}</p>
              <p>-</p> <p>{convertDate(item?.createdAt)}</p>
            </div>
            <div className={style.title_box}>
              <h2>{item?.blogTitle}</h2>
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
        </React.Fragment>
      ))}
    </div>
  );
}

export default BlogPageSecondSection;
