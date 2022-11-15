import {createAsyncThunk} from '@reduxjs/toolkit';
import Toast from 'react-native-simple-toast';
import {api} from '~services';
import {ILogin, ISignup, IVerify} from 'types';

//For login user
export const login = createAsyncThunk(
  'auth/login',
  async (params: ILogin, thunkAPI) => {
    try {
      const {data} = await api.signIn(params);
      Toast.show(data.message);
      return data.data;
    } catch (error: any) {
      Toast.show(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

//For verify user
export const verify = createAsyncThunk(
  'auth/verify',
  async (params: IVerify, thunkAPI) => {
    try {
      const {data} = await api.verify(params);
      await api.saveToken(data.data?.accessToken);
      if (data.data?.profile_completed) {
        await api.setLogedin(true);
      }
      Toast.show(data.message);
      return data.data;
    } catch (error: any) {
      Toast.show(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

//For signup user
export const signup = createAsyncThunk(
  'auth/signup',
  async (params: ISignup, thunkAPI) => {
    try {
      const {data} = await api.signUp(params);
      await api.setLogedin(true);
      Toast.show(data.message);
      return data.data;
    } catch (error: any) {
      Toast.show(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

//For get user info
export const getUser = createAsyncThunk('auth/getuser', async (_, thunkAPI) => {
  try {
    const {data} = await api.getUser();
    return data.data;
  } catch (error: any) {
    Toast.show(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const checkLogin = createAsyncThunk(
  'auth/checkLogin',
  async (_, thunkAPI) => {
    try {
      const isLogedin = await api.getLogedin();
      const token = await api.getToken();
      if (!token || !isLogedin) {
        return {isLogin: false, user: null};
      }
      await api.setToken(token);
      const {data} = await api.getUser();
      return {isLogin: true, user: data.data};
    } catch (error: any) {
      Toast.show(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    api.deleteToken();
    await api.setLogedin(false);
    return false;
  } catch (error: any) {
    Toast.show(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});
