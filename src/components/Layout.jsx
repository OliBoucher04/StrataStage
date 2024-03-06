import { Outlet } from "react-router-dom";
import React from "react";
import BarreMenu from './BarreMenu'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className="flex justify-center flex-col">
        <BarreMenu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
