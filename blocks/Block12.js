import React from "react";
import Image from "next/image";
import foot from "../public/images/roadmapFoot.png";
import check from "../assets/check.png";
function Block12({ navbarRef }) {
  return (
    <div>
      {/* ROADMAP */}
      <div
        id="roadmap"
        className="mt-14 flex py-14 justify-center items-center w-screen bg-[#4a3281]  h-[100vh]"
      >
        {/* tab */}
        <div className="flex flex-col justify-center items-center w-screen">
          <h1 className="anim text-white font-medium text-5xl">Roadmap</h1>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 py-4">
              {/* card */}

              <div className="px-4 opacity-95 bg-gradient-to-r  from-[#6E50C4] to-[#2f69af] flex justify-evenly flex-col items-center rounded-2xl bg-[#4b0177] w-[340px] h-[450px] md:w-[400px] md:h-[550px] ">
                <div className="anim flex justify-center items-center space-x-8">
                  <Image width={40} height={40} src={check} />
                  <h1 className="py-4 md:text-4xl text-xl text-white font-medium">
                    Tasks Complete
                  </h1>
                </div>
                <ul className="anim px-8 py-5 md:text-xl text-sm  text-white flex flex-col">
                  <li className="py-2">• Neemble Desktop and Web UX/UI</li>
                  <li className="py-2">• Neemble mobile app UX/UI</li>
                  <li className="py-2">• ULTRA-HD Streaming algorithm</li>
                  <li className="py-2">
                    • Start developing front and back-ends for neemble beta
                  </li>
                  <li className="py-2">• Deploy NMBL Token</li>
                  <li className="py-2">
                    • NFT pass and streamer token monetization model
                  </li>
                </ul>
                <p className="bg-[#3d0565] text-2xl py-2 px-2 text-white rounded-lg">
                  Phase 1
                </p>
              </div>
              <div className="px-4 opacity-95 bg-gradient-to-r  from-[#6E50C4] to-[#2f69af] flex justify-evenly flex-col items-center rounded-2xl bg-[#4b0177]  w-[340px] h-[450px] md:w-[400px] md:h-[550px] ">
                <div className="anim flex justify-center items-center space-x-8">
                  <Image width={40} height={40} src={check} />
                  <h1 className="py-4 md:text-4xl text-xl text-white font-medium">
                    Tasks Complete
                  </h1>
                </div>
                <ul className="anim px-4 md:text-xl text-sm  text-white flex flex-col">
                  <li className="py-1">• Develop and deploy the website</li>
                  <li className="py-1">• Interactive demos are live now</li>
                  <li className="py-1">• Publish the light paper</li>
                  <li className="py-1">
                    • Initiate development of the NFT maketplace
                  </li>
                  <li className="py-2">
                    • Initiate development of the decentralized exchange on
                    arbitrum network
                  </li>
                  <li className="py-2">• Start sharing content on twitter</li>
                  <li>Initiate a white-list contest for 1111 spots</li>
                </ul>
                <p className="bg-[#3d0565] text-2xl py-2 px-2 text-white rounded-lg">
                  Phase 2
                </p>
              </div>
              <div className="px-4 opacity-95 bg-gradient-to-r  from-[#6E50C4] to-[#2f69af]  flex justify-evenly flex-col items-center rounded-xl bg-[#4b0177] w-[340px] h-[450px] md:w-[400px] md:h-[550px] ">
                <div className="anim flex justify-center items-center space-x-8">
                  <Image width={40} height={40} src="/images/laptop.png" />
                  <h1 className="py-4 md:text-4xl text-xl text-white font-medium">
                    Tasks in progress
                  </h1>
                </div>
                <ul className="anim px-4 py-1 md:text-xl text-sm  text-white flex flex-col">
                  <li className="py-2">
                    • Run a small private crowdsale for 1111 true believers, to
                    be able to be the first ever to buy a limited amount of NMBL
                    tokens
                  </li>
                  <li className="py-2">• Update UX/UI in Red and Blue Modes</li>
                  <li className="py-2">
                    • Start reaching out popular streamers with an offer
                  </li>
                  <li className="py-2">• Publish neemble beta release date</li>
                  <li className="py-2">
                    • Publish streamer token mechanics and tokenomics
                  </li>
                </ul>
                <p className="bg-[#3d0565] text-2xl py-2 px-2 text-white rounded-lg">
                  Phase 3
                </p>
              </div>
            </div>
          </div>
          <div ref={navbarRef} className="">
            <Image src={foot}></Image>
          </div>
        </div>
        {/* tab */}
      </div>

      {/* ROADMAP */}
    </div>
    // <div className="w-screen h-[100vh] bg-[#251344]">
    //   {/* tag */}
    //   <div className="flex justify-center items-end w-screen h-20 bg-red-400">
    //     <h1 className=" text-white font-bold text-6xl">Roadmap</h1>
    //   </div>
    //   {/* tag */}
    //   {/* roadmap card */}
    //   <div className="text-white flex justify-center items-center bg-red-800 w-screen h-[90%]">
    //     <div className="flex flex-col px-24 justify-evenly rounded-lg w-[555px] h-[652px] bg-yellow-400">
    //       <div className="text-5xl">Task Complete</div>
    //       <div className="text-2xl">
    //         <p>•&nbsp; Neemble Desktop and Web UX/UI</p>
    //         <p>•&nbsp;Neemble mobile app UX/UI</p>
    //         <p>•&nbsp;ULTRA-HD Streaming algorithm</p>
    //         <p>•&nbsp;Start developing front and back-ends for neemble beta</p>
    //         <p>•&nbsp;Deploy NMBL Token</p>
    //         <p>•&nbsp;NFT pass and streamer token monetization model</p>
    //       </div>
    //       <div>
    //         {" "}
    //         <p className="bg-[#2B2757] px-1"> Phase 1</p>
    //       </div>
    //     </div>
    //   </div>
    //   {/* roadmap card */}
    // </div>
  );
}

export default Block12;
