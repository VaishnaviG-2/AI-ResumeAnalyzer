import { createContext, useContext, useRef, useState, useCallback } from "react";
import { validateResume } from "../utils/fileValidation";

const UploadContext = createContext();

export function UploadProvider({ children }) {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState("");

  const handleFile = useCallback((selectedFile) => {
    if (!selectedFile) return;

    const validationError = validateResume(selectedFile);

    if (validationError) {
      setError(validationError);
      setFile(null);
      setPreviewUrl(null);
      return;
    }

    setError("");
    setFile(selectedFile);

    setPreviewUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return URL.createObjectURL(selectedFile);
    });
  }, []);

  const handleInputChange = (e) => {
    handleFile(e.target.files[0]);
    e.target.value = ""; // allows re-selecting the same file later
  };

  const removeFile = useCallback(() => {
    setFile(null);
    setError("");
    setPreviewUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
  }, []);

  const openUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <UploadContext.Provider
      value={{ file, previewUrl, error, handleFile, removeFile, openUpload, uploadRef: fileInputRef }}
    >
      {children}

      {/* Global hidden input — mounted once, works from every page */}
      <input
        ref={fileInputRef}
        type="file"
        hidden
        accept=".pdf,.doc,.docx"
        onChange={handleInputChange}
      />
    </UploadContext.Provider>
  );
}

export function useUpload() {
  return useContext(UploadContext);
}