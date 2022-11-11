import axios from 'axios';
import {baseURL} from '~constants';

export const API = axios.create({baseURL: baseURL});

export const setApiToken = (AUTH_TOKEN: string) =>
  (API.defaults.headers.common.Authorization = `Bearer ${AUTH_TOKEN}`);

export const removeApiToken = () =>
  (API.defaults.headers.common.Authorization = '');
