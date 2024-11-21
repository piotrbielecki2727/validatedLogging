import { configureStore } from '@reduxjs/toolkit';
import authReducer, { resetState as resetAuthState } from './authSlice';
import usersReducer, { resetState as resetUsersState } from './usersSlice';
import collapseReducer from './collapseSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    collapse: collapseReducer,
  },
});

export const resetStore = () => {
  store.dispatch(resetAuthState());
  store.dispatch(resetUsersState());
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
