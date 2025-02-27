import React from "react";
import { useSelector } from "react-redux";
import { logoutAction } from "../../redux/slices/a.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
function Header() {
  const activeTab = useSelector((state) => state.common.tabName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.auth.user.username);
  const handleOnclick = () => {
    dispatch(logoutAction());
    navigate("/login");
  };
  return (
    <header className="relative">
      <nav className="flex items-center shadow h-14 px-5 bg-white">
        <h1 className="font-bold flex-1 uppercase">{activeTab}</h1>
        <div className="flex-1 "></div>
        <div className="flex-1 flex gap-8 justify-end items-center">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-bell"></i>
          <button onClick={handleOnclick}>
            <i className="fa-solid fa-power-off"></i>
          </button>
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs">{userName}</span>
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
