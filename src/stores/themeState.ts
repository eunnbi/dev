import { create } from "zustand";

export interface ThemeState {
  isLightTheme?: boolean;
}

export interface ThemeStore extends ThemeState {
  setTheme: (state: ThemeState) => void;
}

export const useThemeStore = create<ThemeStore>(set => ({
  isLightTheme: undefined,
  setTheme: state => set(state)
}));
