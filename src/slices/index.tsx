import { configureStore } from '@reduxjs/toolkit';

import usersReducer from './usersSlice';

const store = configureStore({
  reducer: {

    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export default store;