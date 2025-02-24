import React from "react";

function Card({ color, title, desc }) {
  return (
    <div className="overflow-hidden relative w-full flex px-5  py-4 gap-10 flex-col h-40 rounded-xl shadow-sm bg-white text-black">
      <div
        className="absolute left-0 top-0 h-full w-2"
        style={{ backgroundColor: color }}
      ></div>
      <span className=" absolute right-2 top-2 ">
        <i className="fa-solid fa-star"></i>
      </span>
      <span className="  text-gray-700 font-bold">{title}</span>
      <p className="text-sm ">{desc}</p>
    </div>
  );
}

export default Card;
