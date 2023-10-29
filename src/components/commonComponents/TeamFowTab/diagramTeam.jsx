import { Bar } from "react-chartjs-2";

import "./teamFow";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const percentageMonthly = [85, 100, 20, 100, 100, 55, 100, 90, 20];
const abscense = [10, 0, 20, 0, 0, 30, 0, 10, 5];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept"];

const percentageNotAchieved = percentageMonthly.map((value) =>
  value < 100 ? value : 0
);
const percentageAchieved = percentageMonthly.map((value) =>
  value === 100 ? value : 0
);
const midata = {
  labels: months,
  datasets: [
    {
      label: "Absence",
      data: abscense,
      type: "line",
      tension: 0.5,
      fill: false,
      borderColor: "#1D4F91",
      backgroundColor: "#1D4F91",
      pointRadius: 5,
      pointBorderColor: "#1D4F91",
      pointBackgroundColor: "#1D4F91",
    },
    {
      label: "FOW Indicator achieved",
      data: percentageAchieved,
      type: "bar",
      tension: 0.5,
      fill: true,
      borderColor: "#009F4D",
      backgroundColor: "#009F4D",
      pointRadius: 5,
      pointBorderColor: "#009F4D",
      pointBackgroundColor: "#009F4D",
    },
    {
      label: "FOW Indicator not achieved",
      data: percentageNotAchieved,
      type: "bar",
      tension: 2,
      fill: true,
      backgroundColor: "#E4002B",
      pointRadius: 8,
      pointBorderColor: "#E4002B",
      pointBackgroundColor: "#E4002B",
    },
  ],
};

const misoptions = {
  responsive: true,
  scales: {
    y: {
      min: 0,
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "left",
      align: "start",
    },
    onResize: (chart) => {
      if (chart.width < 390) {
        chart.legend.options.position = "top";
      } else {
        chart.legend.options.position = "left";
      }
    },
  },
};

export default function DiagramTeam() {
  return (
    <div className="diagramTable">
      <Bar data={midata} options={misoptions} />
    </div>
  );
}
