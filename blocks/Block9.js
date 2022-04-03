import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartData from "../components/ChartData";
function Block9() {
  const data = {
    labels: [
      "Stream-2-earn, watch-2-earn rewards pool",
      ".",
      "Team",
      ".",
      "Exchange",
      ".",
      "Marketing",
      ".",
      "Airdrops",
      ".",
      "Burn",
      ".",
      "Advisors",
      ".",
      "Locked for 10 years",
      ".",
    ],
    datasets: [
      {
        data: [11, 1, 10, 1, 6, 1, 5, 1, 3, 1, 3, 1, 2, 1, 60, 1],
        backgroundColor: [
          "#5714AC",
          "transparent",
          "#186FF4",
          "transparent",
          "#A65E32",
          "transparent",
          "#FD151B",
          "transparent",
          "#207F43",
          "transparent",
          "#6CD1C0",
          "transparent",
          "#DEB730",
          "transparent",
          "#830B23",
          "transparent",
        ],
        borderColor: [
          "#5714AC",
          "transparent",
          "#186FF4",
          "transparent",
          "#A65E32",
          "transparent",
          "#FD151B",
          "transparent",
          "#207F43",
          "transparent",
          "#6CD1C0",
          "transparent",
          "#DEB730",
          "transparent",
          "#830B23",
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
    <div
      id="tokenomics"
      className="lg:pt-20 flex justify-center items-center w-screen h-[160vh] lg:h-[100vh] "
    >
      <div className="anim nmbl-gradient-border neemble2 flex  lg:flex-row flex-col justify-between w-[95%] h-[750px] ">
        {/* donut div */}
        <div className="lg:py-0 py-8 flex justify-center items-center w-[100%] lg:w-[45%] h-full ">
          <div className="flex justify-center items-center  anim w-[200px] h-[200px] lg:w-[80%] lg:h-[80vh]">
            <Doughnut data={data} options={options} />
          </div>
        </div>
        {/* donut div close */}

        {/* data parent div */}
        <div className=" flex flex-col justify-center items-center text-white h-full w-[100%] lg:w-[50%]">
          <div className="nmbl-gradient-border flex flex-col justify-evenly neemble2 w-[95%]  h-[200px] lg:w-[74%] lg:h-[25vh]">
            <h1 className="anim lg:px-20 px-8 text-3xl lg:text-[5vh] font-extrabold">
              NMBL Tokenomics
            </h1>
            {/* box child div 1 */}
            <div className="anim flex px-7 lg:px-20 space-x-10 lg:space-x-24">
              <div>
                <h1 className="text-lg lg:text-[2.70vh]">Token name</h1>
                <p className="text-lg lg:text-[3.90vh]">NEEMBLE</p>
              </div>
              <div>
                <h1 className="text-lg lg:text-[2.70vh]">Total supply</h1>
                <p className="text-lg lg:text-[3.90vh]">800.000.000</p>
              </div>
            </div>
          </div>
          {/* box child div 1 */}

          {/* box chil <div></div>d 2 */}
          <div className=" w-[95%] h-[400px]">
            {/* data div */}
            <div className="anim text-center py-14">
              <ChartData
                color="#5714AC"
                name="Stream-2-earn,"
                ename="watch-2-earn"
                oneLiner="w-auto lg:w-[130%]"
                percent="11%"
                number="88.000.000"
              />
              <ChartData
                color="#186FF4"
                name="Team"
                percent="10%"
                number="80.000.000"
              />
              <ChartData
                color="#A65E32"
                name="Exchange"
                percent="6%"
                number="48.000.000"
              />
              <ChartData
                color="#FD151B"
                name="Marketing"
                percent="5%"
                number="40.000.000"
              />
              <ChartData
                color="#207F43"
                name="Airdrops"
                percent="3%"
                number="24.000.000"
              />
              <ChartData
                color="#6CD1C0"
                name="Burn"
                percent="3%"
                number="24.000.000"
              />
              <ChartData
                color="#fddc00"
                name="Advisors"
                percent="2%"
                number="16.000.000"
              />
              <ChartData
                color="#830B23"
                name="Locked for 10 years"
                percent="60%"
                number="480.000.000"
              />
            </div>

            {/* data div */}
          </div>
          {/* box child 2 */}
        </div>
        {/* data parent div */}
      </div>
    </div>
  );
}

export default Block9;
