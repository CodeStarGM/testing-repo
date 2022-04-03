import React from "react";
import Image from "next/image";
import NAMES from "../components/BlockCardData";
import BlockCard from "../components/BlockCard";
import Astronaut from "../components/Astronaut";
function Block4_1() {
  return (
    <>
      <div className="flex lg:flex-row flex-col items-center justify-evenly w-screen lg:h-[100vh] h-[120vh] ">
        {/* <div className="anim border-2 border-[#2491ba] px-10 text-white flex flex-col w-[95%] lg:w-[35%] h-[440px] lg:h-[80vh] rounded-lg neemble2">
        
        </div> */}
        <div className="bg-[#1d1d1d]  rounded-md anim w-[95%] lg:w-[45%] h-[440px] lg:h-[70vh] ">
          <Astronaut />
        </div>

        {/* second hand */}
        <div className="anim border-2 border-[#2491ba] text-white flex flex-col  w-[95%] lg:w-[44%] h-[440px] lg:h-[70vh] rounded-lg neemble2">
          <div className="px-8 py-4 w-[100%] h-[40%]">
            <p className="text-[2.70vh]">
              Your Potential - Unlimited.
              <br />
              <br />
              Neemble introduces countless ways that allow streamers and viewers
              to earn and grow as a collective
              <br />
              <br />
              The ceiling? Mars wouldn’t be far away enough!
            </p>
          </div>
          <div className=" flex items-center justify-center w-full h-[65%]">
            <div className="grid grid-cols-3 gap-2">
              {NAMES.map((val) => (
                <BlockCard key={val.name} name={val.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Block4_1;
