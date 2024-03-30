"use client";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import Menu from "./Menu";
import { MdLogout } from "react-icons/md";
import { useToggleSidebar } from "../../_hooks/useToggleSidebar";

const Sidebar = () => {
  const { sidebarOpen } = useToggleSidebar();

  if (!sidebarOpen) {
    return null;
  }

  return (
    <div className="fixed md:sticky pt-20 md:pt-0 h-screen z-30 flex-shrink-0 shadow-sm w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block">
      <Link
        href="/dashboard"
        className="p-4 text-xl font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-4"
      >
        <FaShoppingBag size={24} className="text-emerald-500" />
        <span>Dashboard</span>
      </Link>
      <Menu />
      <div className="fixed bottom-0 px-6 py-6 w-64 mx-auto mt-3 block">
        <button className="btn text-white bg-emerald-500 active:bg-emerald-600 hover:bg-emerald-600">
          <MdLogout />
          <span className="text-sm ml-2">Log out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
