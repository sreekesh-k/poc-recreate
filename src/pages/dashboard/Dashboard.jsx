import React from "react";
import Card from "../../components/dashboard/card/Card";

function Dashboard() {
  const data = [
    {
      imageUrl: "colorband7",
      title: "Kri Rating_Monthly",
      desc: "Kri Rating_Monthly",
    },
    {
      imageUrl: "colorband2",
      title: "Kri Value Upload",
      desc: "Download template to upload monthly",
    },
    {
      imageUrl: "colorband10",
      title: "Kri Value Upload",
      desc: "Download template to upload monthly",
    },
    {
      imageUrl: "colorband8",
      title: "Kri Rating Quarterly",
      desc: "Kri Rating Quarterly",
    },
    {
      imageUrl: "colorband5",
      title: "Kri History",
      desc: "view history of KRI",
    },
    {
      imageUrl: "colorband11",
      title: "BIA Dashboard",
      desc: "incase of item is empty you will see this text",
    },
    {
      imageUrl: "colorband3",
      title: "BIA History",
      desc: "incase of item is empty you will see this text",
    },
    {
      imageUrl: "colorband1",
      title: "BCP History",
      desc: "incase of item is empty you will see this text",
    },
    {
      imageUrl: "colorband4",
      title: "BCP Document",
      desc: "BCP Document department",
    },
    {
      imageUrl: "colorband6",
      title: "BCP Testing",
      desc: "incase of item is empty you will see this text",
    },
    {
      imageUrl: "colorband",
      title: "BCP Document (Branch)",
      desc: "BCP Document (branch)",
    },
    {
      imageUrl: "colorband7",
      title: "BCP Document Consolidated",
      desc: "BCP Document Consolidated",
    },
    {
      imageUrl: "colorband2",
      title: "BCP Dashboard",
      desc: "BCP Dashboard download",
    },
    {
      imageUrl: "colorband10",
      title: "Vendor History",
      desc: "Vendor History",
    },
    {
      imageUrl: "colorband8",
      title: "Vendor Master",
      desc: "incase of item is empty you will see this text",
    },
  ];
  return (
    <>
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
    </>
  );
}

export default Dashboard;
