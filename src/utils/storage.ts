import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_LOCATION = '@token';

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
