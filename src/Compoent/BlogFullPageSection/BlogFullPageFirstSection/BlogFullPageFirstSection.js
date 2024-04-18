import React, { useState, useEffect } from "react";
import style from "./BlogFullPageFirstSection.module.css";
import blog1 from "../../Images/image-007.png";
import blog2 from "../../Images/image-009.png";
import { useParams } from "react-router-dom";

function BlogFullPageFirstSection() {
  const [scrollPosition, setScrollPosition] = useState(0);

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

  // Filter the blog data based on the ID fetched from the URL
  const selectedBlog = blogData.find((blog) => blog._id.toString() === id);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={style.main}>
      <div
        className={style.background}
        style={{ transform: `translateY(-${scrollPosition * 0.2}px)` }} // Adjust the speed here
      >
        <img src={selectedBlog.img} alt="bg" className={style.bgImage} />
      </div>
      <div
        className={style.content}
        style={{ transform: `translateY(-${scrollPosition * 0.2}px)` }} // Adjust the speed here
      >
        <div className={style.description_box}>
          <h2>BLOG - SINGLE</h2>
        </div>
      </div>
    </div>
  );
}

export default BlogFullPageFirstSection;
