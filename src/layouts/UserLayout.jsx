import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import ScrollToTop from "../components/ui/Scroll";

const UsersLayout = () => {
  return (
    <div className="mx-auto">
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default UsersLayout;
