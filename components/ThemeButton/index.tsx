import { IoMoon, IoSunny } from "react-icons/io5";
import { Button, Circle } from "./ThemeButton.styles";

interface ThemeButtonProps {
  isLightTheme: boolean;
  changeTheme: () => void;
}

const ThemeButton = ({ isLightTheme, changeTheme }: ThemeButtonProps) => {
  return (
    <Button onClick={changeTheme} isLightTheme={isLightTheme}>
      <Circle isLightTheme={isLightTheme} />
      <IoSunny />
      <IoMoon />
    </Button>
  );
};

export default ThemeButton;
