import {CONFIG} from 'types';

const config = {
  name: 'hi5',
  policyURL: 'https://google.com',
  termsURL: 'https://google.com',
  androidURL: 'https://google.com', //app link for android
  iosURL: 'https://google.com', //app link for android
};

const development: CONFIG = {
  ...config,
  mode: 'Development',
  version: '0.0.1',
  baseURL: 'http://192.168.1.79:3001/api/v1', //Bapi da PC
  resendOTP: 20000,
};

const production: CONFIG = {
  ...config,
  mode: 'Production',
  version: '0.0.1',
  baseURL: 'http://3.111.123.169:5082/api/v1', // Main server
  resendOTP: 200000,
};

export default __DEV__ ? development : production;
