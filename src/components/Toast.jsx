import { FaCheckCircle } from "react-icons/fa";

function Toast({ message, show }) {
  if (!show) return null;

  return (
    <div className="fixed top-6 right-6 z-50 animate-in">
      <div className="flex items-center gap-3 bg-white border border-gray-100 shadow-xl rounded-xl px-5 py-3.5">
        <FaCheckCircle className="text-emerald-500 text-lg" />
        <span className="text-sm font-medium text-gray-800">{message}</span>
      </div>
    </div>
  );
}

export default Toast;