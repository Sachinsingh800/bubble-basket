import { atom } from "recoil";
import productImage from "../Images/dom perignon lady gaga rose.png";
import { nanoid } from "nanoid";

export const updateCart = atom({
  key: "updateCart ", // unique ID (with respect to other atoms/selectors)
  default: 0
});
export const addItemCart = atom({
  key: "addItemCart", // unique ID (with respect to other atoms/selectors)
  default: 0
});
