import React from 'react'
import style from "./SectionEight.module.css"
import banner1 from "../../Images/portrait-smiling-mature-senior-woman-holding-glass-wine-while-using-laptop-kitchen-table-freelance-working-home-concept.jpg"
import banner2 from "../../Images/glass-wine-old-table-with-vineyard-background.jpg"
import blog1 from "../../Images/image-007.png";
import blog2 from "../../Images/image-009.png";
import dp from "../../Images/image-010.png";

function SectionEight() {
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
      <h2>B L O G S</h2>
      <div className={style.container}>
       <a href={`/Blog/${blogData[0]._id}`}> <div className={style.img_box}>
           <img src={blogData[0].img}alt='banner'/>
        </div>
        </a>
        <a href={`/Blog/${blogData[1]._id}`}>
        <div className={style.img_box}>
        <img className={style.demo_hide} src={blogData[1].img}alt='banner'/>
        </div>
        </a>
      </div>
    </div>
  )
}

export default SectionEight
