import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface AuthState {
  isLogedin: boolean;
}

const initialState: AuthState = {
  isLogedin: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.isLogedin = true;
    },
    logout: state => {
      state.isLogedin = false;
    },
    changeLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogedin = action.payload;
    },
  },
});

export const {login, logout, changeLogin} = authSlice.actions;

export default authSlice.reducer;
