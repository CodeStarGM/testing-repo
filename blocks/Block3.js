import React from "react";
import Image from "next/image";

import ratirl from "../assets/images/ratirl.png";
import gorgc from "../assets/images/gorgc.png";
import stegi from "../assets/images/stegi.png";
import morty from "../assets/images/morty.png";
function Block3() {
  return (
    <>
      <div
        id="streamer"
        className="flex lg:flex-row flex-col-reverse items-center justify-evenly nb block3 w-screen h-[164vh] lg:h-[100vh]"
      >
        <div className=" anim relative w-[95%] h-[540px] lg:w-[40%] lg:h-[61vh] ">
          <div className="flex flex-col items-center justify-center w-full h-[33%] ">
            <Image src="/lago.gif" width={130} height={120}></Image>
            <Image src={ratirl} width={200} height={50}></Image>
          </div>

          <div className="flex items-center justify-between  lg:px-14 w-full h-[33%] ">
            <div className="flex flex-col items-center justify-center">
              <Image src="/lago.gif" width={130} height={120}></Image>
              <Image src={gorgc} width={200} height={50}></Image>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image src="/lago.gif" width={130} height={120}></Image>
              <Image src={stegi} width={200} height={50}></Image>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full h-[33%]">
            <Image src="/lago.gif" width={130} height={120}></Image>
            <Image src={morty} width={200} height={50}></Image>
          </div>
        </div>

        {/* other hand */}

        <div className=" anim px-10 border-2 border-[#2491ba] neemble2 text-white flex flex-col justify-evenly lg:justify-start w-[95%] h-[500px] lg:w-[41%] lg:h-[55vh] rounded-md ">
          <h1 className="anim py-20 pt-10 text-4xl lg:text-[5vh] ">
            Introducing Streamer Token
          </h1>
          <div className=" lg:w-[90%] flex flex-col items-center justify-evenly h-56">
            <h2 className=" anim text-[15px] lg:text-[2.30vh]">
              Elligible, consistent streamers will be able to mint 11.3 millions
              of their personal streamer tokens and the viewers will be able to
              access streamer tokens on Neebmle-swap
              <br />
              <br />
              Streamer earnings, hours of viewed streams, number of unique
              viewers, followers, and other metrics are used to determine the
              token's utility and worth
              <br />
              <br />
              Support your favorite streamers by purchasing their streamer
              tokens, and share their wins as they grow
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Block3;
