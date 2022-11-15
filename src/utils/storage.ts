import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_LOCATION = '@token';
const ISLOGIN = '@isLogedin';

export const getToken = async (): Promise<string | null> => {
  try {
    const token = await AsyncStorage.getItem(TOKEN_LOCATION);
    return token != null ? JSON.parse(token) : null;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const setToken = async (value: string): Promise<boolean> => {
  try {
    const token = JSON.stringify(value);
    await AsyncStorage.setItem(TOKEN_LOCATION, token);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const deleteToken = async (): Promise<boolean> => {
  try {
    await AsyncStorage.removeItem(TOKEN_LOCATION);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

//For handel login state
export const getLogin = async (): Promise<boolean> => {
  try {
    const isLogin = await AsyncStorage.getItem(ISLOGIN);
    return isLogin != null ? JSON.parse(isLogin) : false;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const setLogin = async (value: boolean): Promise<boolean> => {
  try {
    const data = JSON.stringify(value);
    await AsyncStorage.setItem(ISLOGIN, data);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
