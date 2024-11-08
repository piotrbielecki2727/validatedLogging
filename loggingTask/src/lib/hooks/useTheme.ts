import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { AppDispatch } from "../store/store";
import { selectTheme } from "../store/selectors";

export const useTheme = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector(selectTheme);
  return {
    theme,
    toggleTheme: () => dispatch(toggleTheme()),
  };
};
