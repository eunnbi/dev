import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { themeState } from "@stores/themeState";

const THEME = "theme";

export const useTheme = () => {
  const [{ isLightTheme }, setIsLightTheme] = useRecoilState(themeState);

  const changeTheme = () => {
    setIsLightTheme(({ isLightTheme }) => {
      localStorage.setItem(THEME, JSON.stringify(!isLightTheme));
      return { isLightTheme: !isLightTheme };
    });
  };
  useEffect(() => {
    const theme = window.localStorage.getItem(THEME);
    if (theme !== null) {
      setIsLightTheme({ isLightTheme: JSON.parse(theme) });
    }
  }, []);
  return { isLightTheme, changeTheme };
};
