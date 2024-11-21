import IconComponent from '../IconComponent/IconComponent';
import { RiSunFill, RiMoonFill } from 'react-icons/ri';
import { OutlineButton } from '../Button/Button';
import { useTheme } from '../../../lib/hooks/useTheme';

const ChangingTheme = () => {
  const { mode, toggleTheme } = useTheme();
  return (
    <OutlineButton onClick={toggleTheme}>
      <IconComponent icon={mode === 'light' ? RiSunFill : RiMoonFill} />
    </OutlineButton>
  );
};

export default ChangingTheme;
