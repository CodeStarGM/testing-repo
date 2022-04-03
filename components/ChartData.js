import React from "react";

function ChartData({ ename, color, name, percent, number, oneLiner }) {
  return (
    <>
      {/* data div */}
      <div className=" grid grid-cols-3 lg:gap-14 gap-4">
        <div className="flex items-center space-x-4">
          <div
            style={{ boxShadow: `0 0 9px ${color}`, background: `${color}` }}
            className={`rounded-full h-2 w-2 md:h-4 md:w-4`}
          ></div>
          <div>
            <p
              className={`${oneLiner} leading-[114%] py-2 text-xs md:text-[2.2vh] text-white`}
            >
              {name}
              {ename}
            </p>
          </div>
        </div>

        {/* name div */}
        <p className="text-xs md:text-xl text-white">{percent}</p>
        <p className="text-xs md:text-xl text-white">{number}</p>
      </div>

      {/* data div */}
    </>
  );
}

export default ChartData;
