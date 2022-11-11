import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {login} from '../auth/authAction';

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

const initialState: LoadingState = {
  isLoading: false,
  error: null,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoading: state => {
      state.isLoading = true;
    },
    stopLoading: state => {
      state.isLoading = false;
    },
    loading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, (state: LoadingState) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state: LoadingState) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(login.rejected, (state: LoadingState, action: any) => {
      state.isLoading = false;
      if (action.payload) {
        state.error = action.payload?.errorMessage;
      } else {
        state.error = action.error?.message as string;
      }
    });
  },
});

export const {startLoading, stopLoading, loading} = loadingSlice.actions;

export default loadingSlice.reducer;
