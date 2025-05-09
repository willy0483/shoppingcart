import { Cart } from "../components/cart";
import { Head } from "../components/head";

export const CartPage = () => {
  const metaData = {
    title: "ShoppingCart - Din kurv",
    description: "Se og administrer dine valgte produkter i din indkøbskurv.",
    keywords: ["cart", "shopping", "ecommerce", "ShoppingCart"],
    ogTitle: "ShoppingCart - Din kurv",
    ogDescription: "Se og administrer dine valgte produkter i din indkøbskurv.",
    ogImage: "/og/shoppingcart.jpg",
    ogUrl: "https://shoppingcartw.netlify.app/cart",
    ogImageWidth: 1200,
    ogImageHeight: 628,
  };

  return (
    <>
      <Head metaData={metaData} />
      <div className="container mx-auto">
        <Cart />
      </div>
    </>
  );
};
