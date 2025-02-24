import React, { useState } from "react";
import Icon from "../icons/Icon";

function Sidebar() {
  const [active, setActive] = useState("#ff9129");
  return (
    <aside className=" w-18 relative text-white shadow-2xl">
      <div className="  h-[100svh] bg-[#0a4975] shadow-2xl">
        <div className=" bg-orange h-14 font-black tracking-wide items-center justify-center flex text-center  bg-[#ff9129] text-[.6rem]">
          RISK
          <br />
          CENTRAL
        </div>
        <nav className=" flex-col items-center gap-4 text-[.57rem]  w-full h-full flex py-5 text-center">
          <a
            href="#"
            className={` flex items-center justify-center gap-[.175rem] flex-col text-[#ff9129]`}
          >
            <Icon name="Home" color={active} />
            Home
          </a>
          <a
            href="#"
            className=" flex items-center justify-center gap-[.175rem] flex-col"
          >
            <Icon name="Dashboard" />
            Dashboards
          </a>
          <a
            href="#"
            className=" flex items-center justify-center gap-[.175rem] flex-col"
          >
            <Icon name="ActionCenter" />
            Action <br />
            Center
          </a>
          <a
            href="#"
            className=" flex items-center justify-center gap-[.175rem] flex-col"
          >
            <Icon name="TemplateHub" />
            Template <br /> Hub
          </a>
          <a
            href="#"
            className=" flex items-center justify-center gap-[.175rem] flex-col"
          >
            <Icon name="Applications" />
            Applications
          </a>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
