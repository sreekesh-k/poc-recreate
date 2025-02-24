import React from "react";

function Header() {
  return (
    <header className=" relative w-full">
      <nav className=" fixed top-0 left-0 flex items-center shadow h-14 px-10 w-full">
        <h1 className="font-black flex-1">KRI RATING_MONTHLY</h1>
        <div className="flex-1 "></div>
        <div className="flex-1 flex gap-8 justify-end items-center">
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-bell"></i>
          <i class="fa-solid fa-power-off"></i>
          <div className="flex items-center justify-center gap-2">
            <span className=" text-xs">suryaPWD</span>
            <i class="fa-solid fa-user"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
