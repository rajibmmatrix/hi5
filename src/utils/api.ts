import axios from 'axios';
import config from '~config';

const API = axios.create({
  baseURL: config.baseURL,
  responseType: 'json',
  timeout: 5000,
});

API.interceptors.response.use(
  function (response) {
    if (response.data?.success) {
      return response;
    } else {
      return Promise.reject(response);
    }
  },
  function (error) {
    return Promise.reject(error);
  },
);

export const setApiToken = (AUTH_TOKEN: string) =>
  (API.defaults.headers.common.Authorization = `Bearer ${AUTH_TOKEN}`);

export const removeApiToken = () =>
  (API.defaults.headers.common.Authorization = '');

export default API;
