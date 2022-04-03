import React from "react";

function Block7() {
  return (
    <>
      <div className="flex lg:flex-row flex-col-reverse items-center justify-evenly nb block7 w-screen h-[120vh] lg:h-[100vh]">
        <div className="anim px-14 border-2 border-[#2491ba] text-white flex flex-col w-[95%] h-[400px] lg:w-[44%] lg:h-[50vh] rounded-lg neemble2">
          <h1 className="anim py-[7%] text-3xl lg:text-[5vh]">Neemble Clips</h1>
          <div className="flex flex-col  justify-evenly h-56">
            <h2 className="leading-[114%] anim text-sm lg:text-[2.70vh]">
              0-120 second Horrizontal Tik-Tok Like Clips .
              <br />
              <br />
              Swipe up to see the next clip, explore trending moments, meme
              moments, amazing highlighted plays in a short video-form content
              <br />
              <br />
              Deiscover new up and coming streamers.
            </h2>
          </div>
        </div>
        <div className="anim flex justify-center items-center w-[90%] h-[300px] lg:w-[746px] lg:h-[540px] ">
          <video autoPlay loop id="vid" muted>
            <source src="/last1.webm" />
          </video>
        </div>
      </div>
    </>
  );
}

export default Block7;
