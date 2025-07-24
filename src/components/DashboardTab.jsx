import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Pie, Doughnut, Radar } from "react-chartjs-2";
import KpiCard from "./KpiCard";
import { exportToCSV } from "../utils/exportToCSV";

// Register chart types
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

const DashboardTab = () => {
  // Chart data
  const powerLossBarData = {
    labels: [
      "Single-Cell Hotspot",
      "Multi-Cell Hotspot",
      "Active Bypass Diode",
    ],
    datasets: [
      {
        label: "Power Loss (kW)",
        data: [0.765, 0.357, 1.094],
        backgroundColor: ["#f87171", "#60a5fa", "#fbbf24"],
      },
    ],
  };

  const moduleCountPieData = {
    labels: [
      "Single-Cell Hotspot",
      "Multi-Cell Hotspot",
      "Active Bypass Diode",
    ],
    datasets: [
      {
        label: "Modules",
        data: [30, 7, 13],
        backgroundColor: ["#34d399", "#818cf8", "#fb7185"],
        borderWidth: 1,
      },
    ],
  };

  const deltaLineData = {
    labels: ["ABD1", "ABD2"],
    datasets: [
      {
        label: "Delta Temp (°C)",
        data: [3.69, 9.64],
        borderColor: "#60a5fa",
        backgroundColor: "#bfdbfe",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Corrected Delta Temp (°C)",
        data: [4.69, 10.86],
        borderColor: "#f59e0b",
        backgroundColor: "#fde68a",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const annualLossData = {
    labels: [
      "Single-Cell Hotspot",
      "Multi-Cell Hotspot",
      "Active Bypass Diode",
    ],
    datasets: [
      {
        label: "Annual Loss (PKR)",
        data: [38925, 16458, 52169],
        backgroundColor: ["#a78bfa", "#facc15", "#4ade80"],
        borderWidth: 1,
      },
    ],
  };

  const handleDownload = () => {
    const rows = [
      ["Anomaly Name", "Module Count", "Power Loss (kW)", "Annual Loss (PKR)"],
      ["Single-Cell Hotspot", 30, 0.765, 38925],
      ["Multi-Cell Hotspot", 7, 0.357, 16458],
      ["Active Bypass Diode", 13, 1.094, 52169],
      ["Total", 50, 2.216, 107552],
    ];

    exportToCSV("anomaly_loss_report.csv", rows);
  };

  return (
    <div className="space-y-6">
      {/* Export Button */}
      <div className="flex justify-end">
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
        >
          ⬇️ Export Report CSV
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <KpiCard
          title="Revenue Loss"
          value="107,552"
          unit="PKR"
          bgColor="bg-red-100"
          textColor="text-red-700"
        />
        <KpiCard
          title="Potential Issues"
          value="3"
          unit="Types"
          bgColor="bg-yellow-100"
          textColor="text-yellow-800"
        />
        <KpiCard
          title="Power Loss"
          value="2.216"
          unit="kW"
          bgColor="bg-orange-100"
          textColor="text-orange-700"
        />
      </div>

      {/* Chart Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="font-semibold mb-4">Power Loss by Anomaly</h3>
          <Bar data={powerLossBarData} />
        </div>

        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="font-semibold mb-4">Module Count Distribution</h3>
          <Pie data={moduleCountPieData} />
        </div>

        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="font-semibold mb-4">Delta Temperature Comparison</h3>
          <Line data={deltaLineData} />
        </div>

        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="font-semibold mb-4">Annual Loss Breakdown</h3>
          <Bar
            data={annualLossData}
            options={{
              indexAxis: "y",
              responsive: true,
              plugins: {
                legend: { position: "top" },
                title: { display: false },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardTab;
