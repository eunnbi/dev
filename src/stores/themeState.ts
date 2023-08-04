import { create } from "zustand";

export interface ThemeState {
  isLightTheme: boolean;
  toggleTheme: () => void;
  setTheme: (state: { isLightTheme: boolean }) => void;
}

export const useThemeStore = create<ThemeState>(set => ({
  isLightTheme: true,
  toggleTheme: () => set(state => ({ isLightTheme: !state.isLightTheme })),
  setTheme: state => set(state)
}));
