import {URL} from '~constants';
import {API, removeApiToken, setApiToken} from '~utils';
import {ILogin, ISignup, IVerify} from 'types';

//Auth API
export const getUser = () => API.get(URL.getUser);
export const signIn = (params: ILogin) => API.post(URL.login, params);
export const signUp = (params: ISignup) => API.put(URL.signup, params);
export const verify = (params: IVerify) => API.post(URL.verify, params);

//For Manage Token
export const setToken = (params: string) => setApiToken(params);
export const deleteToken = () => removeApiToken();
