import React from "react";
import { exportToCSV } from "../utils/exportToCSV";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const downloadableFiles = [
  {
    name: "defect01.png",
    url: "/reports/defect01.png",
  },
  {
    name: "site_model.png",
    url: "/reports/site_model.png",
  },
  {
    name: "spectrave_dashboard.png",
    url: "/reports/spectrave_dashboard.png",
  },
  {
    name: "All Assets (.zip)",
    type: "zip",
  },
];

const ReportTab = () => {
  const tableData = [
    ["Anomaly Name", "Module Count", "Power Loss (kW)", "Annual Loss (PKR)"],
    ["Single-Cell Hotspot", 30, 0.765, 38925],
    ["Multi-Cell Hotspot", 7, 0.357, 16458],
    ["Active Bypass Diode", 13, 1.094, 52169],
    ["Total", 50, 2.216, 107552],
  ];

  const handleExport = () => {
    exportToCSV("report_table_data.csv", tableData);
  };

  const handleZipDownload = async () => {
    const zip = new JSZip();

    const fileList = downloadableFiles.filter((f) => f.url); // Exclude zip placeholder

    // Fetch and add image files
    await Promise.all(
      fileList.map(async (file) => {
        const response = await fetch(file.url);
        const arrayBuffer = await response.arrayBuffer();
        zip.file(file.name, arrayBuffer);
      })
    );

    // Add CSV content manually
    const csvContent = tableData.map((row) => row.join(",")).join("\n");
    zip.file("report_table_data.csv", csvContent);

    // Add optional README
    zip.file(
      "README.txt",
      "This ZIP contains:\n- Anomaly report CSV\n- Screenshot images\n- Other report assets from Spectrave Dashboard"
    );

    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "all-assets.zip");
  };

  return (
    <div className="space-y-6">
      {/* Export Report CSV Button */}
      <div className="flex justify-end">
        <button
          onClick={handleExport}
          className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
        >
          ⬇️ Export Report CSV
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto bg-white shadow rounded p-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Summary Table
        </h2>
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="text-sm font-semibold text-gray-700">
              <th className="py-2 px-4">Anomaly Name</th>
              <th className="py-2 px-4">Module Count</th>
              <th className="py-2 px-4">Power Loss (kW)</th>
              <th className="py-2 px-4">Annual Loss (PKR)</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-600">
            <tr>
              <td className="py-2 px-4">Single-Cell Hotspot</td>
              <td className="py-2 px-4">30</td>
              <td className="py-2 px-4">0.765</td>
              <td className="py-2 px-4">38,925</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Multi-Cell Hotspot</td>
              <td className="py-2 px-4">7</td>
              <td className="py-2 px-4">0.357</td>
              <td className="py-2 px-4">16,458</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Active Bypass Diode</td>
              <td className="py-2 px-4">13</td>
              <td className="py-2 px-4">1.094</td>
              <td className="py-2 px-4">52,169</td>
            </tr>
            <tr className="font-medium text-gray-800">
              <td className="py-2 px-4">Total</td>
              <td className="py-2 px-4">50</td>
              <td className="py-2 px-4">2.216</td>
              <td className="py-2 px-4">107,552</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Downloadable Assets Section */}
      <div className="bg-white rounded shadow-md p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Downloadable Reports & Assets
        </h2>

        <ul className="space-y-3">
          {downloadableFiles.map((file, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-3 rounded bg-gray-50 hover:bg-gray-100 transition"
            >
              <span className="text-gray-700">{file.name}</span>
              {file.type === "zip" ? (
                <button
                  onClick={handleZipDownload}
                  className="text-sm bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-1.5 rounded"
                >
                  Download
                </button>
              ) : (
                <a
                  href={file.url}
                  download
                  className="text-sm bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-1.5 rounded"
                >
                  Download
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReportTab;
