import React from "react";
import style from "./BlogPageSecondSection.module.css";
import blog1 from "../../Images/banner-wine-festival-glass-wine-distillery-old-wooden-table-with-bunches.jpg";
import blog2 from "../../Images/glass-wine-old-table-with-vineyard-background.jpg";

function BlogPageSecondSection() {
  const blogData = [
    {
      img: blog1,
      author: "John Wilson",
      date: "July 2, 2020",
      title: "CORPORATE BULK ORDER",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ac purus sed luctus. Proin pretium pharetra sagittis. Pellentesque sit amet semper urna. Aenean quis leo sed ex consequat faucibus. Quisque felis diam, suscipit vel mauris sit amet, gravida lacinia orci. Ut quis mauris nec mauris dapibus commodo eu quis ligula. Nulla hendrerit, turpis in semper rhoncus, est dui accumsan augue, id iaculis metus augue vel urna",
      likes: "",
      comments: "",
    },
    {
      img: blog2,
      author: "Mohan Nilson",
      date: "July 2, 2020",
      title: "THE HEADLINE HERE",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ac purus sed luctus. Proin pretium pharetra sagittis. Pellentesque sit amet semper urna. Aenean quis leo sed ex consequat faucibus. Quisque felis diam, suscipit vel mauris sit amet, gravida lacinia orci. Ut quis mauris nec mauris dapibus commodo eu quis ligula. Nulla hendrerit, turpis in semper rhoncus, est dui accumsan augue, id iaculis metus augue vel urna",
      likes: "",
      comments: "",
    },
  ];
  return (
    <div className={style.main}>
      {blogData.map((item) => (
        <div className={style.main}>
          <div className={style.blog_img_box}>
            <img src={item.img} alt="blog" />
          </div>
          <div>
            <p>{item.author}</p> -<p>{item.date}</p>
          </div>
          <div>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
          </div>
          <div>
            <p>READ MORE →</p>
            <ul>
              <li>f</li>
              <li>in</li>
              <li>in</li>
              <li>in</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogPageSecondSection;
