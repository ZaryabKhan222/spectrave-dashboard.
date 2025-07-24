import defectImg from "../assets/defect01.png";

const AnomaliesTab = () => {
  const tableData = [
    {
      name: "Active Bypass Diode",
      id: "ABD1",
      delta: "3.69",
      correctedDelta: "4.69",
    },
    {
      name: "Active Bypass Diode",
      id: "ABD2",
      delta: "9.64",
      correctedDelta: "10.86",
    },
  ];

  return (
    <div className="bg-white rounded shadow-md p-6 space-y-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Anomaly Detection
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Defect image */}
        <div className="flex-1">
          <img
            src={defectImg}
            alt="Defect Illustration"
            className="rounded-md w-full max-w-full object-contain shadow"
          />
        </div>

        {/* Table + description */}
        <div className="flex-1">
          <h3 className="font-medium text-gray-800 mb-2">
            Appendix A - Table 1
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-2">Anomaly Name</th>
                  <th className="px-4 py-2">Anomaly ID</th>
                  <th className="px-4 py-2">Delta Temperature</th>
                  <th className="px-4 py-2">Corrected Delta Temperature</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index} className="text-gray-800 hover:bg-gray-50">
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.id}</td>
                    <td className="px-4 py-2">{item.delta}</td>
                    <td className="px-4 py-2">{item.correctedDelta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            These anomalies indicate significant temperature differentials
            within affected modules, suggesting potential Active Bypass Diode
            failures. Prompt inspection and maintenance are recommended to avoid
            further performance degradation and energy losses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnomaliesTab;
