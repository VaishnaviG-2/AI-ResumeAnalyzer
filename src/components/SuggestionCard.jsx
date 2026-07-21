import { FaLightbulb } from "react-icons/fa";

function SuggestionCard() {
  return (
    <div className="dashboard-card p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-5">
        AI Suggestions
      </h2>

      {/* Empty State */}
      <div className="h-40 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-100 rounded-xl">
        <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mb-3">
          <FaLightbulb className="text-2xl text-amber-300" />
        </div>
        <p className="text-sm">No suggestions available</p>
      </div>
    </div>
  );
}

export default SuggestionCard;