import React from "react";

function Block1() {
  return (
    <div
      id="home"
      className="lg:pt-0 px-4 pt-16 flex lg:flex-row flex-col items-center justify-around lg:justify-evenly nb block1 w-screen lg:h-[100vh] h-[120vh]"
    >
      <div className="px-10 animFirstScreen text-white flex flex-col lg:w-[44%] w-[95%] h-[240px] lg:h-[43vh] bg-new-neemble neemble2 neembleBorder ">
        <h1 className="anim gradientRun py-5 text-[20px] lg:text-[5vh] ">
          Neemble is Streaming 2.0
        </h1>
        <div className="anim  animFirstScreen  flex flex-col items-center justify-evenly h-56">
          <h2 className=" text-[15px] lg:text-[2.50vh]">
            Neemble is a cutting-edge streaming platform powered by Blockchain
            and NFT technologies.
            <br />
            <br />
            Unlocking a game changing new monetization model, steamer-friendly
            guidelines, immersive ad-less content, and enabling true user data
            privacy
          </h2>
          {/* <a
            href="#"
            className=" anim rounded-[4px] text-md lg:text-2xl border-2 px-2 lg:px-8 p-1 lg:p-2 border-[#00A4EF]"
          >
            Lightpaper
          </a> */}
        </div>
      </div>

      <div className="anim flex justify-center animFirstScreen  lg:w-[44%] w-[95%] h-[240px] lg:h-[50vh] ">
        <div className=" lg:w-[100%] w-[337px] h-[350px] lg:h-[450px] ">
          <video autoPlay loop id="vid" muted>
            <source src="/last.webm" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Block1;
