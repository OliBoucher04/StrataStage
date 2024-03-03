import { Outlet } from "react-router-dom";
import React from "react";
import BarreMenu from './BarreMenu';

const Layout = () => {
  return (
    <div>
        <BarreMenu />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
