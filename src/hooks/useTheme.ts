import { useThemeStore } from "@/stores/themeState";

const THEME = "theme";

export const useTheme = () => {
  const { isLightTheme, setTheme } = useThemeStore();

  const changeTheme = async () => {
    setTheme({ isLightTheme: !isLightTheme });
    const body = {
      key: THEME,
      value: isLightTheme ? "dark" : "light"
    };
    try {
      await fetch("/api/cookie", {
        method: "POST",
        body: JSON.stringify(body)
      });
    } catch (e) {
      console.log(e);
    }
  };
  return { isLightTheme, changeTheme };
};
