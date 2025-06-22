import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Banner from "./Banner";
import Subscribe from "@/components/Home/Subscribe";
const Layout = () => {
  return (
    <>
      <Banner />
      <main>
        <Outlet />
      </main>
      <Subscribe />
      <Footer />
    </>
  );
};

export default Layout;
