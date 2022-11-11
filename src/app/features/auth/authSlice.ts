import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {login} from './authAction';

export interface AuthState {
  isLoggedin: boolean;
  isLoading: boolean;
  user: any;
  error: string | null;
}

const initialState: AuthState = {
  isLoggedin: false,
  isLoading: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startAuthLoading: state => {
      state.isLoading = true;
    },
    stopAuthLoading: state => {
      state.isLoading = false;
    },
    authLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, (state: AuthState) => {
      state.isLoading = true;
      state.user = null;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state: AuthState) => {
      state.isLoading = false;
      state.user = null;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action: any) => {
      state.isLoading = false;
      if (action.payload) {
        state.error = action.payload?.errorMessage;
      } else {
        state.error = action.error?.message as string;
      }
    });
  },
});

export const {startAuthLoading, stopAuthLoading, authLoading} =
  authSlice.actions;

export default authSlice.reducer;
