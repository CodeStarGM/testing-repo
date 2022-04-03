import React from "react";
import Image from "next/image";
import passes from "../public/images/passes.png";
import Tfue from "../assets/images/Tfue.png";
import Rubi from "../assets/images/Rubius.png";
import QC from "../assets/images/QC.png";
import Ninja from "../assets/images/Ninja.png";
function Block4() {
  return (
    <>
      <div className="flex lg:flex-row flex-col items-center justify-evenly w-screen lg:h-[100vh] h-[120vh] ">
        <div className="anim border-2 border-[#2491ba] px-10 text-white flex flex-col w-[95%] lg:w-[44%] h-[440px] lg:h-[50vh] rounded-lg neemble2">
          <h1 className="anim py-[5%] text-3xl lg:text-[4vh] ">
            Introducing NFT Subscription Passes
          </h1>
          <div className="  flex flex-col items-center justify-evenly h-56">
            <div className=" anim text-sm lg:text-[2.20vh]">
              <p className="pt-[8%]">
                NFT passes are like your VIP Backstage Tickets into a Steamer’s
                ecosystem.
                <br />
                <br />
                While all streams are free to watch for anyone, NFT Pass holders
                will be eligible for a vast number of rewards, and features.
                <br />
                <br />
                Including - small and big streamer token airdrops, NMBL token
                airdrops, the ability to stake NFT passes and streamer tokens.
                <br />
                <br />
                You can activate rewards, get access to alpha channels, receive
                whitelist spots, and NFT drops from streamers.
                <br />
                <br />
                It’s a way better solution than the current model, where
                subscriptions give you intangible benefits like emoticons and
                badges.
              </p>
            </div>
          </div>
        </div>

        {/* second hand */}
        <div className=" anim flex justify-center items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className=" lg:w-[300px] md:w-[100px] lg:w-[19vw] lg:h-[80%] ">
              <Image src={QC}></Image>
            </div>
            <div className=" lg:w-[300px] md:w-[100px] lg:w-[19vw] lg:h-[80%] ">
              <Image src={Ninja}></Image>
            </div>
            <div className=" lg:w-[300px] md:w-[100px] lg:w-[19vw] lg:h-[80%] ">
              <Image src={Rubi}></Image>
            </div>
            <div className=" lg:w-[300px] md:w-[100px] lg:w-[19vw] lg:h-[80%] ">
              <Image src={Tfue}></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Block4;
