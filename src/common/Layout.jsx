import React from "react";
import Header from "./header/Header";
import Sidebar from "./header/Sidebar";

function Layout({ children }) {
  return (
    <>
      <div className=" flex">
        <Sidebar />
        <div className="flex-col flex w-full">
          <Header />
          <div className="relative h-[calc(100svh-3.5rem)] overflow-auto">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Layout;
