import React from 'react'
import style from "./FirstSection.module.css"
import HomePageCarousel from '../../HomePageCarousel/HomePageCarousel'
import AnchorTemporaryDrawer from '../../AnchorTemporaryDrawer/AnchorTemporaryDrawer'


function FirstSection() {
  return (
    <div className={style.main}>
      <HomePageCarousel />
    </div>
  )
}

export default FirstSection
