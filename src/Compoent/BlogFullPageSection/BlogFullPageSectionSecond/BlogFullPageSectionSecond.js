import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import style from "./BlogFullPageSectionSecond.module.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { getAllBlog } from "../../Apis/Apis";
import dp from "../../Images/user.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Helmet } from "react-helmet";

function BlogFullPageSectionSecond() {
  const { blogTitle } = useParams(); // Fetching the blog title from the URL params
  const [allBlog, setAllBlog] = useState([]);
  const [loading, SetIsloading] = useState(false);
  const [usename, setUserName] = useState("");
  const [userComment, setUserComment] = useState("");
  const [userWebsite, setUserWebsite] = useState("");
  const [userEmail, setUserEmail] = useState(""); // Added state for email
  const [userComments, setUserComments] = useState([
    {
      userimg: dp,
      date: "2024-05-11T08:27:20.263Z",
      username: "User1",
      comment: "This is the first comment.",
    },
    {
      userimg: dp,
      date: "2024-05-12T10:15:30.123Z",
      username: "User2",
      comment: "This is the second comment.",
    },
    {
      userimg: dp,
      date: "2024-05-13T12:45:50.456Z",
      username: "User3",
      comment: "This is the third comment.",
    },
  ]);

  const history = useNavigate(); // Use history for navigation

  useEffect(() => {
    handleAllBlog();
  }, []);

  useEffect(() => {
    scrollToTop(); // Scroll to top when component mounts or updates
  }, [blogTitle]); // Trigger when the blog title changes

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const convertDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  function convertToJSX(htmlString) {
    return React.createElement("div", {
      dangerouslySetInnerHTML: { __html: htmlString },
    });
  }

  const formatTitleForUrl = (title) => {
    return title.replace(/\s+/g, "-").replace(/:/g, "");
  };

  // Filter the blog data based on the blog title fetched from the URL
  const selectedBlog = allBlog.find(
    (blog) => formatTitleForUrl(blog.blogTitle) === blogTitle
  );

  // Find the index of the current blog post
  const currentIndex = allBlog.findIndex(
    (blog) => formatTitleForUrl(blog.blogTitle) === blogTitle
  );

  // Determine the index of the previous and next posts
  const prevIndex = (currentIndex - 1 + allBlog.length) % allBlog.length;
  const nextIndex = (currentIndex + 1) % allBlog.length;

  // Get the previous and next posts
  const prevPost = allBlog[prevIndex];
  const nextPost = allBlog[nextIndex];

  const handleCommentSubmit = (newComment) => {
    setUserComments([...userComments, newComment]);
    setUserName("");
    setUserComment("");
    setUserWebsite(""); // Clear the website field
    setUserEmail(""); // Clear the email field
    alert("Your comment has been posted successfully!");
  };

  return (
    <div className={style.main}>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>{selectedBlog?.blogTitle}</title>
        <meta name="description" content={selectedBlog?.shortDescription} />
        <meta name="title" content={selectedBlog?.blogTitle} />
        <meta name="head title" content={selectedBlog?.blogTitle} />
        <meta name="keyword" content={selectedBlog?.blogTitle} />
        <link
          rel="canonical"
          href={`https://www.luxurybubblebasket.com/Blog/${blogTitle}`}
        />
        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
          {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            "headline": "${selectedBlog?.blogTitle}",
            "image": "${selectedBlog?.blogImage?.url}",
            "author": {
              "@type": "Person",
              "name": "${selectedBlog?.authorName}"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Luxury Bubble Basket",
              "logo": {
                "@type": "ImageObject",
                "url": "URL_TO_YOUR_LOGO_IMAGE"
              }
            },
            "datePublished": "${selectedBlog?.createdAt}",
            "dateModified": "${selectedBlog?.updatedAt}",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.luxurybubblebasket.com/Blog/${blogTitle}"
            }
          }
          `}
        </script>
        {/* End Schema Markup */}
      </Helmet>
      <div className={style.container}>
        {loading && <p>Loading...</p>}
        {selectedBlog ? (
          <>
            <div className={style.blog_box}>
              <img
                src={selectedBlog.blogImage?.url}
                alt={selectedBlog?.blogTitle}
                title={selectedBlog?.blogTitle}
                loading="lazy"
                width="auto"
                height="auto"
              />
            </div>
            <br />
            <div className={style.author_box}>
              <p>{selectedBlog.authorName}</p>
              <p>-</p> <p>{convertDate(selectedBlog.createdAt)}</p>
            </div>
            <div className={style.title_box}>
              <h1>{selectedBlog.blogTitle}</h1>
              <p>{convertToJSX(selectedBlog.description)}</p>
            </div>
            <div className={style.bottom_box}>
              <div></div>
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
          </>
        ) : (
          <p>Blog not found.</p>
        )}
      </div>
      {selectedBlog && (
        <>
          <div className={style.author_info_box}>
            <div className={style.inner_container}>
              <div className={style.user_box_img}>
                <img
                  src={selectedBlog.authorImage?.url}
                  alt={selectedBlog.authorTitle}
                  title={selectedBlog.authorTitle}
                  loading="lazy"
                  width="auto"
                  height="auto"
                />
              </div>
              <div className={style.des_box}>
                <div>
                  <h5>{selectedBlog.authorName}</h5>
                  <span style={{ fontWeight: 600 }}>
                    {selectedBlog.authorTitle}
                  </span>
                </div>
                <span>{selectedBlog.authorDescription}</span>
                <div className={style.bottom_box}></div>
              </div>
            </div>
          </div>
          <div className={style.button_box}>
            <Link
              rel="prev"
              to={`/blog/${formatTitleForUrl(prevPost?.blogTitle)}`}
              onClick={scrollToTop}
            >
              <button>← Prev post</button>
            </Link>
            <Link
              rel="next"
              to={`/blog/${formatTitleForUrl(nextPost?.blogTitle)}`}
              onClick={scrollToTop}
            >
              <button>Next post →</button>
            </Link>
          </div>
        </>
      )}
      <div className={style.comment_box}>
        <h6>{userComments.length} COMMENTS</h6>
        <br />
        {userComments.map((item, index) => (
          <div className={style.user_review_container} key={index}>
            <AccountCircleOutlinedIcon className={style.user_dp} />
            <div>
              <span>{convertDate(item.date)}</span>
              <p className={style.username}>{item.username}</p>
              <p>{item.comment}</p>
            </div>
          </div>
        ))}
        <br />
        <br />
        <br />
        <form className={style.form}>
          <p>
            <strong>LEAVE A REPLY</strong>
          </p>
          <div>
            <p>
              Your email address will not be published. Required Fields are
              marked *
            </p>
          </div>
          <textarea
            placeholder="Your Comment*"
            value={userComment} // Controlled component
            onChange={(e) => setUserComment(e.target.value)}
          />
          <div className={style.user_input_box}>
            <input
              type="text"
              placeholder="Your Name*"
              value={usename} // Controlled component
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email*" // Added email field
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <input
            className={style.input_website}
            type="text"
            placeholder="Website"
            value={userWebsite} // Controlled component
            onChange={(e) => setUserWebsite(e.target.value)}
          />
          <div>
            <input type="checkbox" />
            &nbsp;
            <span>
              Save my name, email, and website in this browser for the next time
              I comment.
            </span>
          </div>
          <button
            type="button"
            onClick={() =>
              handleCommentSubmit({
                userimg: dp,
                date: new Date().toISOString(),
                username: usename,
                comment: userComment,
              })
            }
          >
            POST COMMENT →
          </button>
        </form>
      </div>
    </div>
  );
}

export default BlogFullPageSectionSecond;
