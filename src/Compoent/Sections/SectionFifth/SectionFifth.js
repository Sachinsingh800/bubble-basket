import React, { useState } from "react";
import style from "./SectionFifth.module.css";
import drum from "../../Images/drum.png";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SectionFifth() {
  const [category, setCategory] = useState("");
  const [categoryData, setCategoryData] = useState([
    { categoryName: "WINE" },
    { categoryName: "CHAMPAGNE" },
    { categoryName: "CHOCOLATE" },
    { categoryName: "SPA" },
    { categoryName: "HAND PAINTED" },
    { categoryName: "PERSONALISED" },
  ]);
  const [occasion, setOccasion] = useState("");
  const [occasionData, setOccasionData] = useState([
    { categoryName: "FATHER'S DAY GIFTS" },
    { categoryName: "ANNIVERSARY GIFTS" },
    { categoryName: "BIRTHDAY GIFTS" },
    { categoryName: "HOUSE WARMING GIFTS" },
    { categoryName: "WEDDING GIFTS" },
    { categoryName: "CONGRATULATIONS GIFTS" },
    { categoryName: "GET WELL SOON GIFTS" },
    { categoryName: "THANK YOU GIFTS" },
    { categoryName: "HOLIDAYS GFTS" },
    { categoryName: "CHRISTMAS  GIFTS" },
    { categoryName: "NEW YEAR GIFTS" },
  ]);
  const [luxury, setLuxury] = useState("");
  const [luxuryData, setLuxuryData] = useState([
    { categoryName: "TIFFANY WINE" },
    { categoryName: "TIFFANY CHAMPAGNE" },
  ]);
  const [origin, setOrigin] = useState("");
  const [originData, setOriginData] = useState([
    { categoryName: "AUSTRALIAN WINE GIFTS" },
    { categoryName: "FRENCH WINE  GIFTS" },
    { categoryName: "ITALIAN WINE GIFTS" },
    { categoryName: "NAPA VALLEY GIFTS" },
  ]);

  const handleNavigate = (categoryName) => {
    window.location.href = `/${categoryName}`;
  };

  const menuProps2 = {
    PaperProps: {
      style: {
        maxHeight: 200,
        minHeight: 100,
      },
    },
  };


  const menuProps = {
    PaperProps: {
      style: {
        maxHeight: 200,
        minHeight: 100,
      },
    },
    anchorOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
  };

  return (
    <div className={style.main}>
      <div className={style.img_box}>
        <img src={drum} alt="Drum" />
      </div>
      <div className={style.outer_container}>
        <div className={style.container}>
          <div className={style.input_container}>
            <p>SHOP BY CATEGORY</p>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                displayEmpty
                style={{ color: "maroon", fontWeight: 700, fontFamily: "Jost" }}
                MenuProps={menuProps2}
              >
                <MenuItem value="" disabled>
                  Select Category
                </MenuItem>
                {categoryData?.map((item, index) => (
                  <MenuItem
                    key={index}
                    value={item?.categoryName}
                    className={style.menu_item}
                    onClick={() => handleNavigate(item?.categoryName)}
                    style={{ minHeight: 40 }}
                  >
                    {item?.categoryName} GIFTS
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <h6>
            Savor the perfect pairing, curated by categories for every occasion.
          </h6>
        </div>
        <div className={style.container}>
          <div className={style.input_container}>
            <p>SHOP BY OCCASION</p>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
              <Select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                displayEmpty
                style={{ color: "maroon", fontWeight: 700, fontFamily: "Jost" }}
                MenuProps={menuProps2}
              >
                <MenuItem value="" disabled>
                  Select Occasion
                </MenuItem>
                {occasionData?.map((item, index) => (
                  <MenuItem
                    key={index}
                    value={item?.categoryName}
                    className={style.menu_item}
                    onClick={() => handleNavigate(item?.categoryName)}
                    style={{ minHeight: 40 }}
                  >
                    {item?.categoryName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <h6>Embody the rich heritage and craftsmanship by origins.</h6>
        </div>
        <div className={style.container}>
          <div className={style.input_container}>
            <p>SHOP BY LUXURY</p>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
              <Select
                value={luxury}
                onChange={(e) => setLuxury(e.target.value)}
                displayEmpty
                style={{ color: "maroon", fontWeight: 700, fontFamily: "Jost" }}
                MenuProps={menuProps}
              >
                <MenuItem value="" disabled>
                  Select Luxury
                </MenuItem>
                {luxuryData?.map((item, index) => (
                  <MenuItem
                    key={index}
                    value={item?.categoryName}
                    className={style.menu_item}
                    onClick={() => handleNavigate(item?.categoryName)}
                    style={{ minHeight: 40 }}
                  >
                    {item?.categoryName} GIFTS
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <h6>
            Premium wines & champagne, crafted for the ultimate celebration.
          </h6>
        </div>
        <div className={style.container}>
          <div className={style.input_container}>
            <p>SHOP BY ORIGIN</p>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
              <Select
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                displayEmpty
                style={{ color: "maroon", fontWeight: 700, fontFamily: "Jost" }}
                MenuProps={menuProps}
              >
                <MenuItem value="" disabled>
                  Select Origin
                </MenuItem>
                {originData?.map((item, index) => (
                  <MenuItem
                    key={index}
                    value={item?.categoryName}
                    className={style.menu_item}
                    onClick={() => handleNavigate(item?.categoryName)}
                    style={{ minHeight: 40 }}
                  >
                    {item?.categoryName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <h6>Embody the rich heritage and craftsmanship by origins.</h6>
        </div>
      </div>
    </div>
  );
}

export default SectionFifth;
