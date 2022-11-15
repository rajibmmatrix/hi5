import config from '~config';

export const baseURL = config.baseURL;

export const URL = {
  //Auth
  getUser: '/auth/customer',
  login: '/auth/generateOTP',
  signup: '/auth/updateUser',
  verify: '/auth/validateOTP',
};
