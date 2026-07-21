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
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <FaHome />,
  },
  {
    title: "Resume Analyzer",
    path: "/resume-analyzer",
    icon: <FaFileAlt />,
  },
  {
    title: "History",
    path: "/history",
    icon: <FaHistory />,
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <FaChartBar />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <FaCog />,
  },
];

function Sidebar() {
  return (
    <aside className="w-[240px] h-screen bg-white border-r  flex flex-col justify-between">

      {/* Logo */}

      <div>

        <div className="px-6 py-7 border-b">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center text-white text-xl font-bold">

              📄

            </div>

            <div>

              <h1 className="text-[22px] font-bold text-gray-900">
                AI Resume
              </h1>

              <p className="text-[14px] text-gray-500">
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
                `flex items-center gap-4 px-4 py-3 rounded-xl mb-2 transition-all duration-300
                ${
                  isActive
                    ? "bg-violet-100 text-violet-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              <span className="text-lg">{menu.icon}</span>

              <span>{menu.title}</span>

            </NavLink>
          ))}

        </div>

      </div>

      {/* Logout */}

      <div className="border-t px-4 py-5">

        <button className="flex items-center gap-3 text-gray-700 hover:text-red-500 transition">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;