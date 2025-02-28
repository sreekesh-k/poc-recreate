import React from "react";
import Card_ActionMaster from "../../../assets/applications/Card_ActionMaster.png";
import Card_BalancedScorecard from "../../../assets/applications/Card_BalancedScorecard.png";
import Card_DashboardDesigner from "../../../assets/applications/Card_DashboardDesigner.png";
import Card_RiskRegistry from "../../../assets/applications/Card_RiskRegistry.png";
import Card_Workflows from "../../../assets/applications/Card_Workflows.png";

const images = {
  Card_ActionMaster,
  Card_BalancedScorecard,
  Card_DashboardDesigner,
  Card_RiskRegistry,
  Card_Workflows,
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
