import {configureStore} from '@reduxjs/toolkit';
import loadingReducer from './features/loading/loadingSlice';
import authReducer from './features/auth/authSlice';

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
