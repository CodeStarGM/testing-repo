import React, { useState } from "react";
import Image from "next/image";

function Navbar({ navSettings, btn }) {
  const [menu, setMenu] = useState(false);

  const mobileMenu = () => {
    setMenu(!menu);
  };
  return (
      <>
        <div
            className={`animFirstScreen z-50 fixed hidden lg:flex justify-between ${navSettings}  w-screen h-[80px]`}
        >
          <div className="animFirstScreen flex items-center">
            <div className="flex items-center space-x-1 px-2">
              <div className="animFirstScreen h-14 w-16 rounded-full">
                <Image src="/neemble-logo.png" width={60} height={56}></Image>
              </div>
              <h1 className="animFirstScreen text-white text-3xl">Neemble</h1>
            </div>
            <div className="">
              <ul id="menu" className=" w-[800px]  flex justify-evenly text-xl text-white">
                <li onClick={() => fullpage_api.silentMoveTo("neemble")}
                    data-menuanchor="neemble"
                    className="py-2 animFirstScreen menuItem active">Neemble</li>
                <li onClick={() => fullpage_api.silentMoveTo("streamer")}
                    data-menuanchor="streamer"
                    className="py-2 animFirstScreen menuItem">Streamer Token</li>
                <li onClick={() => fullpage_api.silentMoveTo("tokenomics")}
                    data-menuanchor="tokenomics"
                    className="py-2 animFirstScreen menuItem">Tokenomics</li>
                <li onClick={() => fullpage_api.silentMoveTo("roadmap")}
                    data-menuanchor="roadmap"
                    className="py-2 animFirstScreen menuItem">Road Map</li>
                <li onClick={() => fullpage_api.silentMoveTo("team")}
                    data-menuanchor="team"
                    className="py-2 animFirstScreen menuItem">Team</li>
              </ul>
            </div>
          </div>
          <div className="px-4 space-x-8 text-white flex items-center">
            <a
                href="#"
                className="animFirstScreen border-[3px] border-[#611ac7] text-lg bg-[#2c244d]  px-3 rounded-[4px]"
            >
              Discord
            </a>
            <a
                href="https://twitter.com/neemble"
                className=" animFirstScreen text-lg border-[3px] border-[#35afff] bg-[#1f3f66]  px-3 rounded-[4px]"
            >
              Twitter
            </a>
            <a
                href="#"
                className={`animFirstScreen rounded-[4px] text-2xl border-2 px-4 py-[3px] ${btn}`}
            >
              Lightpaper
            </a>
          </div>
        </div>

        {/* mobile nav */}
        <div
            className={`px-2 z-40 fixed flex lg:hidden items-center justify-between ${navSettings}  w-screen h-[80px]`}
        >
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4 ">
              <div className="animFirstScreen h-14 w-16 rounded-full">
                <Image src="/neemble-logo.png" width={60} height={56}></Image>
              </div>
              <h1 className="text-white text-2xl">Neemble</h1>
            </div>
          </div>
          <div onClick={mobileMenu}>
            <h1
                className={`text-3xl text-white rounded-full border-2 px-4 py-2 ${btn}`}
            >
              +
            </h1>
          </div>
        </div>
        {/* mobile nav */}
        {menu ? (
            <div className="z-50 right-2 mt-[85px] rounded-xl neemble2 border-2 border-[#2491ba] h-[68vh] w-[70%] fixed">
              <ul className="text-white text-xl px-8 py-4">
                <a href="#home">
                  {" "}
                  <li className={`py-2 px-2 `}>Neemble</li>
                </a>
                <a href="#streamer">
                  {" "}
                  <li className={`py-2 `}>Streamer Token</li>
                </a>
                <a href="#tokenomics">
                  {" "}
                  <li className={`py-2 `}>Tokenomics</li>
                </a>
                <a href="#roadmap">
                  {" "}
                  <li className={`py-2`}>Road Map</li>
                </a>
                <a href="#team">
                  {" "}
                  <li className={`py-2`}>Team</li>
                </a>
                <a href="#">
                  {" "}
                  <li className="mt-4 bg-[#5865F2] rounded-lg px-2 py-2">
                    Discord
                  </li>
                </a>
                <a href="https://twitter.com/neemble">
                  {" "}
                  <li className="mt-4 bg-[#1D9BF0] rounded-lg px-2 py-2">
                    Twitter
                  </li>
                </a>
                <a href="#">
                  <li className="border-[#00A4EF] rounded-[4px] text-2xl border-2 px-4 py-2 mt-4">
                    Lighpaper
                  </li>
                </a>
              </ul>
            </div>
        ) : null}
      </>
  );
}

export default Navbar;
