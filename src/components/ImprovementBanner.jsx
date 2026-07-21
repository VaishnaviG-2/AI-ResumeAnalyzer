import { FaRocket } from "react-icons/fa";
import { useUpload } from "../context/UploadContext";

function ImprovementBanner() {
  const { openUpload } = useUpload();

  return (
    <div
      className="
      relative
      overflow-hidden
      bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600
      rounded-2xl
      p-6 sm:p-8
      text-white
      flex flex-col sm:flex-row
      items-start sm:items-center
      justify-between
      gap-4
      shadow-lg shadow-violet-200
      "
    >
      {/* decorative glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center">
            <FaRocket />
          </span>
          <h2 className="text-xl font-bold">Keep Improving!</h2>
        </div>

        <p className="mt-2 text-violet-100 text-sm">
          Upload another resume and get better AI suggestions.
        </p>
      </div>

      <button
        onClick={openUpload}
        className="
        relative z-10
        bg-white text-violet-600
        px-6 py-3
        rounded-xl
        font-semibold text-sm
        hover:bg-gray-50
        shadow-md
        hover:shadow-lg
        transition-all duration-200
        hover:-translate-y-0.5
        whitespace-nowrap
        "
      >
        Upload Another Resume
      </button>
    </div>
  );
}

export default ImprovementBanner;