import React from "react";
import { Link } from "react-router-dom";
import style from "./BlogPageSecondSection.module.css";
import blog1 from "../../Images/image-007.png";
import blog2 from "../../Images/image-009.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import dp from "../../Images/image-010.png";

function BlogPageSecondSection() {
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
          userimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQey3S6VQ4qIppedXehx8CQYDshaMBwU1UwpQ&s",
          comment:
            "Lorem ipsum dolor sit amet, est nostro mandamus dignissim ea. Simul primis assentior vis cu, no nec percipit salutatus, tractatos tincidunt te quo. Ut mel numquam accommodare eum.",
        },
        {
          username: "HEATHER HUGHES",
          date: "September 3, 2020",
          userimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQey3S6VQ4qIppedXehx8CQYDshaMBwU1UwpQ&s",
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
          userimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQey3S6VQ4qIppedXehx8CQYDshaMBwU1UwpQ&s",
          comment:
            "Lorem ipsum dolor sit amet, est nostro mandamus dignissim ea. Simul primis assentior vis cu, no nec percipit salutatus, tractatos tincidunt te quo. Ut mel numquam accommodare eum.",
        },
        {
          username: "HEATHER HUGHES",
          date: "September 3, 2020",
          userimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQey3S6VQ4qIppedXehx8CQYDshaMBwU1UwpQ&s",
          comment:
            "Lorem ipsum dolor sit amet, est nostro mandamus dignissim ea. Simul primis assentior vis cu, no nec percipit salutatus, tractatos tincidunt te quo. Ut mel numquam accommodare eum.",
        },
      ],
    },
  ];
  return (
    <div className={style.main}>
      {blogData.map((item) => (
        <div className={style.container} key={item._id}>
          <div className={style.blog_img_box}>
            <img src={item.img} alt="blog" />
          </div>
          <br />
          <div className={style.author_box}>
            <p>{item.author}</p>
            <p>-</p> <p>{item.date}</p>
          </div>
          <div>
            <h6>{item.title}</h6>
            <p>{item.content}</p>
          </div>
          <div className={style.bottom_box}>
            <a href={`/Blog/${item._id}`} className={style.read_more_link}>
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
