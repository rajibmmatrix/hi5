import {URL} from '~constants';
import {API, removeApiToken, setApiToken, storage} from '~utils';
import {ILogin, ISignup, IVerify} from 'types';

//Auth API
export const getUser = () => API.get(URL.getUser);
export const signIn = (params: ILogin) => API.post(URL.login, params);
export const signUp = (params: ISignup) => API.put(URL.signup, params);
export const verify = (params: IVerify) => API.post(URL.verify, params);

//For Manage Token
export const saveToken = async (params: string) => {
  setApiToken(params);
  return await storage.setToken(params);
};

export const deleteToken = async () => {
  removeApiToken();
  return await storage.deleteToken();
};

export const getToken = () => storage.getToken();
export const setToken = async (params: string) => setApiToken(params);
export const getLogedin = () => storage.getLogin();
export const setLogedin = (value: boolean) => storage.setLogin(value);
