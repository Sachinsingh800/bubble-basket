import React, { useEffect, useState } from "react";
import style from "./SectionFifth.module.css";
import drum from "../../Images/drum.png";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

function SectionFifth() {
  const [category, setCategory] = useState("");
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    getAllCategory()
  }, []);
  
  const getAllCategory = async () => {
    // Function to retrieve token from cookies
    // Function to retrieve token from cookies
    function getToken() {
      return document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
    }
  
    // Retrieve token
    const token = getToken();
  
    try {
      const headers = {
        "x-auth-token": token, // Pass the token in the header
        "Content-Type": "application/json", // Set content type to JSON
      };
      const response = await axios.get(
        `https://wine-rnlq.onrender.com/admin/category/getAll`,
        {
          headers,
        }
      );
  
      const { status, message, data } = response.data;
      if (status) {
        console.log(data, "data aaa raha");
  
        setCategoryData(data);
      }
  
      // Handle response data as needed
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Axios error (HTTP error)
        const { response } = error;
        // Set the error message
        const errorMessage = response.data.message;
        // alert(errorMessage);
        // Log the error message as a string
        localStorage.setItem("allAdress", JSON.stringify([]));
        // alert(errorMessage);
        console.error("Axios Error:", errorMessage);
        // window.location.href = "/Login";
      } else {
        // Network error (e.g., no internet connection)
        // alert("Something went wrong");
        console.error("Network Error:", error.message);
      }
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
