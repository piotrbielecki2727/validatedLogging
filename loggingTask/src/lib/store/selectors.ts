import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const selectIsLoggedIn = createSelector(
  (state: RootState) => state.auth.isLoggedIn,
  (isLoggedIn) => isLoggedIn
);

export const selectTheme = createSelector(
  (state: RootState) => state.theme.mode,
  (state: RootState) => state.theme.isInitialized,
  (mode, isInitialized) => ({ mode, isInitialized })
);

export const selectFilteredData = createSelector(
  (state: RootState) => state.users.filteredUsers,
  (state: RootState) => state.users.filterValues,
  (filteredUsers, filterValues) => ({
    filteredUsers,
    filterValues,
  })
);

export const selectUsers = createSelector(
  (state: RootState) => state.users.users,
  (users) => users
);
