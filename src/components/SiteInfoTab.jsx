import siteModel from '../assets/site_model.jpeg'

const SiteInfoTab = () => {
  return (
    <div className="bg-white rounded shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Site Overview</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <img
            src={siteModel}
            alt="Site Model"
            className="rounded-lg w-full max-w-full object-contain shadow"
          />
        </div>

        <div className="flex-1 text-gray-700 text-base leading-relaxed">
          <p>
            This solar power site is designed with optimal panel orientation and tilt to maximize sun exposure throughout the year.
            It incorporates string-level monitoring, inverter-level analytics, and automated fault detection.
          </p>
          <p className="mt-3">
            The layout ensures efficient energy harvesting while minimizing shadowing, cable loss, and mismatch. Real-time performance
            tracking enables proactive maintenance to reduce downtime and optimize yield.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SiteInfoTab
