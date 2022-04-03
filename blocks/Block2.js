import React from "react";
import Image from "next/image";

function Block2() {
  return (
    <div className="flex items-center justify-evenly nb block2 w-screen h-[100vh]">
      <div className="anim  border border-[#401eb2] px-10 text-white flex flex-col justify-evenly w-[95%] lg:w-[75%] h-[800px] lg:h-[57vh] rounded-lg neemble2">
        <div className="anim ">
          <h1 className="text-[5vh]">In 2020</h1>
        </div>
        <div className=" flex lg:flex-row flex-col justify-between items-center">
          <div className=" anim w-[100%] lg:w-[30%]">
            <Image
              className="-z-0"
              src="/images/threeButtons.png"
              width="400"
              height="340"
              layout="responsive"
            ></Image>
          </div>
          <div className="   w-[100%] lg:w-[50%]">
            <p className=" anim  text-md lg:text-[2.90vh]">
              Game-streaming content is one of the biggest web 2.0 assets, but
              the old “charity model” where streamers earn on the goodwill of
              unincentivized viewers has to go...
              <br />
              <br />
              Web 3.0 is all about winning/earning together as a community - and
              we have created a new revolutionary way for both streamers and
              viewers to generate revenue
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Block2;
