import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const activeTab = useSelector((state) => state.common.tabName);

  return (
    <header className="relative">
      <nav className="flex items-center shadow h-14 px-5 bg-white">
        <h1 className="font-bold flex-1 uppercase">{activeTab}</h1>
        <div className="flex-1 "></div>
        <div className="flex-1 flex gap-8 justify-end items-center">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-bell"></i>
          <i className="fa-solid fa-power-off"></i>
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs">suryaPWD</span>
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
