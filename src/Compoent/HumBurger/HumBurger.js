import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import style from "./HumBurger.module.css";
import menuicon from "../Images/menu.png";
import CloseIcon from "@mui/icons-material/Close";
import bulkOrderForm from "../BulkOrderForm/bulkOrderForm.xlsx";
import NavBarAccordian from "../NavBarAccordian/NavBarAccordian";
import logo from "../Images/logo.jpg";

export default function HumBurger() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const downloadExcel = () => {
    // Path to the Excel file in your project folder
    const excelFilePath = bulkOrderForm;

    fetch(excelFilePath)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Luxury_Bubble_Basket.xlsx");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        alert("Your Bulk Order Form is Downloaded");
      })
      .catch((error) => {
        console.error("Error downloading the Excel file:", error);
      });
  };

  const list = (
    <Box
      sx={{
        width: "auto",
        height: "100%",
      }}
      role="presentation"
    >
      <List>
        <button className={style.closebtn} onClick={toggleDrawer("top", false)}>
          CLOSE
        </button>
        <div className={style.header_box}>
        <a href="/">
        <div className={style.img_box}>
        <img src={logo} alt="logo" />
          </div>
        </a>
     
        </div>
        <br />
        <div className={style.Option_lists}>
          <a href="/">
            <p>HOME</p>
          </a>
          <a>
            <p onClick={downloadExcel}>BULK ORDER</p>
          </a>
          <a href="/OrderHistory">
            <p>TRACK ORDER</p>
          </a>
          <a href="/ContactUs">
            <p>CONTACT</p>
          </a>
        </div>
      </List>
    </Box>
  );

  return (
    <div className={style.main}>
      <Box
        className={style.btn}
        onClick={toggleDrawer("top", true)}
        sx={{
          zIndex: 999,
          backgroundColor: "white",
          color: "black",
        }}
      >
        <div className={style.icon_box4}>
          <img src={menuicon} alt="menu" />
        </div>
      </Box>
      <Drawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer("top", false)}
      >
        {list}
      </Drawer>
    </div>
  );
}
