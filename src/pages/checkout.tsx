import { Head } from "../components/head";

export const CheckoutPage = () => {
  const metaData = {
    title: "ShoppingCart - Checkout",
    description:
      "Gennemfør dit køb på ShoppingCart. Hurtigt og sikkert checkout.",
    keywords: ["checkout", "shopping", "ecommerce", "ShoppingCart"],
    ogTitle: "ShoppingCart - Checkout",
    ogDescription:
      "Gennemfør dit køb på ShoppingCart. Hurtigt og sikkert checkout.",
    ogImage: "/og/shoppingcart.jpg",
    ogUrl: "https://shoppingcartw.netlify.app",
    ogImageWidth: 1200,
    ogImageHeight: 630,
  };

  return (
    <>
      <Head metaData={metaData} />
      <div className="container mx-auto">
        <h2>Checkout Page</h2>
      </div>
    </>
  );
};
