import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { initializeTheme } from "../lib/store/themeSlice";
import { darkTheme, lightTheme } from "./theme";
import { selectTheme } from "../lib/store/selectors";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const dispatch = useDispatch();
  const { mode, isInitialized } = useSelector(selectTheme);

  useEffect(() => {
    dispatch(initializeTheme());
  }, [dispatch]);

  if (!isInitialized) {
    return null;
  }

  return (
    <SCThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      {children}
    </SCThemeProvider>
  );
}
