import { createSlice } from '@reduxjs/toolkit';

type CollapseState = {
  isCollapsed: boolean;
};

const COLLAPSE_STORAGE_KEY = 'collapse-mode';

const initialState: CollapseState = {
  isCollapsed: false,
};

const getStoredCollapse = (): boolean => {
  if (typeof window === 'undefined') return false;
  const storedValue = localStorage.getItem(COLLAPSE_STORAGE_KEY);
  return storedValue === 'true';
};

const setStoredCollapse = (status: boolean) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(COLLAPSE_STORAGE_KEY, JSON.stringify(status));
};

export const collapseSlice = createSlice({
  name: 'collapse',
  initialState,
  reducers: {
    toggleCollapse: (state) => {
      state.isCollapsed = !state.isCollapsed;
      setStoredCollapse(state.isCollapsed);
    },
    initializeCollapse: (state) => {
      state.isCollapsed = getStoredCollapse();
    },
    resetState: () => initialState,
  },
});

export const { toggleCollapse, initializeCollapse, resetState } =
  collapseSlice.actions;
export default collapseSlice.reducer;
