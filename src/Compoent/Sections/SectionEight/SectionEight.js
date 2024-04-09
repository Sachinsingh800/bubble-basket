import React from 'react'
import style from "./SectionEight.module.css"
import banner1 from "../../Images/portrait-smiling-mature-senior-woman-holding-glass-wine-while-using-laptop-kitchen-table-freelance-working-home-concept.jpg"
import banner2 from "../../Images/glass-wine-old-table-with-vineyard-background.jpg"

function SectionEight() {
  return (
    <div className={style.main}>
      <h2>B L O G S</h2>
      <div className={style.container}>
        <div className={style.img_box}>
           <img src={banner1}alt='banner'/>
        </div>
        <div className={style.img_box}>
        <img src={banner2}alt='banner'/>
        </div>
      </div>
    </div>
  )
}

export default SectionEight
