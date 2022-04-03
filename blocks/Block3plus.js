import React from "react";
import Image from "next/image";

import Card from "../public/images/plusCard.png";
function Block3plus() {
  return (
    <>
      <div
        className="flex lg:flex-row flex-col-reverse items-center justify-evenly nb block3 w-screen h-[164vh] lg:h-[100vh]"
      >
        <div className=" anim px-10 border-2 border-[#2491ba] neemble2 text-white flex flex-col justify-evenly lg:justify-start w-[95%] h-[500px] lg:w-[41%] lg:h-[46vh] rounded-lg ">
          <div className=" w-[95%] lg:w-[90%] flex flex-col items-center justify-evenly h-56">
            <h2 className=" pt-[20%] anim text-[15px] lg:text-[2.30vh]">
                The traditional Charity/Donations + ADs + Subs model benefits
                the platform first, the streamer second, and does nothing for
                the viewer
            </h2>
            <h2 className=" pt-[10%] anim text-[15px] lg:text-[2.70vh]">
              Instead, neemble turns every streamer into a creative asset and
              let’s anyone own a piece of it, and earn with the streamer,
              instead of donating to them
            </h2>
          </div>
        </div>

        {/* second one */}

        <div className=" anim  text-white flex flex-col justify-between lg:justify-start w-[95%] h-[500px] lg:w-[48%] lg:h-[46vh] rounded-lg ">
          <div className="flex  items-center justify-evenly  w-full h-[70%]">
            <div>
              <Image src={Card} width={300} height={180}></Image>
            </div>
            <div>
              <Image src="/lago.gif" width={160} height={150}></Image>
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-[30%]">
            <div className="flex text-center justify-center items-center anim border-2 border-[#2491ba] neemble2 text-white w-[95%] h-[500px] lg:w-[95%] lg:h-[12vh] rounded-sm ">
              <h1 className="text-[2.70vh]">
                Introducing Steamer Tokens and NFT Passes
                <br />
                Your gateway to unlocking cryptocurrency through Web 3 streaming
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Block3plus;
