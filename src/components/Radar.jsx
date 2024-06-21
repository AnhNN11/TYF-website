import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Vị trí công việc",
    "Kinh nghiệm",
    "Kỹ năng",
    "Định hướng",
    "Yếu tố khác",
  ],
  datasets: [
    {
      label: "Gia sư",
      data: [65, 59, 90, 81, 56],
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Trông trẻ",
      data: [28, 48, 40, 19, 96],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
};

const options = {
  elements: {
    line: {
      borderWidth: 3,
    },
  },
};

function RadarChart() {
  return (
    <div style={{ width: "600px", height: "400px" }}>
      <Radar data={data} options={options} />
    </div>
  );
}

export default RadarChart;
