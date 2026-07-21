import {
  FaCheckCircle,
  FaBullseye,
  FaFileAlt,
  FaChartLine,
} from "react-icons/fa";

function ResumeScore() {
  return (
    <div className="dashboard-card p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Resume Score
      </h2>

      {/* Gauge */}
      <div className="flex justify-center items-center">
        <div
          className="
          relative
          w-44 h-44
          rounded-full
          flex items-center justify-center
          "
          style={{
            background: `conic-gradient(#7c3aed 0% 88%, #ece9f7 88% 100%)`,
          }}
        >
          <div className="absolute w-[86%] h-[86%] rounded-full bg-white shadow-inner flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold bg-gradient-to-br from-violet-600 to-purple-600 bg-clip-text text-transparent">
                88%
              </h1>
              <p className="text-sm text-gray-500 mt-0.5">ATS Score</p>
            </div>
          </div>
        </div>
      </div>

      {/* Score Details */}
      <div className="mt-7 space-y-3">
        <ScoreItem icon={<FaBullseye />} title="Keywords" value={90} />
        <ScoreItem icon={<FaFileAlt />} title="Formatting" value={85} />
        <ScoreItem icon={<FaChartLine />} title="Structure" value={88} />
        <ScoreItem icon={<FaCheckCircle />} title="Content Depth" value={82} />
      </div>
    </div>
  );
}

function ScoreItem({ icon, title, value }) {
  return (
    <div className="bg-gray-50 hover:bg-violet-50/60 rounded-xl p-3.5 transition-colors duration-200">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3 text-gray-700 text-sm">
          <span className="w-7 h-7 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center text-xs">
            {icon}
          </span>
          <span className="font-medium">{title}</span>
        </div>

        <span className="font-semibold text-gray-900 text-sm">
          {value}%
        </span>
      </div>

      <div className="score-bar-track">
        <div className="score-bar-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export default ResumeScore;