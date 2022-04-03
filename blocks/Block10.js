import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartData from "../components/ChartData";
function Block10() {
  const data = {
    labels: [
      "Streamer Holders",
      ".",
      "Neemble Pool",
      ".",
      "Available on Swap",
      ".",
      "Airdrops",
      ".",
    ],
    datasets: [
      {
        data: [38, 1, 27, 1, 18, 1, 17, 1],
        backgroundColor: [
          "#F7B801",
          "transparent",
          "#5BC0EB",
          "transparent",
          "#E55934",
          "transparent",
          "#5EC2B7",
          "transparent",
        ],
        borderColor: [
          "#F7B801",
          "transparent",
          "#5BC0EB",
          "transparent",
          "#E55934",
          "transparent",
          "#5EC2B7",
          "transparent",
        ],
        borderRadius: 7,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="text-white flex justify-center items-center w-screen h-[100vh] nb block10">
      <div className="anim neemble2 rounded-[7px] border-2 border-[#2491ba] flex lg:flex-row flex-col-reverse  justify-evenly w-[95%] lg:w-[90%] h-[700px] lg:h-[604px] ">
        <div className="flex  flex-col items-center w-[100%] lg:w-[50%] h-full ">
          <h1 className="anim text-3xl lg:text-[5vh] lg:text-justify text-center py-8 lg:py-16 font-extrabold">
            Streamer Token Tokenomics
          </h1>
          <div className="flex flex-col items-center justify-evenly w-[90%] h-72">
            {/* LINE */}
            <div className="anim px-8 flex items-center justify-between w-full h-14">
              <div className=" flex items-center space-x-2">
                <div
                  style={{ boxShadow: "0 0 14px #F7B801" }}
                  className="h-5 w-5 bg-[#F7B801] rounded-full"
                ></div>
                <h1 className="text-base  lg:text-[1.644rem]">
                  Streamer Holders
                </h1>
              </div>
              <h1 className="text-base  lg:text-[1.644rem]">38%</h1>
            </div>
            {/* LINE END */}
            {/* LINE */}
            <div className="anim px-8 flex items-center justify-between  w-full h-14">
              <div className="flex items-center space-x-2">
                <div
                  style={{ boxShadow: "0 0 14px #5BC0EB" }}
                  className="	 h-5 w-5 bg-[#5BC0EB] rounded-full"
                ></div>
                <h1 className="text-base lg:text-[1.644rem]">Neemble Pool</h1>
              </div>
              <h1 className="text-base  lg:text-[1.644rem]">27%</h1>
            </div>
            {/* LINE END */}
            {/* LINE */}
            <div className="anim px-8 flex items-center justify-between  w-full h-14">
              <div className="flex items-center space-x-2">
                <div
                  style={{ boxShadow: "0 0 14px #E55934" }}
                  className="h-5 w-5 bg-[#E55934] rounded-full"
                ></div>
                <h1 className="text-base lg:text-[1.644rem]">
                  Available on Swap
                </h1>
              </div>
              <h1 className="text-base  lg:text-[1.644rem]">18%</h1>
            </div>
            {/* LINE END */}
            {/* LINE */}
            <div className="anim px-8 flex items-center justify-between  w-full h-14">
              <div className="flex items-center space-x-2">
                <div
                  style={{ boxShadow: "0 0 14px #5EC2B7" }}
                  className="h-5 w-5 bg-[#5EC2B7] rounded-full"
                ></div>
                <h1 className="text-base  lg:text-[1.644rem]">Airdrops</h1>
              </div>
              <h1 className="text-base  lg:text-[1.644rem]">17%</h1>
            </div>
            {/* LINE END */}
          </div>
        </div>
        {/* donut div */}
        <div className="flex justify-center items-center w-[100%] lg:w-[45%] h-full ">
          <div className=" flex justify-center items-center anim w-[200px] h-[200px] lg:w-[65%] lg:h-[484px]">
            <Doughnut data={data} options={options} />
          </div>
        </div>
        {/* donut div close */}
      </div>
    </div>
  );
}

export default Block10;
