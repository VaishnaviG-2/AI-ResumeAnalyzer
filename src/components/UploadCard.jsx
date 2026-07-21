import { useRef, useState } from "react";
import { useUpload } from "../context/UploadContext";
import { validateResume } from "../utils/fileValidation";
import { motion } from "framer-motion";

import {
  FaFileUpload,
  FaCheckCircle,
  FaFilePdf,
} from "react-icons/fa";

function UploadCard() {
  const fileInputRef = useRef(null);

  const { uploadRef } = useUpload();

  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    const validationError = validateResume(selectedFile);

    if (validationError) {
      setError(validationError);
      setFile(null);
      return;
    }

    setError("");
    setFile(selectedFile);
  };

  const handleChange = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="dashboard-card p-6"
    >
      {/* Heading */}

      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Analyze Your Resume
      </h2>

      {/* Upload Box */}

      <div
        onClick={() => fileInputRef.current.click()}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="
          border-2
          border-dashed
          border-violet-300
          bg-gradient-to-br
          from-violet-50
          to-white
          rounded-2xl
          h-60
          flex
          flex-col
          justify-center
          items-center
          cursor-pointer
          transition-all
          duration-300
          hover:border-violet-600
          hover:shadow-lg
        "
      >
        {/* Upload Icon */}

        <div
          className="
            w-16
            h-16
            rounded-full
            bg-gradient-to-r
            from-violet-600
            to-purple-600
            flex
            items-center
            justify-center
            shadow-lg
            mb-5
          "
        >
          <FaFileUpload className="text-white text-2xl" />
        </div>

        <p className="text-lg font-semibold text-gray-700">
          Drag & Drop Resume
        </p>

        <p className="text-gray-500 text-sm mt-1">
          PDF, DOC or DOCX (Max 5MB)
        </p>

        <span className="text-gray-400 my-4 font-medium">OR</span>

        <button
          type="button"
          className="
            primary-btn
            px-6
            py-2.5
            rounded-xl
            font-medium
          "
        >
          Choose File
        </button>

        <input
          ref={(element) => {
            fileInputRef.current = element;
            uploadRef.current = element;
          }}
          type="file"
          hidden
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
        />
      </div>

      {/* Selected File */}

      {file && (
        <div
          className="
            mt-6
            p-4
            rounded-xl
            bg-green-50
            border
            border-green-200
            flex
            items-center
            gap-4
          "
        >
          <FaFilePdf className="text-red-500 text-3xl" />

          <div className="flex-1">
            <h3 className="font-semibold text-gray-800">
              {file.name}
            </h3>

            <p className="text-sm text-gray-500">
              {(file.size / 1024).toFixed(2)} KB
            </p>
          </div>

          <FaCheckCircle className="text-green-600 text-xl" />
        </div>
      )}

      {/* Error */}

      {error && (
        <div
          className="
            mt-5
            rounded-xl
            bg-red-100
            border
            border-red-300
            text-red-600
            p-3
            text-sm
          "
        >
          {error}
        </div>
      )}
    </motion.div>
  );
}

export default UploadCard;