import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../common/redux/slice/CommonSlice";
import Icon from "../icons/Icon";

function Sidebar() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.activeTab.tabName);

  const handleClick = (name) => {
    dispatch(setActiveTab(name));
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
            { name: "Home", label: "Home" },
            { name: "Dashboards", label: "Dashboards" },
            { name: "ActionCenter", label: "Action Center" },
            { name: "TemplateHub", label: "Template Hub" },
            { name: "Applications", label: "Applications" },
          ].map((item) => (
            <a
              key={item.name}
              href="#"
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
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
