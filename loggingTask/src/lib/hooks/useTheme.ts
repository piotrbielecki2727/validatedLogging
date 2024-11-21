import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from '../../context/ThemeContext';

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used inside provider');
  }
  return context;
};
