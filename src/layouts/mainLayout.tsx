import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { Analytics } from "../utils/analytics";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Analytics />
    </>
  );
};
