import React from "react";
import Card from "../../components/dashboard/card/Card";

function Dashboard() {
  const data = [
    {
      color: "#5a4da3",
      title: "Kri Rating_Monthly",
      desc: "Kri Rating_Monthly",
    },
    {
      color: "green",
      title: "Kri Value Upload",
      desc: "Download template to upload monthly",
    },
    {
      color: "#5a4da3",
      title: "Kri Value Upload",
      desc: "Download template to upload monthly",
    },
    {
      color: "orange",
      title: "Kri Rating Quarterly",
      desc: "Kri Rating Quarterly",
    },
    {
      color: "Green",
      title: "Kri History",
      desc: "view history of KRI",
    },
    {
      color: "red",
      title: "BIA Dashboard",
      desc: "incase of item is empty you will see this text",
    },
    {
      color: "red",
      title: "BIA History",
      desc: "incase of item is empty you will see this text",
    },
    {
      color: "blue",
      title: "BCP History",
      desc: "incase of item is empty you will see this text",
    },
    {
      color: "#5a4da3",
      title: "BCP Document",
      desc: "BCP Document department",
    },
    {
      color: "lightblue",
      title: "BCP Testing",
      desc: "incase of item is empty you will see this text",
    },
    {
      color: "orange",
      title: "BCP Document (Branch)",
      desc: "BCP Document (branch)",
    },
    {
      color: "#5a4da3",
      title: "BCP Document Consolidated",
      desc: "BCP Document Consolidated",
    },
    {
      color: "Green",
      title: "BCP Dashboard",
      desc: "BCP Dashboard download",
    },
    {
      color: "#5a4da3",
      title: "Vendor History",
      desc: "Vendor History",
    },
    {
      color: "orange",
      title: "Vendor Master",
      desc: "incase of item is empty you will see this text",
    },
  ];
  return (
    <>
      <main className=" flex w-full px-10 pt-8 mb-10">
        <section className="grid grid-cols-5 flex-col items-center h-full w-full gap-4 flex-wrap">
          {data.map((item, index) => (
            <Card
              key={index}
              color={item.color}
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
