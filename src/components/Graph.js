import { Bar, Line } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js/auto";

export default function Graph() {
  
  const fillGradient = {
    fill: true,
    backgroundColor: "rgba(240,189,10,0.4)",
  };

  const labels = ["Profile Viewed", "Reach", "Orders", "Total Discovers"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Your Graph",
        data: [23, 40, 27, 80],
        ...fillGradient,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    tension: 0.4,
  };

  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
  return (
    <>
      <div
        className="mx-auto -my-12 px-6 md:px-14"
        style={{
          width: "100%",
          height: "340px",
        }}
      >
        <Line className=" md:mx-0" data={data} options={options} />
      </div>
    </>
  );
}
