import { FaBell, FaCloudUploadAlt } from "react-icons/fa";

function Navbar() {
  return (
    <header className="h-20 bg-white border-b px-8 flex items-center justify-between">

      {/* Left Section */}
      <div>
        <h1 className="">
          Hello, User! 👋
        </h1>

        <p className="text-gray-500 text-sm mt-1">
          Analyze your resume and improve your score
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Upload Resume Button */}
        <button
          className="
          flex
          items-center
          gap-2
          px-6
          py-3
          rounded-xl
          bg-violet-600
          hover:bg-violet-700
          text-white
          font-medium
          shadow-md
          transition
          "
        >
          <FaCloudUploadAlt />

          Upload Resume
        </button>

        {/* Notification */}
        <button className="text-2xl text-gray-700 hover:text-violet-600">
          <FaBell />
        </button>

        {/* Profile */}
        <div
          className="
          w-11
          h-11
          rounded-full
          bg-violet-100
          text-violet-700
          font-semibold
          flex
          items-center
          justify-center
          cursor-pointer
          "
        >
          U
        </div>

      </div>

    </header>
  );
}

export default Navbar;