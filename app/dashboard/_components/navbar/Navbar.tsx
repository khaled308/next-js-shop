"use client";
import { FaBars } from "react-icons/fa";
import ToggleButton from "./ToggleButton";
import UserMenu from "./UserMenu";
import { useToggleSidebar } from "../../_hooks/useToggleSidebar";

const Navbar = () => {
  const { toggleSidebar } = useToggleSidebar();
  return (
    <nav className="sticky z-50 top-0 w-full bg-white dark:bg-gray-800 shadow-sm py-4 px-2 text-emerald-500">
      <div className="container mx-auto flex justify-between items-center">
        <div onClick={toggleSidebar} className="cursor-pointer">
          <FaBars size={24} />
        </div>
        <div className="flex justify-end items-center flex-shrink-0 gap-6">
          <ToggleButton />
          <UserMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
