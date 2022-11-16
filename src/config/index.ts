import {CONFIG} from 'types';

const config = {
  name: 'hi5',
};

const development: CONFIG = {
  ...config,
  mode: 'Development',
  version: '0.0.1',
  baseURL: 'http://3.111.123.169:5082/api/v1',
  policyURL: 'https://google.com',
  termsURL: 'https://google.com',
  resendOTP: 20000,
};

const production: CONFIG = {
  ...config,
  mode: 'Production',
  version: '0.0.1',
  baseURL: 'http://3.111.123.169:5082/api/v1',
  policyURL: 'https://google.com',
  termsURL: 'https://google.com',
  resendOTP: 200000,
};

export default __DEV__ ? development : production;
