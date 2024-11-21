import React, { createContext, useEffect, useState } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../theme/theme';

type ThemeMode = 'light' | 'dark';

const THEME_STORAGE_KEY = 'theme-mode';

export type ThemeContextType = {
  mode: ThemeMode;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const getStoredTheme = (): ThemeMode | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
};

const setStoredTheme = (mode: ThemeMode) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(THEME_STORAGE_KEY, mode);
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<ThemeMode>('light');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      setMode(storedTheme);
    } else {
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
      setMode(systemPreference);
      setStoredTheme(systemPreference);
    }
    setIsInitialized(true);
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }, [mode]);

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    setStoredTheme(newMode);
    document.documentElement.classList.toggle('dark', newMode === 'dark');
  };

  if (!isInitialized) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <SCThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
};
