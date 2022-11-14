import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {
  checkLogin,
  getUser,
  login,
  logout,
  signup,
  verify,
} from '../auth/authAction';

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
    builder.addCase(verify.pending, (state: LoadingState) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(verify.fulfilled, (state: LoadingState) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(verify.rejected, (state: LoadingState, action: any) => {
      state.isLoading = false;
      if (action.payload) {
        state.error = action.payload?.errorMessage;
      } else {
        state.error = action.error?.message as string;
      }
    });
    builder.addCase(signup.pending, (state: LoadingState) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signup.fulfilled, (state: LoadingState) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(signup.rejected, (state: LoadingState, action: any) => {
      state.isLoading = false;
      if (action.payload) {
        state.error = action.payload?.errorMessage;
      } else {
        state.error = action.error?.message as string;
      }
    });
    builder.addCase(getUser.pending, (state: LoadingState) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getUser.fulfilled, (state: LoadingState) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getUser.rejected, (state: LoadingState, action: any) => {
      state.isLoading = false;
      if (action.payload) {
        state.error = action.payload?.errorMessage;
      } else {
        state.error = action.error?.message as string;
      }
    });
    builder.addCase(checkLogin.pending, (state: LoadingState) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(checkLogin.fulfilled, (state: LoadingState) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(checkLogin.rejected, (state: LoadingState, action: any) => {
      state.isLoading = false;
      if (action.payload) {
        state.error = action.payload?.errorMessage;
      } else {
        state.error = action.error?.message as string;
      }
    });
    builder.addCase(logout.pending, (state: LoadingState) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(logout.fulfilled, (state: LoadingState) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(logout.rejected, (state: LoadingState, action: any) => {
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
