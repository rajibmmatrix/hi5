import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {checkLogin, getUser, login, logout, signup, verify} from './authAction';

export interface IUser {
  name?: string;
  email?: string;
  phone_no: string;
  image?: string;
  address?: [];
  date_of_birth?: string;
  gender?: string;
  //for login
  otp?: string;
  new_user?: boolean;
}

export interface AuthState {
  isLoggedin: boolean;
  isLoading: boolean;
  user: IUser | null;
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
    builder.addCase(login.fulfilled, (state: AuthState, action: any) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(verify.fulfilled, (state: AuthState, action: any) => {
      state.isLoading = false;
      state.isLoggedin = action.payload?.profile_completed;
      state.user = action.payload?.profile;
      state.error = null;
    });
    builder.addCase(signup.fulfilled, (state: AuthState, action: any) => {
      state.isLoading = false;
      state.isLoggedin = true;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(getUser.fulfilled, (state: AuthState, action: any) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(checkLogin.fulfilled, (state: AuthState, action: any) => {
      state.isLoading = false;
      state.isLoggedin = action.payload?.isLogin;
      state.user = action.payload?.user;
      state.error = null;
    });
    builder.addCase(logout.fulfilled, (state: AuthState, action: any) => {
      state.isLoading = false;
      state.isLoggedin = action.payload;
      state.user = null;
      state.error = null;
    });
  },
});

export const {startAuthLoading, stopAuthLoading, authLoading} =
  authSlice.actions;

export default authSlice.reducer;
