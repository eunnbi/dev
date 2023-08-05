import { create } from "zustand";

export interface ThemeState {
  isLightTheme: boolean;
}

export interface ThemeStore extends ThemeState {
  toggleTheme: () => void;
  setTheme: (state: ThemeState) => void;
}

export const useThemeStore = create<ThemeStore>(set => ({
  isLightTheme: true,
  toggleTheme: () => set(state => ({ isLightTheme: !state.isLightTheme })),
  setTheme: state => set(state)
}));
