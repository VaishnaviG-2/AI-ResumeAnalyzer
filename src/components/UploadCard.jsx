import { useUpload } from "../context/UploadContext";
import { motion } from "framer-motion";
import { FaFileUpload, FaCheckCircle, FaFilePdf, FaTimes, FaEye } from "react-icons/fa";

function UploadCard() {
  const { file, previewUrl, error, handleFile, removeFile, openUpload } = useUpload();

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  const handlePreview = () => {
    if (previewUrl) window.open(previewUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="dashboard-card p-6"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-6">Analyze Your Resume</h2>

      <div
        onClick={openUpload}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-violet-300 bg-gradient-to-br from-violet-50 to-white rounded-2xl h-60 flex flex-col justify-center items-center cursor-pointer transition-all duration-300 hover:border-violet-600 hover:shadow-lg"
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center shadow-lg mb-5">
          <FaFileUpload className="text-white text-2xl" />
        </div>

        <p className="text-lg font-semibold text-gray-700">Drag & Drop Resume</p>
        <p className="text-gray-500 text-sm mt-1">PDF, DOC or DOCX (Max 5MB)</p>
        <span className="text-gray-400 my-4 font-medium">OR</span>

        <button type="button" className="primary-btn px-6 py-2.5 rounded-xl font-medium">
          Choose File
        </button>
      </div>

      {/* Selected File */}
      {file && (
        <div className="mt-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-center gap-4">
          <FaFilePdf className="text-red-500 text-3xl flex-shrink-0" />

          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-800 truncate">{file.name}</h3>
            <p className="text-sm text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={handlePreview}
              title="View resume"
              className="w-8 h-8 rounded-full flex items-center justify-center text-violet-600 hover:bg-violet-100 transition-colors"
            >
              <FaEye className="text-sm" />
            </button>

            <FaCheckCircle className="text-green-600 text-xl" />

            <button
              type="button"
              onClick={removeFile}
              title="Remove resume"
              className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
            >
              <FaTimes className="text-sm" />
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className="mt-5 rounded-xl bg-red-100 border border-red-300 text-red-600 p-3 text-sm">
          {error}
        </div>
      )}
    </motion.div>
  );
}

export default UploadCard;