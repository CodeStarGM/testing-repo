import React from "react";
import dynamic from "next/dynamic";
const Team = dynamic(() => import("../components/Team"));
import { DATA } from "../components/TeamData";

function Block13( ) {
  return (
    <div>
      {/* Meet the Team */}
      <div
        id="team"
        className="flex flex-col justify-end h-[100vh] items-center w-screen "
      >
        {/* tab */}
        <div className="anim flex justify-center items-center w-screen">
          <h1 className="text-white font-semibold text-5xl">Meet The Team</h1>
        </div>
        {/* tab */}
        <div id="team"></div>
        <div className="anim py-10 grid grid-cols-1 lg:grid-cols-4 gap-10">
          {DATA.map((team) => (
            <Team
              tName={team.name}
              key={team.name}
              tTitle={team.title}
              tBio={team.bio}
              tImage={team.img}
            />
          ))}
        </div>
      </div>
      {/* team */}
    </div>
  );
}

export default Block13;
