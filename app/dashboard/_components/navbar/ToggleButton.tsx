"use client";
import { CiLight, CiDark } from "react-icons/ci";
import { useToggleDarkMode } from "@/app/dashboard/_hooks/useToggleDarkMode";

const ToggleButton = () => {
  const { toggleDarkMode, darkMode } = useToggleDarkMode();

  return (
    <button
      className="rounded-md text-xl focus:outline-none"
      onClick={toggleDarkMode}
    >
      {darkMode ? <CiLight size={24} /> : <CiDark size={24} />}
    </button>
  );
};

export default ToggleButton;
