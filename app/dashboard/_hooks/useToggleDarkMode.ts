import { create } from "zustand";

interface DarkModeState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useToggleDarkMode = create<DarkModeState>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));
