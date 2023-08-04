import { useEffect } from "react";
import { useThemeStore } from "@/stores/themeState";

const THEME = "theme";

export const useTheme = () => {
  const { isLightTheme, setTheme, toggleTheme } = useThemeStore();

  const changeTheme = () => {
    localStorage.setItem(THEME, JSON.stringify(!isLightTheme));
    toggleTheme();
  };
  useEffect(() => {
    const theme = window.localStorage.getItem(THEME);
    if (theme !== null) {
      setTheme({ isLightTheme: JSON.parse(theme) });
    }
  }, []);
  return { isLightTheme, changeTheme };
};
