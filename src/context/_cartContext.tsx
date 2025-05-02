import { createContext } from "react";
import { ProductElement } from "../types/product.types";

export const CartContext = createContext({
  cartData: [] as Array<ProductElement>,
  setCartData: (productArr: ProductElement[]) => {},
  addToCart: (productID: ProductElement) => {},
  removeFromCart: (productID: number) => {},
  clearCart: () => {},
});
