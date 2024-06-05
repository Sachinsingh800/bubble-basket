import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import style from "./HumBurger.module.css";
import menuicon from "../Images/menu.png";
import CloseIcon from "@mui/icons-material/Close";
import bulkOrderForm from "../BulkOrderForm/bulkOrderForm.xlsx";

export default function HumBurger() {
  const [state, setState] = React.useState({
    right: false,
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
        width: 300,
      }}
      role="presentation"
    >
      <List>
        <button
          className={style.closebtn}
          onClick={toggleDrawer("right", false)}
        >
          <CloseIcon />
        </button>
        <div className={style.list}>
          <a href="/">
            <p>Home</p>
          </a>
          <p onClick={downloadExcel}>Bulk Order</p>
          <a href="/OrderHistory">
            <p>Track Order</p>
          </a>
        </div>
      </List>
    </Box>
  );

  return (
    <div className={style.main}>
      <Box
        className={style.btn}
        onClick={toggleDrawer("right", true)}
        sx={{
          top: 200,
          right: state.right ? 260 : 0,
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
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {list}
      </Drawer>
    </div>
  );
}
