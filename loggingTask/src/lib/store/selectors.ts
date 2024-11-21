import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const selectIsCollapsed = (state: RootState) =>
  state.collapse.isCollapsed;

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
