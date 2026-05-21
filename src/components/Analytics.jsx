
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

export default function Analytics({ expenses }) {

  const categoryData = {};

  expenses.forEach((item) => {
    categoryData[item.category] =
      (categoryData[item.category] || 0) + Number(item.amount);
  });

  const pieData = {
    labels: Object.keys(categoryData),

    datasets: [
      {
        data: Object.values(categoryData),
      },
    ],
  };

  const monthlyData = {};

  expenses.forEach((item) => {

    const month = item.date.slice(0, 7);

    monthlyData[month] =
      (monthlyData[month] || 0) + Number(item.amount);
  });

  const barData = {
    labels: Object.keys(monthlyData),

    datasets: [
      {
        label: "Monthly Expense",
        data: Object.values(monthlyData),
      },
    ],
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-10">

      <div className="bg-white/10 p-6 rounded-3xl">

        <h2 className="text-2xl mb-5 font-semibold text-yellow-400">
          Category Analytics
        </h2>

        <Pie data={pieData} />

      </div>

      <div className="bg-white/10 p-6 rounded-3xl">

        <h2 className="text-2xl mb-5 font-semibold text-yellow-400">
          Monthly Analytics
        </h2>

        <Bar data={barData} />

      </div>

    </div>
  );
}