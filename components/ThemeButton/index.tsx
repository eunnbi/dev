import { IoMoon, IoSunny } from "react-icons/io5";
import { useTheme } from "../../hooks/useTheme";
import { Button, Circle } from "./ThemeButton.styles";
import React from "react";

const ThemeButton = () => {
  const { isLightTheme, changeTheme } = useTheme();
  return (
    <Button onClick={changeTheme} isLightTheme={isLightTheme}>
      <Circle isLightTheme={isLightTheme} />
      <IoSunny />
      <IoMoon />
    </Button>
  );
};

export default React.memo(ThemeButton);
