const KpiCard = ({ title, value, unit, bgColor, textColor }) => {
  return (
    <div className={`rounded-lg shadow-md p-4 ${bgColor} ${textColor} min-w-[180px]`}>
      <div className="text-sm font-medium">{title}</div>
      <div className="text-2xl font-bold mt-2">
        {value}
        {unit && <span className="text-sm font-semibold ml-1">{unit}</span>}
      </div>
    </div>
  )
}

export default KpiCard
