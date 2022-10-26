import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface AuthState {
  isLoggedin: boolean;
}

const initialState: AuthState = {
  isLoggedin: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.isLoggedin = true;
    },
    logout: state => {
      state.isLoggedin = false;
    },
    changeLogin: (state, action: PayloadAction<boolean>) => {
      state.isLoggedin = action.payload;
    },
  },
});

export const {login, logout, changeLogin} = authSlice.actions;

export default authSlice.reducer;
