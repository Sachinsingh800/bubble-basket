import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import style from "./HumBurger.module.css";
import menuicon from "../Images/menu.png";


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

  const list = (
    <Box
      sx={{
        width: 250,
      }}
      role="presentation"
    >
      <List>
          <p>Home</p>
          <p>Bulk Order</p>
          <p>Track Order</p>
      </List>
    </Box>
  );

  return (
    <div>
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
