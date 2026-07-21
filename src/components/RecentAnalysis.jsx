import { FaFilePdf } from "react-icons/fa";

function RecentAnalysis() {
  return (
    <div className="dashboard-card p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-5">
        Recent Analysis
      </h2>

      {/* Empty State */}
      <div className="h-40 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-100 rounded-xl">
        <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center mb-3">
          <FaFilePdf className="text-2xl text-gray-300" />
        </div>
        <p className="text-sm">No resume analysis yet</p>
      </div>
    </div>
  );
}

export default RecentAnalysis;