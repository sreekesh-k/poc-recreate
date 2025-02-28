import React from "react";
import colorband from "../../../assets/dashboards/colorband.png";
import colorband1 from "../../../assets/dashboards/colorband1.png";
import colorband2 from "../../../assets/dashboards/colorband2.png";
import colorband3 from "../../../assets/dashboards/colorband3.png";
import colorband4 from "../../../assets/dashboards/colorband4.png";
import colorband5 from "../../../assets/dashboards/colorband5.png";
import colorband6 from "../../../assets/dashboards/colorband6.png";
import colorband7 from "../../../assets/dashboards/colorband7.png";
import colorband8 from "../../../assets/dashboards/colorband8.png";
import colorband10 from "../../../assets/dashboards/colorband10.png";
import colorband11 from "../../../assets/dashboards/colorband11.png";

const images = {
  colorband,
  colorband1,
  colorband2,
  colorband3,
  colorband4,
  colorband5,
  colorband6,
  colorband7,
  colorband8,
  colorband10,
  colorband11,
};

function Card({ imageUrl, title, desc }) {
  return (
    <div className="overflow-hidden relative w-full flex h-42 rounded-xl shadow-sm bg-white text-black">
      <div className="h-full w-2">
        <img
          src={images[imageUrl]}
          alt="band"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex flex-col gap-8 p-4 flex-1">
        <span className="text-gray-700 font-bold">{title}</span>
        <p className="text-sm">{desc}</p>
      </div>
      <div className="h-full flex w-6 py-2 px-1 opacity-40">
        <i className="fa-solid fa-star"></i>
      </div>
    </div>
  );
}

export default Card;
