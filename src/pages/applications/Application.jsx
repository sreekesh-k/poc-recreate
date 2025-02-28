import React from "react";
import Card from "../../components/applications/card/Card";

function Application() {
  const data = [
    {
      imageUrl: "Card_BalancedScorecard",
      title: "MetricsLibrary",
      desc: "Define all metrics for the enterprise ro moniter",
    },
    {
      imageUrl: "Card_Workflows",
      title: "WorkFlow Designer",
      desc: "Design custom review approval workflows for events , incidents and other risk and compliance occurrences",
    },
    {
      imageUrl: "Card_ActionMaster",
      title: "Action Master",
      desc: "Design custom review approval workflows for events , incidents and other risk and compliance occurrences",
    },
    {
      imageUrl: "Card_ActionMaster",
      title: "Vendor Master",
      desc: "Define Vendor Details",
    },
    {
      imageUrl: "Card_RiskRegistry",
      title: "BIA Master",
      desc: "Define BIA Details",
    },
    {
      imageUrl: "Card_DashboardDesigner",
      title: "BIA Master",
      desc: "Define BIA Detaiks",
    },

    {
      imageUrl: "Card_DashboardDesigner",
      title: "Dashboard Designer",
      desc: "Design interactive dashboards for 360 degree analysis",
    },
  ];
  return (
    <main className=" flex w-full px-15 pt-10 mb-10">
      <section className="grid grid-cols-5 flex-col items-center h-full w-full gap-4 flex-wrap">
        {data.map((item, index) => (
          <Card
            key={index}
            imageUrl={item.imageUrl}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </section>
    </main>
  );
}

export default Application;
