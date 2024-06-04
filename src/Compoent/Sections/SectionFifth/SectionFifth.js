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
  const [brand, setBrand] = useState("");
  const [brandData, setBrandData] = useState([
    { categoryName: "Caymus" },
    { categoryName: "Dom Perignon" },
    { categoryName: "Moet &amp; Chandon" },
    { categoryName: "Veuve Clicquot" },
  ]);
  const [luxury, setLuxury] = useState("");
  const [luxuryData, setLuxuryData] = useState([
    { categoryName: "TIFFANY WINE" },
    { categoryName: "TIFFANY CHAMPAGNE" },
  ]);
  const [origin, setOrigin] = useState("");
  const [originData, setOriginData] = useState([
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

  const handleNavigate = (categoryName) => {
    window.location.href = `/${categoryName}`;
  };
  const handleNavigateBrand = (categoryName) => {
    window.location.href = `brand/${categoryName}`;
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
                  >
                    {item?.categoryName}
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
            <p>GIFT BY BRAND</p>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
              <Select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                displayEmpty
                style={{ color: "maroon", fontWeight: 700, fontFamily: "Jost" }}
              >
                <MenuItem value="" disabled>
                  Select Brand
                </MenuItem>
                {brandData?.map((item, index) => (
                  <MenuItem
                    key={index}
                    value={item?.categoryName}
                    className={style.menu_item}
                    onClick={() => handleNavigateBrand(item?.categoryName)}
                  >
                    {item?.categoryName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <h6>Celebrate with the finest selections from renowned brands.</h6>
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
                  >
                    {item?.categoryName}
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
            <p>GIFT BY OCCASION</p>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
              <Select
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                displayEmpty
                style={{ color: "maroon", fontWeight: 700, fontFamily: "Jost" }}
              >
                <MenuItem value="" disabled>
                  Select Occasion
                </MenuItem>
                {originData?.map((item, index) => (
                  <MenuItem
                    key={index}
                    value={item?.categoryName}
                    className={style.menu_item}
                    onClick={() => handleNavigate(item?.categoryName)}
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
