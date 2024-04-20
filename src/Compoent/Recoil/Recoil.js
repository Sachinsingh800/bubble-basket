import { atom } from "recoil";
import productImage from "../Images/Moet & Chandon Imperial Brut Champagne With 8pc 1.png";

export const cartData = atom({
    key: 'cartData', // unique ID (with respect to other atoms/selectors)
    default: [
        {
          productImg: productImage,
          productName: "Cloudy Bay",
          price: 79.00, // Remove the "$" sign if you want to calculate subtotal dynamically
          quantity: 1,
          subTotal: 79.00, // Remove the "$" sign if you want to calculate subtotal dynamically
        },
        {
          productImg: productImage,
          productName: "Cakebread Cellars",
          price: 199.00, // Remove the "$" sign if you want to calculate subtotal dynamically
          quantity: 1,
          subTotal: 199.00, // Remove the "$" sign if you want to calculate subtotal dynamically
        },
        {
          productImg: productImage,
          productName: "Chimney Rock Stags Leap",
          price: 99.00, // Remove the "$" sign if you want to calculate subtotal dynamically
          quantity: 1,
          subTotal: 99.00, // Remove the "$" sign if you want to calculate subtotal dynamically
        },
    ]
});
