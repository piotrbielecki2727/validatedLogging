import { createSlice } from "@reduxjs/toolkit";

type ThemeMode = "light" | "dark";

const THEME_STORAGE_KEY = "theme-mode";

type ThemeState = {
  mode: ThemeMode;
  isInitialized: boolean;
};

const initialState: ThemeState = {
  mode: "light",
  isInitialized: false,
};

const getStoredTheme = (): ThemeMode | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
};

const setStoredTheme = (mode: ThemeMode) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(THEME_STORAGE_KEY, mode);
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", state.mode === "dark");
      setStoredTheme(state.mode);
    },
    initializeTheme: (state) => {
      if (!state.isInitialized && typeof window !== "undefined") {
        const storedTheme = getStoredTheme();
        if (storedTheme) state.mode = storedTheme;
        else {
          state.mode = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
          setStoredTheme(state.mode);
        }
        state.isInitialized = true;
        document.documentElement.classList.toggle(
          "dark",
          state.mode === "dark"
        );
      }
    },
  },
});

export const { toggleTheme, initializeTheme } = themeSlice.actions;
export default themeSlice.reducer;
