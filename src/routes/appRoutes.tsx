import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts/mainLayout";
import { HomePage } from "../pages/homePage";
import { CartPage } from "../pages/cartPage";
import { CheckoutPage } from "../pages/checkout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
};
