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
    <div className="overflow-hidden relative w-full flex hover:shadow-2xl h-62 items-center justify-center rounded-md shadow-sm bg-white text-black">
      <div className="h-1/2 w-full absolute top-5 left-0 px-3">
        <img
          src={images[imageUrl]}
          alt="band"
          className="object-contain h-full w-full absolute top-0 left-0 "
        />
      </div>
      <div className="flex flex-col gap-8 p-4 flex-1 z-10 h-full">
        <div className="flex-1 w-full overflow-hidden flex items-end ">
          <span className="text-gray-700 font-bold">{title}</span>
        </div>
        <div className=" flex-1 overflow-hidden w-full items-center flex">
          <p className="text-xs">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
