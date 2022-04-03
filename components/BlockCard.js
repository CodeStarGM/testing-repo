import React from "react";

function BlockCard({ name }) {
  return (
    <div className="flex justify-center  rounded-md items-center w-[13vw] h-[8vh] bg-[#394072] hover:bg-[#2b2f55]">
      <h1 className="text-center text-[2.70vh]">{name}</h1>
    </div>
  );
}

export default BlockCard;
