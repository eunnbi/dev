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
      <IoMoon />
      <IoSunny />
    </Button>
  );
};

export default ThemeButton;
