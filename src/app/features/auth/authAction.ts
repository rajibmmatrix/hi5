import {createAsyncThunk} from '@reduxjs/toolkit';
import Toast from 'react-native-simple-toast';
import {ROUTES} from '~constants';
import {storage, navigation} from '~utils';
import {api} from '~services';
import {ILogin, ISignup, IVerify} from 'types';

//For login user
export const login = createAsyncThunk(
  'auth/login',
  async (params: ILogin, thunkAPI) => {
    try {
      const {data} = await api.signIn(params);
      console.log(data);
      if (!data.success) {
        Toast.show(data.message);
        return thunkAPI.rejectWithValue(data.message);
      }
      Toast.show(data.message);
      navigation.navigate('Verify', {mobile: params.phone_no} as never);
      return data.details;
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
      console.log({data});
      if (!data.success) {
        Toast.show(data.message);
        return thunkAPI.rejectWithValue(data.message);
      } else if (data.data.user) {
        api.setToken(data.token);
        await storage.setToken(data.token);
      } else {
        Toast.show(data.message);
        navigation.navigate(
          ROUTES.Signup as never,
          {mobile: params.phone_no} as never,
        );
      }
      return data.details;
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
      if (!data.success) {
        Toast.show(data.message);
        return thunkAPI.rejectWithValue(data.message);
      }
      Toast.show(data.message);
      navigation.navigate(ROUTES.Tab as never);
      return data.details;
    } catch (error: any) {
      Toast.show(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
