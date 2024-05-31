import React, { useEffect, useState } from "react";
import style from "./SectionFifth.module.css";
import drum from "../../Images/drum.png";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { getAllCategory } from "../../Apis/Apis";

function SectionFifth() {
  const [category, setCategory] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [brand, setBrand] = useState("");
  const [brandData, setBrandData] = useState([
    { categoryName: "Caymus" },
    { categoryName: "Opus One" },
    { categoryName: "Penfolds Bin" },
    { categoryName: "Silver Oak" },
    { categoryName: "Bond Wine" },
  ]);
  const [luxury, setLuxury] = useState("");
  const [luxuryData, setLuxuryData] = useState([
    { categoryName: "Caymus" },
    { categoryName: "Opus One" },
    { categoryName: "Penfolds Bin" },
    { categoryName: "Silver Oak" },
    { categoryName: "Bond Wine" },
  ]);
  const [origin, setOrigin] = useState("");
  const [originData, setOriginData] = useState([
    { categoryName: "Caymus" },
    { categoryName: "Opus One" },
    { categoryName: "Penfolds Bin" },
    { categoryName: "Silver Oak" },
    { categoryName: "Bond Wine" },
  ]);

  useEffect(() => {
    handleAllCategory();
  }, []);

  const handleAllCategory = async () => {
    try {
      const response = await getAllCategory();
      setCategoryData(response?.data);
    } catch (error) {
      console.error("Error in handleAllCategory function:", error);
    }
  };
  const handleNavigate = (categoryName) => {
    window.location.href = `/${categoryName}`;
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
                style={{ color: "maroon", fontWeight: 700, fontFamily: "Jost" }}
              >
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
                style={{ color: "maroon", fontWeight: 700, fontFamily: "Jost" }}
              >
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
          <h6>Celebrate with the finest selections from renowned brands.</h6>
        </div>
        <div className={style.container}>
          <div className={style.input_container}>
            <p>SHOP BY LUXURY</p>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
              <Select
                value={luxury}
                onChange={(e) => setLuxury(e.target.value)}
                style={{ color: "maroon", fontWeight: 700, fontFamily: "Jost" }}
              >
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
            Premium wines & champagne, crafted for the ultimate celebration.
          </h6>
        </div>
        <div className={style.container}>
          <div className={style.input_container}>
            <p>GIFT BY ORIGIN</p>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
              <Select
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                style={{ color: "maroon", fontWeight: 700, fontFamily: "Jost" }}
              >
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
          <h6>Embody the rich heritage and craftsmanship by origins.</h6>
        </div>
      </div>
    </div>
  );
}

export default SectionFifth;
