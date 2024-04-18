import React from "react";
import { Link, useParams } from "react-router-dom";
import style from "./BlogFullPageSectionSecond.module.css";
import blog1 from "../../Images/banner-wine-festival-glass-wine-distillery-old-wooden-table-with-bunches.jpg";
import blog2 from "../../Images/glass-wine-old-table-with-vineyard-background.jpg";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

function BlogFullPageSectionSecond() {
  const { id } = useParams(); // Fetching the blog ID from the URL params

  const blogData = [
    {
      _id: 1,
      img: blog1,
      author: "John Wilson",
      date: "July 2, 2020",
      title: "CORPORATE BULK ORDER",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ac purus sed luctus. Proin pretium pharetra sagittis. Pellentesque sit amet semper urna. Aenean quis leo sed ex consequat faucibus. Quisque felis diam, suscipit vel mauris sit amet, gravida lacinia orci. Ut quis mauris nec mauris dapibus commodo eu quis ligula. Nulla hendrerit, turpis in semper rhoncus, est dui accumsan augue, id iaculis metus augue vel urna",
      likes: "",
      comments: [
        {
          username: "IRWIN TAYLOR",
          date: "September 3, 2020",
          userimg: "",
          comment:
            "Lorem ipsum dolor sit amet, est nostro mandamus dignissim ea. Simul primis assentior vis cu, no nec percipit salutatus, tractatos tincidunt te quo. Ut mel numquam accommodare eum.",
        },
        {
          username: "HEATHER HUGHES",
          date: "September 3, 2020",
          userimg: "",
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
      title: "THE HEADLINE HERE",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ac purus sed luctus. Proin pretium pharetra sagittis. Pellentesque sit amet semper urna. Aenean quis leo sed ex consequat faucibus. Quisque felis diam, suscipit vel mauris sit amet, gravida lacinia orci. Ut quis mauris nec mauris dapibus commodo eu quis ligula. Nulla hendrerit, turpis in semper rhoncus, est dui accumsan augue, id iaculis metus augue vel urna",
      likes: "",
      comments: [
        {
          username: "IRWIN TAYLOR",
          date: "September 3, 2020",
          userimg: "",
          comment:
            "Lorem ipsum dolor sit amet, est nostro mandamus dignissim ea. Simul primis assentior vis cu, no nec percipit salutatus, tractatos tincidunt te quo. Ut mel numquam accommodare eum.",
        },
        {
          username: "HEATHER HUGHES",
          date: "September 3, 2020",
          userimg: "",
          comment:
            "Lorem ipsum dolor sit amet, est nostro mandamus dignissim ea. Simul primis assentior vis cu, no nec percipit salutatus, tractatos tincidunt te quo. Ut mel numquam accommodare eum.",
        },
      ],
    },
  ];

  // Filter the blog data based on the ID fetched from the URL
  const selectedBlog = blogData.find((blog) => blog._id.toString() === id);
  return (
    <div className={style.main}>
      <div className={style.container}>
        <br />
        <div className={style.author_box}>
          <p>{selectedBlog.author}</p>
          <p>-</p> <p>{selectedBlog.date}</p>
        </div>
        <div>
          <h6>{selectedBlog.title}</h6>
          <p>{selectedBlog.content}</p>
        </div>
        <div className={style.bottom_box}>
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
  );
}

export default BlogFullPageSectionSecond;
