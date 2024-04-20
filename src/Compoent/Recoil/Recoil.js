import { atom } from "recoil";
import productImage from "../Images/dom perignon lady gaga rose.png";
import { nanoid } from "nanoid";

export const cartData = atom({
  key: "cartData", // unique ID (with respect to other atoms/selectors)
  default: [
    {
      id: nanoid(),
      productImg: productImage,
      productCategory: "WINE",
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      productName: "Cloudy Bay",
      productRating: 4,
      price: 79.0, // Remove the "$" sign if you want to calculate subtotal dynamically
      quantity: 1,
      subTotal: 79.0, // Remove the "$" sign if you want to calculate subtotal dynamically
    },
    {
      id: nanoid(),
      productImg: productImage,
      productCategory: "WINE",
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      productName: "Cloudy Bay",
      productRating: 4,
      productName: "Cakebread Cellars",
      price: 199.0, // Remove the "$" sign if you want to calculate subtotal dynamically
      quantity: 1,
      subTotal: 199.0, // Remove the "$" sign if you want to calculate subtotal dynamically
    },
    {
      id: nanoid(),
      productImg: productImage,
      productCategory: "WINE",
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      productName: "Cloudy Bay",
      productRating: 4,
      productName: "Chimney Rock Stags Leap",
      price: 99.0, // Remove the "$" sign if you want to calculate subtotal dynamically
      quantity: 1,
      subTotal: 99.0, // Remove the "$" sign if you want to calculate subtotal dynamically
    },
  ],
});
