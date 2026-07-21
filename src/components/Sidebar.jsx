import {
  FaHome,
  FaFileAlt,
  FaHistory,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const menus = [
  { title: "Dashboard", path: "/dashboard", icon: <FaHome /> },
  { title: "Resume Analyzer", path: "/resume-analyzer", icon: <FaFileAlt /> },
  { title: "History", path: "/history", icon: <FaHistory /> },
  { title: "Reports", path: "/reports", icon: <FaChartBar /> },
  { title: "Settings", path: "/settings", icon: <FaCog /> },
];

function Sidebar() {
  return (
    <aside className="w-[240px] h-screen bg-white border-r border-gray-100 flex flex-col justify-between sticky top-0">
      <div>
        {/* Logo */}
        <div className="px-6 py-7 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white text-xl shadow-md shadow-violet-200">
              📄
            </div>

            <div>
              <h1 className="text-[19px] font-bold text-gray-900 leading-tight">
                AI Resume
              </h1>
              <p className="text-[13px] text-gray-500 leading-tight">
                Analyzer
              </p>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="mt-6 px-4">
          {menus.map((menu) => (
            <NavLink
              key={menu.title}
              to={menu.path}
              className={({ isActive }) =>
                `group flex items-center gap-4 px-4 py-3 rounded-xl mb-1.5 text-sm transition-all duration-200
                ${
                  isActive
                    ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold shadow-md shadow-violet-200"
                    : "text-gray-600 hover:bg-violet-50 hover:text-violet-700"
                }`
              }
            >
              <span className="text-base">{menu.icon}</span>
              <span>{menu.title}</span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div className="border-t border-gray-100 px-4 py-5">
        <button className="flex items-center gap-3 text-sm text-gray-600 hover:text-rose-500 transition-colors duration-200 px-4 py-2.5 rounded-xl hover:bg-rose-50 w-full">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;