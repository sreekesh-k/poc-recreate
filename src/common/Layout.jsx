import React from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";
function Layout({ children }) {
  return (
    <>
      <div className=" flex">
        <Sidebar />
        <div className="flex-col flex w-full">
          <Header />
          <div className="relative h-[calc(100svh-3.5rem)] overflow-x-hidden overflow-y-scroll bg-gray-100">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
