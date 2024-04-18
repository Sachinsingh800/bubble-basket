import React from 'react'
import style from "./BlogPageSecondSection.module.css"

function BlogPageSecondSection() {
    const blogData=
    [
      {
        img:"",
        author:"John Wilson",
        date:"July 2, 2020",
        title:"CORPORATE BULK ORDER",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ac purus sed luctus. Proin pretium pharetra sagittis. Pellentesque sit amet semper urna. Aenean quis leo sed ex consequat faucibus. Quisque felis diam, suscipit vel mauris sit amet, gravida lacinia orci. Ut quis mauris nec mauris dapibus commodo eu quis ligula. Nulla hendrerit, turpis in semper rhoncus, est dui accumsan augue, id iaculis metus augue vel urna",
        likes:"",
        comments:""
      },
      {
        img:"",
        author:"Mohan Nilson",
        date:"July 2, 2020",
        title:"THE HEADLINE HERE",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ac purus sed luctus. Proin pretium pharetra sagittis. Pellentesque sit amet semper urna. Aenean quis leo sed ex consequat faucibus. Quisque felis diam, suscipit vel mauris sit amet, gravida lacinia orci. Ut quis mauris nec mauris dapibus commodo eu quis ligula. Nulla hendrerit, turpis in semper rhoncus, est dui accumsan augue, id iaculis metus augue vel urna",
        likes:"",
        comments:""
      },
    ]
  return (
    <div className={style.main}>
      blog
    </div>
  )
}

export default BlogPageSecondSection
