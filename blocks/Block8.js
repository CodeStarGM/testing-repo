import React from "react";
import Image from "next/image";
import p1 from "../public/images/p1.png";
import p2 from "../public/images/p2.png";
import p3 from "../public/images/p3.png";
function Block8() {
  return (
    <>
      <div className="flex flex-col items-center justify-center nb block8 w-screen h-[60vh] lg:h-[100vh]">
        <div className=" py-14 w-screen flex lg:flex-row flex-col justify-center items-center ">
          <div className=" anim w-[300px] h-[90px] lg:w-[524px] lg:h-[141px]">
            <Image src={p1} />
          </div>
          <div className=" anim w-[300px] h-[90px] lg:w-[524px] lg:h-[141px]">
            <Image src={p2} />
          </div>
        </div>
        <div className="-ml-14 anim w-[370px] h-[300px] lg:w-[1209px] lg:h-[300px] flex justify-center items-center">
          <Image src={p3} />
        </div>
      </div>
    </>
  );
}

export default Block8;
