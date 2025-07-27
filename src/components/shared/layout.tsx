import React, { useState } from "react";
import "../../styles/components/layout.scss";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className={"layout"}>
      <Navbar onToggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className={"mainContent"}>
        <div className={"children"}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
