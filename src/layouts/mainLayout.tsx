import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { Analytics } from "../utils/analytics";
import { Toaster } from "../components/ui/sonner";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Toaster />
      <Analytics />
    </>
  );
};
