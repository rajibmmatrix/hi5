import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}

//For Stack Navigations
export type StackParamList = {
  Splash: undefined;
  //Auth Screens
  Login: undefined;
  Logout: undefined;
  Signup: {mobile: string} | undefined;
  Verify: {mobile: string} | undefined;

  //App Screens
  Tab: NavigatorScreenParams<TabParamList> | undefined;
  //Details: {id: string};
  //Video: undefined;
  Profile: undefined;
  EditProfile: undefined;
};

//For Tab Navigations
export type TabParamList = {
  Home: undefined;
  News: undefined;
  TV: undefined;
  FM: undefined;
  More: undefined;
};

//For Stack Screens
export type StackScreenProps<Screen extends keyof StackParamList> =
  NativeStackScreenProps<StackParamList, Screen>;

//For Tab Screens
export type TabScreenProps<Screen extends keyof TabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabParamList, Screen>,
    NativeStackScreenProps<StackParamList>
  >;

type MODE = 'Production' | 'Development';

export interface CONFIG {
  name: string;
  mode: MODE;
  version: string;
  baseURL: string;
  termsURL: string;
  policyURL: string;
  resendOTP: number;
}

export interface ILogin {
  phone_no: string;
}

export interface IVerify {
  phone_no: string;
  otp: string;
  device_id?: string;
  device_model?: string;
  device_type?: string;
}

export interface ISignup {
  full_name: string;
  email: string;
}
