import { useState, useRef, useEffect } from "react";
import { FaBell, FaCloudUploadAlt, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useUpload } from "../context/UploadContext";
import { useNavigate } from "react-router-dom";

const notifications = [
  {
    id: 1,
    title: "Resume analyzed successfully",
    time: "2 min ago",
    unread: true,
  },
  {
    id: 2,
    title: "New AI suggestions available",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    title: "Weekly report is ready",
    time: "Yesterday",
    unread: false,
  },
];

function Navbar() {
  const { openUpload } = useUpload();
  const navigate = useNavigate();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifRef = useRef(null);
  const profileRef = useRef(null);

  const unreadCount = notifications.filter((n) => n.unread).length;

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfile(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    // hook this up to your auth logic (clear token/context, etc.)
    setShowProfile(false);
    navigate("/login");
  };

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 px-8 flex items-center justify-between sticky top-0 z-20">
      {/* Left Section */}
      <div>
        <h1 className="text-[19px] font-bold text-gray-900 tracking-tight">
          Hello, User! <span className="inline-block">👋</span>
        </h1>
        <p className="text-gray-500 text-sm mt-0.5">
          Analyze your resume and improve your score
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        {/* Upload Resume Button — triggers the same hidden input as UploadCard */}
        <button
          onClick={openUpload}
          className="
          primary-btn
          flex items-center gap-2
          px-5 py-2.5
          rounded-xl
          font-medium text-sm
          shadow-md shadow-violet-200
          "
        >
          <FaCloudUploadAlt className="text-base" />
          Upload Resume
        </button>

        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => {
              setShowNotifications((prev) => !prev);
              setShowProfile(false);
            }}
            className="relative w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:text-violet-600 hover:bg-violet-50 transition-colors duration-200"
          >
            <FaBell className="text-lg" />
            {unreadCount > 0 && (
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-in z-30">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 text-sm">
                  Notifications
                </h3>
                {unreadCount > 0 && (
                  <span className="text-xs font-medium text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full">
                    {unreadCount} new
                  </span>
                )}
              </div>

              <div className="max-h-72 overflow-y-auto">
                {notifications.length === 0 ? (
                  <p className="text-sm text-gray-400 text-center py-8">
                    No notifications
                  </p>
                ) : (
                  notifications.map((n) => (
                    <div
                      key={n.id}
                      className="px-5 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-0 flex items-start gap-3 cursor-pointer"
                    >
                      <span
                        className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${
                          n.unread ? "bg-violet-600" : "bg-gray-200"
                        }`}
                      />
                      <div>
                        <p className="text-sm text-gray-800">{n.title}</p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {n.time}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => {
              setShowProfile((prev) => !prev);
              setShowNotifications(false);
            }}
            className="
            w-10 h-10
            rounded-full
            bg-gradient-to-br from-violet-500 to-purple-600
            text-white
            font-semibold
            flex items-center justify-center
            shadow-sm
            ring-2 ring-white
            hover:scale-105
            transition-transform duration-200
            "
          >
            U
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-in z-30">
              <div className="px-5 py-4 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-900">User</p>
                <p className="text-xs text-gray-400 mt-0.5">user@email.com</p>
              </div>

              <button
                onClick={() => {
                  setShowProfile(false);
                  navigate("/settings");
                }}
                className="w-full flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition-colors"
              >
                <FaUser className="text-gray-400" />
                Profile
              </button>

              <button
                onClick={() => {
                  setShowProfile(false);
                  navigate("/settings");
                }}
                className="w-full flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition-colors"
              >
                <FaCog className="text-gray-400" />
                Settings
              </button>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-5 py-3 text-sm text-rose-500 hover:bg-rose-50 transition-colors border-t border-gray-100"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;