import { createContext } from "react";
import { ProductElement } from "../types/product.types";

export const CartContext = createContext({
  cartData: [] as Array<ProductElement>,
  setCartData: (productArr: ProductElement[]) => {
    console.log("productArr", productArr);
  },
  addToCart: (productID: ProductElement) => {
    console.log("productID", productID);
  },
  removeFromCart: (productID: number) => {
    console.log("productID", productID);
  },
  clearCart: () => {},
});
