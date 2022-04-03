import React from "react";
import Image from "next/image";
function Block5() {
  return (
    <>
      <div className="flex lg:flex-row flex-col-reverse items-center justify-evenly nb block5 w-screen h-[140vh] lg:h-[100vh]">
        <div className="anim flex justify-center items-center w-[90%] h-[300px] lg:w-[40%] lg:h-[76vh] ">
          {/* <Image className="-z-0" src={teams}></Image> */}
          <video autoPlay loop id="vid" muted>
            <source src="/last.webm" />
          </video>
        </div>

        {/* second hand */}
        <div className="anim px-10 border-2 border-[#2491ba] text-white flex flex-col w-[95%] h-[540px] lg:w-[43%] lg:h-[64vh] rounded-lg neemble2">
          <h1 className="anim pt-[8%] text-3xl  lg:text-[5vh]  ">
            Introducing Team Streams
          </h1>
          <div className="anim w-[100%] lg:w-[90%]  flex flex-col items-center justify-evenly h-56">
            <div className="leading-[114%]	 pt-[25%] text-sm lg:text-[2.32vh]">
              <p className="pt-[7%]">
                This has never been done. Even though most of the popular
                streamed games are multiplayer games that might have multiple
                streamers
              </p>
              <p className="pt-[7%]">
                Team Streams let you access a connected stream between 2 or more
                streamers
              </p>
              <p className="pt-[7%]">
                Your favorite streamers could team stream on one live-feed, and
                our streaming platform will let you truly-immerse into the
                team-play experience
              </p>
              <p className="pt-[7%]">
                Your favorite esports teams can stream their practice games with
                voice or webcameras on giving you new, uncharted experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Block5;
