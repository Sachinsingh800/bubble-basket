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

  useEffect(() => {
    handleAllCategory()
}, []);

const handleAllCategory = async () => {
  try {
    const response = await getAllCategory();
    setCategoryData(response?.data)
  } catch (error) {
    console.error("Error in handleAllCategory function:", error);
  }
};
  

  const handleChange = (event) => {
    setCategory(event.target.value);
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
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={category}
                onChange={handleChange}
                label="category"
                 style={{ color: "maroon", fontWeight: 700,fontFamily:"Jost" }}
              >
                {categoryData?.map((item, index) => (
                  <MenuItem key={index} value={item?.categoryName}>
                    {item?.categoryName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <h6>Usu ad illum petentium error feugait</h6>
        </div>
        <div className={style.container}>
          <div className={style.input_container}>
            <p>GIFT BY BRAND</p>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={category}
                onChange={handleChange}
                label="category"
                 style={{ color: "maroon", fontWeight: 700,fontFamily:"Jost" }}
              >
                {categoryData?.map((item, index) => (
                  <MenuItem key={index} value={item?.categoryName}>
                    {item?.categoryName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <h6>Magna harum probatus ex eam mea</h6>
        </div>
        <div className={style.container}>
          <div className={style.input_container}>
            <p>SHOP BY LUXURY</p>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={category}
                onChange={handleChange}
                label="category"
                style={{ color: "maroon", fontWeight: 700,fontFamily:"Jost" }}
              >
                {categoryData?.map((item, index) => (
                  <MenuItem key={index} value={item?.categoryName}>
                    {item?.categoryName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <h6>Ne possit suavitate pri sint erroribus</h6>
        </div>
        <div className={style.container}>
          <div className={style.input_container}>
            <p>GIFT BY ORIGIN</p>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={category}
                onChange={handleChange}
                label="Category"
                 style={{ color: "maroon", fontWeight: 700,fontFamily:"Jost" }}
              >
                {categoryData?.map((item, index) => (
                  <MenuItem key={index} value={item?.categoryName}>
                    {item?.categoryName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <h6>Dicant habemus definitionem sed ei elit</h6>
        </div>
      </div>
    </div>
  );
}

export default SectionFifth;
