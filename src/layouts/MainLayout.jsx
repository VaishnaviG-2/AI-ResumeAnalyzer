import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">
      <Sidebar />

      <div className="flex-1 flex flex-col min-h-screen">
        <Navbar />

        <main className="p-8 animate-in">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;