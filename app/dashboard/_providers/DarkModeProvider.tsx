"use client";
import React from "react";
import { useToggleDarkMode } from "../_hooks/useToggleDarkMode";

const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
  const { darkMode } = useToggleDarkMode();
  return <div className={darkMode ? "dark" : ""}>{children}</div>;
};

export default DarkModeProvider;
