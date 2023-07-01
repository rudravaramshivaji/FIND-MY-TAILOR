import {  Line } from "react-chartjs-2";
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
        data: [80, 40, 27, 10],
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
        className="pr-3 -my-11 md:px-14 mx-auto max-w-[100vw]"
        style={{
          height: "340px",
        }}
      >
        <Line className="" data={data} options={options} />
      </div>
    </>
  );
}
// mx-auto -my-12 px-6 md:px-14