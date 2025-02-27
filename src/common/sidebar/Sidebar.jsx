import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabAction } from "../../redux/slices/CommonSlice";
import Icon from "../icons/Icon";
import { Link } from "react-router-dom";

function Sidebar() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.common.tabName);

  const handleClick = (name) => {
    dispatch(setActiveTabAction(name));
  };

  return (
    <aside className="w-18 relative text-white shadow-2xl">
      <div className="h-[100svh] bg-[#0a4975] shadow-2xl">
        <div className="bg-orange h-14 font-black tracking-wide items-center justify-center flex text-center bg-[#ff9129] text-[.6rem]">
          RISK
          <br />
          CENTRAL
        </div>
        <nav className="flex-col items-center gap-4 text-[.57rem] w-full h-full flex py-5 text-center">
          {[
            { name: "Home", label: "Home", url: "/" },
            { name: "Dashboards", label: "Dashboards", url: "/dashboard" },
            {
              name: "ActionCenter",
              label: "Action Center",
              url: "/actioncenter",
            },
            { name: "TemplateHub", label: "Template Hub", url: "/templatehub" },
            {
              name: "Applications",
              label: "Applications",
              url: "/application",
            },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.url}
              onClick={() => handleClick(item.name)}
              className={`flex items-center justify-center gap-[.175rem] flex-col ${
                activeTab === item.name ? "text-[#ff9129]" : "text-white"
              }`}
            >
              <Icon
                name={item.name}
                color={activeTab === item.name ? "#ff9129" : "currentColor"}
              />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
