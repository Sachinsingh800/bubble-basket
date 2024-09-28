import { atom } from "recoil";


export const updateCart = atom({
  key: "updateCart ", // unique ID (with respect to other atoms/selectors)
  default: 0
});
export const addItemCart = atom({
  key: "addItemCart", // unique ID (with respect to other atoms/selectors)
  default: 0
});

export const activeTabState = atom({
  key: "activeTabState", // unique ID (with respect to other atoms/selectors)
  default: "login"
});
