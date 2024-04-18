import React from "react";
import { Link, useParams } from "react-router-dom";
import style from "./BlogFullPageSectionSecond.module.css";
import blog1 from "../../Images/image-007.png";
import blog2 from "../../Images/image-009.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import dp from "../../Images/image-010.png";
import userDp from "../../Images/user dp.png";

function BlogFullPageSectionSecond() {
  const { id } = useParams(); // Fetching the blog ID from the URL params

  const blogData = [
    {
      _id: 1,
      img: blog1,
      author: "John Wilson",
      date: "July 2, 2020",
      authorimg: dp,
      authorusername: "Caterer",
      authorbio:
        "Sed ne omnis homero. Eam reque intellegam denitionem ne. Vicu accusam reformidans at,has at timeam arum vis a impedit",
      title: "CORPORATE BULK ORDER",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ac purus sed luctus. Proin pretium pharetra sagittis. Pellentesque sit amet semper urna. Aenean quis leo sed ex consequat faucibus. Quisque felis diam, suscipit vel mauris sit amet, gravida lacinia orci. Ut quis mauris nec mauris dapibus commodo eu quis ligula. Nulla hendrerit, turpis in semper rhoncus, est dui accumsan augue, id iaculis metus augue vel urna",
      likes: "",
      comments: [
        {
          username: "IRWIN TAYLOR",
          date: "September 3, 2020",
          userimg: userDp,
          comment:
            "Lorem ipsum dolor sit amet, est nostro mandamus dignissim ea. Simul primis assentior vis cu, no nec percipit salutatus, tractatos tincidunt te quo. Ut mel numquam accommodare eum.",
        },
        {
          username: "HEATHER HUGHES",
          date: "September 3, 2020",
          userimg: userDp,
          comment:
            "Lorem ipsum dolor sit amet, est nostro mandamus dignissim ea. Simul primis assentior vis cu, no nec percipit salutatus, tractatos tincidunt te quo. Ut mel numquam accommodare eum.",
        },
      ],
    },
    {
      _id: 2,
      img: blog2,
      author: "Mohan Nilson",
      date: "July 2, 2020",
      authorimg: dp,
      authorusername: "Caterer",
      authorbio:
        "Sed ne omnis homero. Eam reque intellegam definitionem ne. Vicu accusam reformidans at,has at timeam arum vis a impedit",
      title: "THE HEADLINE HERE",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ac purus sed luctus. Proin pretium pharetra sagittis. Pellentesque sit amet semper urna. Aenean quis leo sed ex consequat faucibus. Quisque felis diam, suscipit vel mauris sit amet, gravida lacinia orci. Ut quis mauris nec mauris dapibus commodo eu quis ligula. Nulla hendrerit, turpis in semper rhoncus, est dui accumsan augue, id iaculis metus augue vel urna",
      likes: "",
      comments: [
        {
          username: "IRWIN TAYLOR",
          date: "September 3, 2020",
          userimg: userDp,
          comment:
            "Lorem ipsum dolor sit amet, est nostro mandamus dignissim ea. Simul primis assentior vis cu, no nec percipit salutatus, tractatos tincidunt te quo. Ut mel numquam accommodare eum.",
        },
        {
          username: "HEATHER HUGHES",
          date: "September 3, 2020",
          userimg: userDp,
          comment:
            "Lorem ipsum dolor sit amet, est nostro mandamus dignissim ea. Simul primis assentior vis cu, no nec percipit salutatus, tractatos tincidunt te quo. Ut mel numquam accommodare eum.",
        },
      ],
    },
  ];

  // Filter the blog data based on the ID fetched from the URL
  const selectedBlog = blogData.find((blog) => blog._id.toString() === id);

  // Find the index of the current blog post
  const currentIndex = blogData.findIndex((blog) => blog._id.toString() === id);

  // Determine the index of the previous and next posts
  const prevIndex = (currentIndex - 1 + blogData.length) % blogData.length;
  const nextIndex = (currentIndex + 1) % blogData.length;

  // Get the previous and next posts
  const prevPost = blogData[prevIndex];
  const nextPost = blogData[nextIndex];

  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.author_box}>
          <p>{selectedBlog.author}</p>
          <p>-</p> <p>{selectedBlog.date}</p>
        </div>
        <div>
          <h6>{selectedBlog.title}</h6>
          <p>{selectedBlog.content}</p>
          <p>
            Eu sed copiosae consetetur, eu errem dolore virtute nec. Vix ne odio
            deseruisse percipitur, vel cu epicuri ofciis. Debet dicunt suscipit
            per id, iuvaret indoctum an has. Duo te populo tritani, pro id reque
            atomorum convenire. Eum consulatu scripserit ne, quas eruditi sed
            ne, vim equidem consulatu an. Aeterno labitur no eam, feugait
            appareat volutpat vel ex. Te vim nostro fabulas.
          </p>
          <h5 className={style.demotext}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, us magnatus nec ullamcorper mattis, pulvinar son dapibus
            leom.
          </h5>
          <p>
            Lorem ipsum dolor sit amet, id eam facilis moderatius, eu has
            expetenda dignissim. Vis dico labores accusamus ei, modolamt
            salutatus ius ei, usu ad hendrerit. An modus invidunt conceptam usu.
            Per eius voluptatibus ad, per sint tation id. Latine perpet
            imperdiet ad vel, detracto periculis quaerendum sea.
          </p>
          <div>
            <img style={{ width: "100%" }} src={blog2} alt="" />
          </div>
          <br />
          <p>
            Lorem ipsum dolor sit amet, id eam facilis moderatius, eu has
            expetenda dignissim. Vis dico labores accusamus ei, modolamt
            salutatus ius ei, usu ad hendrerit. An modus invidunt conceptam usu.
            Per eius voluptatibus ad, per sint tation id. Latine perpet
            imperdiet ad vel, detracto periculis quaerendum sea ei. Ad duo
            utamur saperemo.
          </p>
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
            <img src={dp} alt="dp" />
          </div>
          <div className={style.des_box}>
            <div>
              <h5>{selectedBlog.author}</h5>
              <span style={{ fontWeight: 600 }}>
                {selectedBlog.authorusername}
              </span>
            </div>
            <span>{selectedBlog.authorbio}</span>
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
        <Link to={`/blog/${prevPost._id}`}>
          <button>← Prev post</button>
        </Link>
        <Link to={`/blog/${nextPost._id}`}>
          <button>Next post →</button>
        </Link>
      </div>

      <div className={style.comment_box}>
        <h6>{selectedBlog.comments.length} COMMENTS</h6>
        <br />
        {selectedBlog.comments.map((item) => (
          <div className={style.user_review_container}>
            <div className={style.user_dp}>
              <img src={item.userimg} alt="dp" />
            </div>
            <div>
              <span>{item.date}</span>
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
          <textarea placeholder="Your Comment*" />
          <div className={style.user_input_box}>
            <input type="text" placeholder="Your Name*" />
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
          <button type="submit">POST COMMENT →</button>
        </form>
      </div>
    </div>
  );
}

export default BlogFullPageSectionSecond;
