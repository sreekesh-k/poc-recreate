import React from "react";

function Card() {
  return (
    <div className=" flex-1 flex flex-col gap-2  items-center justify-center bg-white shadow-sm py-20">
      <span className=" text-5xl">
        <i className="fa-regular fa-rectangle-list"></i>
      </span>
      <span>List Box</span>
      <span className="text-xs">
        an Error Occured during an <br />
        sattempt to load the data
      </span>
    </div>
  );
}

export default Card;
