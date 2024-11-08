import IconComponent from "../IconComponent/IconComponent";
import { RiSunFill, RiMoonFill } from "react-icons/ri";
import { OutlineButton } from "../Button/Button";
import { useTheme } from "../../../lib/hooks/useTheme";

const ChangingTheme = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <OutlineButton onClick={toggleTheme}>
      <IconComponent icon={theme === "light" ? RiSunFill : RiMoonFill} />
    </OutlineButton>
  );
};

export default ChangingTheme;
