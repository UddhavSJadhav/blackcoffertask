import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import ArrowHead from "../../components/svgs/ArrowHead";

import Menu from "./Menu";
import MenuItem from "./MenuItem";

type Route = {
  path: string;
  text: string;
  isActive: boolean;
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  const routes: Route[] = [
    {
      path: "/",
      text: "Dashboard",
      isActive: location.pathname === "/" || location.pathname === "/dashboard",
    },
  ];
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <aside
      className={`bg-gray-950 border-r border-solid border-r-gray-700 h-[calc(100vh-64px)] fixed top-16 left-0 z-40 w-64 transition-transform -translate-x-full ${
        isSidebarOpen ? "translate-x-0" : "lg:translate-x-0"
      }`}
    >
      <div className="relative lg:hidden">
        <div
          className="absolute top-0 -right-6 cursor-pointer animate-wiggle"
          onClick={toggleSidebar}
        >
          <ArrowHead
            className={`w-6 h-10 ${!isSidebarOpen ? "rotate-180" : "rotate-0"}`}
          />
        </div>
      </div>

      <Menu>
        {routes.map((route, index) => (
          <MenuItem key={index} {...route} />
        ))}
      </Menu>
    </aside>
  );
};

export default Sidebar;
