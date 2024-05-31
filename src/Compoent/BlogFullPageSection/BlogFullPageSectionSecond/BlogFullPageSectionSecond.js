import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./BlogFullPageSectionSecond.module.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { getAllBlog } from "../../Apis/Apis";
import dp from "../../Images/Avatar icon profile icon member_5247852.png"

function BlogFullPageSectionSecond() {
  const { id } = useParams(); // Fetching the blog ID from the URL params

  const [allBlog, setAllBlog] = useState([]);
  const [loading, SetIsloading] = useState(false);
  const [usename,setUserName] = useState("")
  const [userComment,setUserComment] = useState("")
  const [userComments, setUserComments] = useState([
    {
      userimg: dp,
      date: "2024-05-11T08:27:20.263Z",
      username: "User1",
      comment: "This is the first comment."
    },
    {
      userimg: dp,
      date: "2024-05-12T10:15:30.123Z",
      username: "User2",
      comment: "This is the second comment."
    },
    {
      userimg: dp,
      date: "2024-05-13T12:45:50.456Z",
      username: "User3",
      comment: "This is the third comment."
    }
  ]);

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

  function convertToJSX(htmlString) {
    return React.createElement("div", {
      dangerouslySetInnerHTML: { __html: htmlString },
    });
  }

  // Filter the blog data based on the ID fetched from the URL
  const selectedBlog = allBlog.find((blog) => blog._id.toString() === id);
  // Find the index of the current blog post
  const currentIndex = allBlog.findIndex((blog) => blog._id.toString() === id);

  // Determine the index of the previous and next posts
  const prevIndex = (currentIndex - 1 + allBlog?.length) % allBlog?.length;
  const nextIndex = (currentIndex + 1) % allBlog?.length;

  // Get the previous and next posts
  const prevPost = allBlog[prevIndex];
  const nextPost = allBlog[nextIndex];

  const handleCommentSubmit = (newComment) => {
    setUserComments([...userComments, newComment]);
  };

  return (
    <div className={style.main}>
      <div className={style.container}>
      {loading && <p>Loading...</p>}
        <div className={style.blog_box}>
          <img src={selectedBlog?.blogImage?.url} alt={selectedBlog?.blogTitle} />
        </div>
        <br/>
        <div className={style.author_box}>
          <p>{selectedBlog?.authorName}</p>
          <p>-</p> <p>{convertDate(selectedBlog?.createdAt)}</p>
        </div>
        <div className={style.title_box}>
          <h6>{selectedBlog?.blogTitle}</h6>
          <p>{convertToJSX(selectedBlog?.description)}</p>
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
      </div>
      <div className={style.author_info_box}>
        <div className={style.inner_container}>
          <div className={style.user_box_img}>
            <img src={selectedBlog?.authorImage?.url} alt="dp" />
          </div>
          <div className={style.des_box}>
            <div>
              <h5>{selectedBlog?.authorName}</h5>
              <span style={{ fontWeight: 600 }}>
                {selectedBlog?.authorTitle}
              </span>
            </div>
            <span>{selectedBlog?.authorDescription}</span>
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
          </div>
        </div>
      </div>
      <div className={style.button_box}>
        <a href={`/blog/${prevPost?._id}`}>
          <button>← Prev post</button>
        </a>
        <a href={`/blog/${nextPost?._id}`}>
          <button>Next post →</button>
        </a>
      </div>

      <div className={style.comment_box}>
        <h6>{userComments.length} COMMENTS</h6>
        <br />
        {userComments.map((item, index) => (
          <div className={style.user_review_container} key={index}>
            <div className={style.user_dp}>
              <img src={item.userimg} alt="dp" />
            </div>
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
          <textarea placeholder="Your Comment*" onChange={(e)=>setUserComment(e.target.value)} />
          <div className={style.user_input_box}>
            <input type="text" placeholder="Your Name*" onChange={(e)=>setUserName(e.target.value)} />
            <input type="email" placeholder="Your Email*" />
          </div>
          <input
            className={style.input_website}
            type="text"
            placeholder="Website"
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
            onClick={() => handleCommentSubmit({
              userimg: dp,
              date: new Date().toISOString(),
              username:usename,
              comment: userComment
            })}
          >
            POST COMMENT →
          </button>
        </form>
      </div>
    </div>
  );
}

export default BlogFullPageSectionSecond;
