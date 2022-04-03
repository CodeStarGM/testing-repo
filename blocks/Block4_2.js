import React from "react";
import Image from "next/image";
import passes from "../public/images/passes.png";
import Tfue from "../assets/images/Tfue.png";
import Rubi from "../assets/images/Rubius.png";
import QC from "../assets/images/QC.png";
import Ninja from "../assets/images/Ninja.png";
function Block4_2() {
  return (
    <>
      <div className="flex lg:flex-row flex-col items-center justify-evenly w-screen lg:h-[100vh] h-[120vh] ">
        <div className="anim border-2 border-[#2491ba] px-10 text-white flex flex-col w-[95%] lg:w-[48%] h-[440px] lg:h-[65vh] rounded-lg neemble2">
          <h1 className="anim py-[5%] text-3xl lg:text-[4vh] ">
            ADs-Free Platform with True Privacy of user data.
          </h1>
          <div className="  flex flex-col items-center justify-evenly h-56">
            <div className="leading-[120%] anim text-sm lg:text-[2.70vh]">
              <p className="pt-[22%]">
                Information about our user’s interests and other data is 100%
                encrypted.
                <br />
                <br />
                This information is only accessible to our personalization
                algorithm engine and no one else!
                <br />
                <br />
                Our personalization engine uses this data to recommend content
                and steamers you might like, follow, and support.
                <br />
                <br />
                Enjoy the benefits of personalization without worrying that your
                private data is being abused by 3rd parties
                <br />
                <br />
                Neemble is a completely ads-free platform, enabling an improved
                immersive experience, without salesy disrutpions
              </p>
            </div>
          </div>
        </div>

        {/* second hand */}
        <div className="bg-red-400 w-[45%] h-[60vh] anim flex justify-center items-center">
          <h1 className="text-white text-5xl">VIDEO GOES HERE</h1>
        </div>
      </div>
    </>
  );
}

export default Block4_2;
