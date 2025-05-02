import { ReactNode, useEffect, useState } from "react";
import { ProductElement } from "../types/product.types";
import { CartContext } from "./_cartContext";

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartData, setCartData] = useState<Array<ProductElement>>([]);

  useEffect(() => {
    // DEBUG: Console cartData
    console.log("CartData: ", cartData);
  }, [cartData]);

  const addToCart = (product: ProductElement) => {
    const productWithQuantity = { ...product, quantity: 1 };
    const clone = [...cartData];

    if (cartData.find((item) => item.id === product.id)) {
      console.log("Item already exists in cart");
      const index = cartData.findIndex((item) => item.id === product.id);
      if (clone[index].quantity) {
        clone[index].quantity += 1;
      }
      setCartData(clone);
      return;
    } else {
      clone.push(productWithQuantity);
      setCartData(clone);
    }
  };

  const removeFromCart = (productID: number) => {
    const clone = [...cartData];
    if (cartData.find((item) => item.id === productID)) {
      const index = cartData.findIndex((item) => item.id === productID);
      if (clone[index].quantity) {
        clone[index].quantity -= 1;
        if (clone[index].quantity <= 0) {
          clone.splice(index, 1);
        }
      }

      console.log("Updated cart: ", clone);
      setCartData(clone);
      return;
    }
  };

  const clearCart = () => {
    setCartData([]);
  };

  return (
    <CartContext.Provider
      value={{ cartData, setCartData, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
