import React from "react";
import Image from "next/image";

function Team({ tImage, tName, tTitle, tBio }) {
  return (
    <>
      <div className=" neembleTeam team rounded-xl md:h-48 md:w-[26rem] h-[22vh] w-[23%] flex justify-center items-center ">
        <div className="px-4 w-2/5">
          <Image width={140} height={140} src={tImage} placeholder="blur" />
        </div>
        <div className="w-3/5 ">
          <h1 className="sm:text-red-400 xl:text-white text-2xl">{tName}</h1>
          <h2 className="pb-2 text-white text-lg">{tTitle}</h2>
          <p className="text-white text-sm">{tBio}</p>
        </div>
      </div>
    </>
  );
}

export default Team;
