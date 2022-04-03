import React from "react";
import Image from "next/image";
import google from "../public/images/google.png";
import apple from "../public/images/apple-store.png";
import promo from "../public/images/twins.png";
function Block6() {
  return (
    <>
      <div className="flex lg:flex-row flex-col items-center justify-evenly nb block6 w-screen  h-[100vh]">
        <div className=" anim flex justify-center items-center w-[95%] lg:w-[40%] lg:h-[85%]">
          <Image className="-z-0" src={promo}></Image>
        </div>

        <div className="anim border-2 border-[#2491ba] px-10 text-white flex flex-col w-[95%] h-[400px] lg:w-[45%] lg:h-[57vh] rounded-lg neemble2">
          <h1 className="anim py-7 lg:py-[7%] pt-10 text-3xl lg:text-[5vh] ">
            IOS and Android Mobile Apps
          </h1>
          <div className="flex flex-col items-center justify-evenly h-56">
            <h2 className="leading-[114%] anim py-[6%] text-sm lg:text-[2.70vh]">
              Neemble is a PC and Mobile first platform
              <br />
              <br />
              We want mobile users to have access to everything neemble platform
              has to offer.
              <br />
              <br />
              Mobile streaming platform will be released with Neemble Beta
              release
            </h2>
            <div className=" flex justify-evenly items-center w-full ">
              <div className="anim h-auto lg:w-44 w-28">
                <Image src={apple}></Image>
              </div>
              <div className="anim h-auto lg:w-44 w-28">
                <Image src={google}></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Block6;
