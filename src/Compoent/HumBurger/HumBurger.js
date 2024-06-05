import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useRecoilState } from "recoil";
import { addItemCart } from "../Recoil/Recoil";
import style from "./HumBurger.module.css";
import { getCheckout } from "../Apis/Apis";

export default function HumBurger() {
  const [update, setUpdate] = useRecoilState(addItemCart);
  const [state, setState] = React.useState({
    right: false,
  });
  const [cartItems, setCartItems] = React.useState([]);
  const loginStatus = JSON.parse(localStorage.getItem("isLoggedIn") || false);

  React.useEffect(() => {
    const storedCartItems =
      JSON.parse(sessionStorage.getItem("cartData")) || [];
    setCartItems(storedCartItems);
    if (update) {
      setState({ right: true });
    }
  }, [update]);

  const handleNaviagte = () => {
    if (loginStatus) {
      handleCheckoutOrder();
    } else {
      window.location.href = "/Login";
    }
  };

  const handleCheckoutOrder = async () => {
    try {
      await getCheckout();
    } catch (error) {
      console.log(error);
    } finally {
      setUpdate(update + 1);
    }
  };

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
        {cartItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {loginStatus ? (
                  <img
                    src={item?.Product_image}
                    alt={item?.title}
                    style={{ width: "50px", height: "50px" }}
                  />
                ) : (
                  <img
                    src={item?.productImg[0]?.url}
                    alt={item?.title}
                    style={{ width: "50px", height: "50px" }}
                  />
                )}
              </ListItemIcon>
              {loginStatus ? (
                <ListItemText
                  primary={item?.Product_title}
                  secondary={`$${item?.productTotal}`}
                />
              ) : (
                <ListItemText
                  primary={item?.title}
                  secondary={`$${item?.price}`}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ textAlign: "center", padding: "10px" }}>
        <Button onClick={handleNaviagte} variant="contained" color="primary">
          Checkout
        </Button>
      </Box>
    </Box>
  );

  return (
    <div>
      <Box
        className={style.btn}
        onClick={toggleDrawer("right", true)}
        sx={{
          position: "fixed",
          top: 200,
          right: state.right ? 260 : 0,
          zIndex: 999,
          backgroundColor: "white",
          color: "black",
        }}
      >
        <ShoppingCartIcon />
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
