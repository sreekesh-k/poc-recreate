import React from "react";
import Card from "../../components/home/card/Card";

function Home() {
  return (
    <>
      <main className=" flex w-full px-10 pt-8 mb-10">
        <section className="flex flex-col items-center h-full w-full gap-2">
          <div className=" bg-white shadow-sm  text-center w-full py-2 px-3">
            <span className=" font-semibold">KRI RATING_MONTHLY</span>
            <span className="float-right">
              <i className="fa-solid fa-upload"></i>
            </span>
          </div>
          <div className="flex item-center justify-between w-full gap-2 text-[#d9534f]">
            <Card />
            <Card />
            <Card />
          </div>

          <div className=" flex items-center flex-col justify-center h-[60svh] w-full text-[#d9534f] bg-white shadow-md">
            <span className=" text-5xl">
              <i className="fa-solid fa-chart-pie"></i>
            </span>
            <span>Pies</span>
            <span className="text-xs">
              an Error Occured during an <br />
              sattempt to load the data
            </span>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
